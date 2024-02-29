import { Schema , model} from 'mongoose';

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true,
        minLength: 6
    }
},{timestamps: true});

const User = model('User',UserSchema);

export default User;