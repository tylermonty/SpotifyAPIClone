import bcrypt from "bcrypt";
import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema(
    {
        email: { type: String, required: "email", unique: true },
        info: { firstName: { type: String }, lastName: { type: String }, age: { type: Number } },
        password: { type: String, required: "password" },
        user: { type: String, required: "user name", unique: true }
    }
);

export interface IUser extends mongoose.Document {
    email: { type: string, required: "email", unique: true };
    info: { firstName: { type: string }, lastName: { type: string }, age: { type: number } };
    password: { type: string, required: "password" };
    user: { type: string, required: "user name", unique: true };
    comparePassword(password: string, callback: (err: string, isMatch: boolean) => void): boolean;
}

UserSchema.pre("save", function(next) {
    if (!this.isModified("password")) { return next(); }
    bcrypt.genSalt(10, function(err, salt) {
        if (err) { return next(err); }
        bcrypt.hash(this.password, salt, (error, hash) => {
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
