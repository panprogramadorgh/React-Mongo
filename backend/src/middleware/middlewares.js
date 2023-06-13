export const routeNotFound = (req, res, next) => {
  const err = new Error("Route not found");
  err.status = 404;
  throw err;
};
