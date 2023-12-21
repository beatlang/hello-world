const express = require('express');
const os = require("os");

const app = express();
const port = 8000;
const hostName = os.hostname();

app.listen(port, () => {
  console.log('listen port 8000');
})

app.get('/hello-world', (req, res) => {
  res.send(`Hello World from ${hostName}`);
})
