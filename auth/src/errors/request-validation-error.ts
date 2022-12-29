import { ValidationError } from 'express-validator';

export class RequestValidationError extends Error {
  constructor(public errors: ValidationError[]) {
    super();

    // Only because we are extending a build in
    // https://stackoverflow.com/a/41102306
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
}
