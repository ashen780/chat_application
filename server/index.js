const express = require('express');
const http = require('http');
const router = require('./router');
const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
      origin: "*",
    }
  });

io.on('connection', (socket) => {
    console.log('new conecton !!!');

    socket.on('join', ({name,room}) => {
        console.log(name,room);
    })
    socket.on('disconnect', () => {
        console.log('user disconected !!');
    })
});
app.use(router);


server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));