const { CONFIG } = require("./config");
const app = require("./app");
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
// console.log(CONFIG);
io.on("connection", (socket) => {
  console.log("a user connected");
});

app.listen(CONFIG.HTTP_PORT, () => {
  console.log(`server running at http://localhost:${CONFIG.HTTP_PORT}`);
});
