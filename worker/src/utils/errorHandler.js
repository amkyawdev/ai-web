/**
 * Error Handler - Error handling utilities
 */

export class ErrorHandler {
  static handle(error, context = {}) {
    console.error(`[Error] ${context.endpoint || 'Unknown'}:`, error);
    
    return {
      message: error.message || "Internal Server Error",
      code: error.code || "INTERNAL_ERROR",
      context
    };
  }
  
  static isTrusted(error) {
    return error instanceof TypeError || error instanceof RangeError;
  }
  
  static format(error) {
    return {
      error: this.handle(error).message,
      ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
    };
  }
}

export function withErrorHandling(handler) {
  return async (request, env) => {
    try {
      return await handler(request, env);
    } catch (error) {
      return new Response(JSON.stringify(ErrorHandler.format(error)), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  };
}
