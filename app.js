const express = require('express');
const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const port = 3000;
app.use(express.static(__dirname + "/public"));
let lines = [];

io.on("connection", (socket) => {
  console.log("Client connected");

  socket.emit("lines", lines); // Envia as linhas atuais para o cliente recém conectado

  socket.on("lines", (newLines) => {
    lines = newLines; // Atualiza as linhas com as novas linhas recebidas do cliente
    socket.broadcast.emit("lines", lines); // Envia as linhas atualizadas para todos os outros clientes
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});