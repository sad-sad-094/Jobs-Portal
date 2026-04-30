// Augment Express's Request type so req.body is typed as the
// Zod-parsed output after passing through the validate() middleware.
declare namespace Express {
  interface Request {
    body: unknown;
  }
}
