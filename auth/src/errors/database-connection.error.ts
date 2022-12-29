import { ValidationError } from 'express-validator';

export class DatabaseConnectionError extends Error {
  statusCode = 500;
  reason = 'Error connecting to database';

  constructor() {
    super();

    // Only because we are extending a build in class https://stackoverflow.com/a/41102306
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeError() {
    return [{ message: this.reason }];
  }
}
