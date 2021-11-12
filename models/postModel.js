const mongoose = require('mongoose');
const { String, Array, ObjectId } = mongoose.Schema.Types;
const postSchema = new mongoose.Schema(
  {
    content: String,
    images: {
      type: Array,
      required: true,
    },
    likes: [{ type: ObjectId, ref: 'User' }],
    comments: [{ type: ObjectId, ref: 'Comment' }],
    user: { type: ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
