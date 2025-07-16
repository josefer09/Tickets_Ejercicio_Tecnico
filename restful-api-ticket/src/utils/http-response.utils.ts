import { HttpStatus } from '@nestjs/common';

export abstract class HttpResponseMessage {
  static success(data?: object, message = 'Request completed successfully', statusCode: number = HttpStatus.OK) {
    return {
      statusCode,
      message,
      ...(data !== undefined && { data }),
    };
  }

  static created(data?: object) {
    return this.success(data, 'Resource created successfully', HttpStatus.CREATED);
  }

  static updated(data?: object) {
    return this.success(data, 'Resource updated successfully');
  }

  static deleted(data?: object) {
    return this.success(data, 'Resource deleted successfully');
  }

  static custom(message: string, data?: object, statusCode: number = HttpStatus.OK) {
    return {
      statusCode,
      message,
      ...(data !== undefined && { data }),
    };
  }
}
