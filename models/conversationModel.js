const mongoose = require('mongoose');
const conversationSchema = new mongoose.Schema({
  recipients: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
  text: String,
  media: Array,
  call: Object,
});

const Conversation = mongoose.model('Conversation', conversationSchema);
module.exports = Conversation;
