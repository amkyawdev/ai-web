/**
 * Chat Store - Messages state management
 */
export class ChatStore {
  constructor() {
    this.state = {
      messages: [],
      isLoading: false,
      conversationId: null
    };
    
    this.listeners = [];
  }
  
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }
  
  notify() {
    this.listeners.forEach(listener => listener(this.state));
  }
  
  addMessage(role, content) {
    const message = {
      role,
      content,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    this.state.messages.push(message);
    this.notify();
    return message;
  }
  
  setLoading(loading) {
    this.state.isLoading = loading;
    this.notify();
  }
  
  setConversationId(id) {
    this.state.conversationId = id;
    this.notify();
  }
  
  clearMessages() {
    this.state.messages = [];
    this.notify();
  }
  
  getMessages() {
    return this.state.messages;
  }
}
