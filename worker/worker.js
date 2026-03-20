/**
 * AI Chat Platform Worker
 * Cloudflare Worker for API endpoints
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 🌐 CORS
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    };

    try {
      // 🛑 Preflight
      if (request.method === "OPTIONS") {
        return new Response(null, { headers: corsHeaders });
      }

      // 🏠 Root - Health check
      if (url.pathname === "/" || url.pathname === "/health") {
        return new Response(JSON.stringify({
          status: "ok",
          message: "🤖 AI Chat Worker is running",
          timestamp: new Date().toISOString()
        }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }

      // 💬 CHAT endpoint
      if (url.pathname === "/chat" && request.method === "POST") {
        const body = await request.json().catch(() => ({}));
        const { message, conversationId } = body;

        if (!message) {
          return new Response(JSON.stringify({
            error: "Message is required"
          }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" }
          });
        }

        const API_KEY = env.ONE_HANDS_API;

        if (!API_KEY) {
          return new Response(JSON.stringify({
            error: "API key not configured"
          }), {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" }
          });
        }

        // 🧠 OpenHands API CALL
        const aiRes = await fetch("https://app.all-hands.dev/api/conversations", {
          method: "POST",
          headers: {
            "Authorization": "Bearer " + API_KEY,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            initial_user_msg: message,
            repository: "https://github.com/amkyawdev/complete-ai-webapp.git"
          })
        });

        const data = await aiRes.json();

        if (!aiRes.ok) {
          return new Response(JSON.stringify({ error: data }), {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" }
          });
        }

        const convId = data.conversation_id || "unknown";

        return new Response(JSON.stringify({
          reply: "✅ Conversation started",
          conversation_id: convId,
          message: message
        }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }

      // 📝 History endpoint
      if (url.pathname === "/history" && request.method === "GET") {
        return new Response(JSON.stringify({
          conversations: []
        }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }

      // ❌ 404
      return new Response(JSON.stringify({
        error: "Not Found",
        path: url.pathname
      }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });

    } catch (err) {
      return new Response(JSON.stringify({ 
        error: err.message,
        stack: err.stack
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
};
