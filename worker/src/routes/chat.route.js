/**
 * Chat Route - /chat endpoint
 */

export function handleChat(request, env) {
  return {
    endpoint: '/chat',
    handler: async (req, env) => {
      const body = await req.json().catch(() => ({}));
      const { message, conversationId } = body;
      
      if (!message) {
        return new Response(JSON.stringify({ error: "Message is required" }), {
          status: 400,
          headers: { "Content-Type": "application/json" }
        });
      }
      
      // Call AI API
      const API_KEY = env.ONE_HANDS_API;
      
      if (!API_KEY) {
        return new Response(JSON.stringify({ error: "API key not configured" }), {
          status: 500,
          headers: { "Content-Type": "application/json" }
        });
      }
      
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
          headers: { "Content-Type": "application/json" }
        });
      }
      
      return new Response(JSON.stringify({
        reply: "Conversation started",
        conversation_id: data.conversation_id
      }), {
        headers: { "Content-Type": "application/json" }
      });
    }
  };
}
