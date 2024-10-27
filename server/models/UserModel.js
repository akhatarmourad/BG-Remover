import mongoose, { mongo } from "mongoose";

// Describe User Schema
const UserSchema = new mongoose.Schema(
    {
        clerckId: {type: String, required: true, unique: true},
        email: {type: String, required: true, unique: true},
        photo: {type: String, required: true},
        firstname: {type: String},
        lastname: {type: String},
        credits: {type: Number, default: 5}
    }
);

const UserModel = mongoose.model.user || mongoose.model('user', UserSchema);

export default UserModel;