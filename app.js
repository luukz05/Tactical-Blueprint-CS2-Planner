const express = require("express");
const app = require("express")();
const server = require("http").createServer(app);

const port = 3000;
app.use(express.static(__dirname + "/public"));

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
