import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 }
});

userSchema.statics.hashPassword = function(password) {
    if (!password) {
        throw new Error('Password is required');
    }
    return bcrypt.hashSync(password, 10);
};

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET);
    return token;
};

const User = mongoose.model('User', userSchema);

export default User;
