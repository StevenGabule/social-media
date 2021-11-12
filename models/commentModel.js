const mongoose = require('mongoose');
const { String, ObjectId } = mongoose.Schema.Types;
const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    tag: Object,
    reply: ObjectId,
    likes: [{ type: ObjectId, ref: 'User' }],
    user: { type: ObjectId, ref: 'User' },
    postId: ObjectId,
    postUserid: ObjectId,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
