import { Request, Response, NextFunction } from 'express';

// Global error-handling middleware for Express.
// Must be registered last (after all routes) and requires exactly 4 parameters
// so Express recognizes it as an error handler rather than a regular middleware.
export const errorMiddleware = (
  err: Error,
  _req: Request, // Unused but required by Express's error-handler signature
  res: Response,
  _next: NextFunction, // Unused; included to satisfy the 4-argument contract
): void => {
  // Log the full stack trace to the server console for debugging
  console.error(err.stack);

  // Respond with a generic 500 and a JSON body that follows the API's
  // { success, message } envelope. Falls back to a default message if the
  // thrown error has no message property.
  res.status(500).json({
    success: false,
    message: err.message || 'Internal server error',
  });
};
