class Base {
  constructor() {}

  async errorHandler(err, req, res, next) {
    const response = {
      code: err.status || 500,
      message: err.message || "Internal server Error",
      status: err.status || "Failed",
    };
    res.status(response.code).json(response);
  }
  async notFoundHandler(req, res, next) {
    res.status(404).json({ message: "Route does not exist" });
    next();
  }
}

module.exports = { baseMiddlewares: new Base() };
