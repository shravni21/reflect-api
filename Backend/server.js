import express from 'express';
// import mongoose from 'mongoose';
const app = express();
app.listen(4000, () =>
    console.log('listening on port 4000')
);

app.get('/', (req, res) => {
    res.json({ msg: 'backend server running' })
});