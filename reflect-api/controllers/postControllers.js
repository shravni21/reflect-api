import Post from '../models/Post.js'
import mongoose from 'mongoose';

//Get all posts 
export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find({}).sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

//get Post
export const getPost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ error: 'Post does not exist' });
    try {
        const post = await Post.findById(id);
        if (!post) return res.status(404).json({ error: 'Post does not exist' });
        res.status(200).json(post);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

//create post
export const createPost = async (req, res) => {
    const { date, title, content } = req.body;

    try {
        const post = await Post.create({ date, title, content });
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete Post
export const deletePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ error: 'Post does not exist' });
    try {
        const post = await Post.findById(id);
        if (!post) return res.status(404).json({ error: 'post doesnot exist' });
        const deletedPost = await Post.findOneAndDelete({ _id: id });
        res.status(200).json(deletedPost);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }

};
export const updatePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({ error: 'Post does not exist' });
    try {
        const post = await Post.findById(id);
        if (!post) return res.status(404).json({ error: 'post doesnot exist' });
        const updatedPost = await Post.findOneAndUpdate({ _id: id }, { ...req.body });
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }

};