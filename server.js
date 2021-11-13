require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const SocketServer = require('./socketServer');
const { ExpressPeerServer } = require('peer');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// socket
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// established connection
io.on('connection', (socket) => {
  SocketServer(socket);
});

// create peer server
ExpressPeerServer(http, { path: '/' });

// implement routes
app.use('/api', require('./routes/authRouter'));
app.use('/api', require('./routes/userRouter'));
app.use('/api', require('./routes/postRouter'));
app.use('/api', require('./routes/commentRouter'));
app.use('/api', require('./routes/notifyRouter'));
app.use('/api', require('./routes/messageRouter'));

const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      throw err;
    }
    console.log('CONNECTED TO MONGODB!');
  }
);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;
http.listen(port, () => {
  console.log('Server is running on port: ', port);
});
