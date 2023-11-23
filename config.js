const { HTTP_PORT, SOCKET_PORT } = process.env;
class Config {
  constructor() {
    this.HTTP_PORT = HTTP_PORT || 9695;
    this.SOCKET_PORT = SOCKET_PORT || 9694;
  }
}

module.exports = { CONFIG: new Config() };
