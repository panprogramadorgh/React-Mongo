import mongoose from "mongoose";

export const mongoValidationErrorHandler = (err, req, res, next) => {
  if (err instanceof mongoose.Error.ValidationError) {
    return res.status(500).json({
      statusError: 500,
      errorMessage: "Mongoose validation error",
    });
  }
  next(err);
};

export const globalErrorHandler = (err, req, res, next) => {
  console.log(err);
  res.status(err.status).json({
    statusError: err.status,
    errorMessage: err.message,
  });
};
