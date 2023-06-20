import { Schema, model } from 'mongoose';


const postSchema = new Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now

    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, {
    collectiona: 'posts',
    timestamps: true
});

export default model('post', postSchema);