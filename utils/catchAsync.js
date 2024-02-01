const httpStatus = require("http-status");

const catchAsync = (handler) => {
  return async (req, res, next) => {
    try {
      await handler(req, res, next);
    } catch (error) {
      const status = error.status || httpStatus.INTERNAL_SERVER_ERROR;
      const message = error.message || "Internal Server Error";

      console.error(`Error: ${message}`);
      res.status(status).json({ message });
    }
  };
};

module.exports = catchAsync;
