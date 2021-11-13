const mongoose = require('mongoose');
const { ObjectId, String } = mongoose.Schema.Types;
const messageSchema = new mongoose.Schema(
  {
    conversation: { type: ObjectId, ref: 'Conversation' },
    sender: { type: ObjectId, ref: 'User' },
    recipients: { type: ObjectId, ref: 'User' },
    text: String,
    media: Array,
    call: Object,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
