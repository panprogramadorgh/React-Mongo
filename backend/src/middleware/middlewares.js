import { databaseConnectedPromise } from "../index.js";

export const databaseDisconnectedHandler = async (req, res, next) => {
  try {
    const connected = await databaseConnectedPromise;
    if (connected) return next();
    const err = new Error("Failed to connect to database");
    err.status = 500;
    throw err;
  } catch (error) {
    next(error);
  }
};

export const routeNotFound = (req, res, next) => {
  const err = new Error("Route not found");
  err.status = 404;
  throw err;
};
