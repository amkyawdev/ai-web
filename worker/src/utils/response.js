/**
 * Response Utils - Standard API response format
 */

export function jsonResponse(data, status = 200, cors = true) {
  const headers = {
    "Content-Type": "application/json"
  };
  
  if (cors) {
    headers["Access-Control-Allow-Origin"] = "*";
    headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS";
    headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization";
  }
  
  return new Response(JSON.stringify(data), { status, headers });
}

export function errorResponse(message, status = 500) {
  return jsonResponse({ error: message }, status);
}

export function successResponse(data) {
  return jsonResponse({ success: true, ...data });
}
