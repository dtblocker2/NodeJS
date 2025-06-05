const WS = require('ws');

const PORT = process.env.PORT || 8080;

const wss = new WS.Server({ port: PORT }, () =>
  console.log(`ws server live on ${PORT}`)
);

const errHandle = (err) => {
  if (err) throw err;
};

wss.on('connection', (socket) => {
  console.log('something connected');

  socket.send('you are connected', errHandle);

  socket.on('message', (data) => {
    console.log(`socket sent: ${data}`);

    socket.send('message received', errHandle);
  });
});

const bodyParser = require('body-parser');
const express = require('express');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', express.static(__dirname));

app.listen(3000, () => console.log('server is running at 3000'));