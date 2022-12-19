const socketController = (socket) => {
  console.log("Cliente conectado", socket.id);

  socket.on("disconnect", () => {
    console.log("Cliente desconectado", socket.id);
  });

  // Escuchar evento "send-message" y emitirlo a todos los clientes conectados
  socket.on("send-message", (payload, callback) => {
    const id = 123456789;
    callback({ id, date: new Date().getTime() });
    socket.broadcast.emit("send-message", payload);
  });
};

module.exports = {
  socketController,
};
