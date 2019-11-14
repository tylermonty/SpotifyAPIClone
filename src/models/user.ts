import bcrypt from "bcrypt";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        info: { firstName: { type: String }, lastName: { type: String }, age: { type: Number } },
        password: { type: String, required: true },
        user: { type: String, required: true, unique: true }
    }
);

export interface IUser extends mongoose.Document {
    email: { type: string, required: true, unique: true };
    info: { firstName: { type: string }, lastName: { type: string }, age: { type: number } };
    password: { type: string, required: true };
    user: { type: string, required: true, unique: true };
    comparePassword(password: string, callback: (err: string, isMatch: boolean) => void): boolean;
}

UserSchema.pre<IUser>("save", function(next) {
    const user = this;
    console.log("User Schema " + user);
    if (!this.isModified("password")) { return next(); }
    bcrypt.genSalt(10, function(err, salt) {
        if (err) { return next(err); }
        bcrypt.hash(user.password, salt, function(error, hash) {
            if (error) { return next(error); }
            this.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword =
    function(candidatePassword: string, callback: (err: Error, isMatch: boolean) => void) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) { return callback(err, isMatch); }
        callback(null, isMatch);
    });
};

UserSchema.set("toJSON", {
    transform(doc, ret, options) {
        delete ret.password;
        return ret;
    }
});

const UserModel = mongoose.model<IUser>("User", UserSchema);
export default UserModel;
