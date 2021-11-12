const mongoose = require('mongoose');
const { ObjectId, String, Boolean } = mongoose.Schema.Types;

const notifySchema = new mongoose.Schema(
  {
    id: ObjectId,
    user: { type: ObjectId, ref: 'User' },
    recipients: [ObjectId],
    url: String,
    text: String,
    content: String,
    image: String,
    isRead: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Notify = mongoose.model('Notify', notifySchema);
module.exports = Notify;
