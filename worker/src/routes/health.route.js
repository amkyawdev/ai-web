/**
 * Health Route - /health check
 */

export function handleHealth(request, env) {
  return {
    endpoint: '/health',
    handler: async (req, env) => {
      return new Response(JSON.stringify({
        status: "ok",
        message: "Worker is healthy",
        timestamp: new Date().toISOString(),
        environment: env.ENVIRONMENT || "development"
      }), {
        headers: { "Content-Type": "application/json" }
      });
    }
  };
}
