import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
    name : String,
    email: {
        type: String,
        required: true
    }, 
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    }
});

const User = mongoose.model('User', UserSchema);

export default User;