const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || 'Something went wrong';
  const errorDetails = err.details || null;

  res.status(statusCode).json({
    message: errorMessage,
    ...(errorDetails && { details: errorDetails })
  });
};

module.exports = errorHandler;