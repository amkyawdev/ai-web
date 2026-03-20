/**
 * ChatPage - Main chat screen
 */
export class ChatPage {
  constructor(app) {
    this.app = app;
  }
  
  render() {
    return `
      <div class="chat-container">
        <header class="chat-header">
          <div class="chat-header-title">
            <h2>AI Assistant</h2>
            <div class="chat-status">
              <span class="chat-status-dot"></span>
              <span>Online</span>
            </div>
          </div>
          <div class="chat-header-actions">
            <button class="btn-icon" id="themeToggle" title="Toggle theme">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            </button>
          </div>
        </header>
        
        <div class="chat-messages" id="chatMessages">
          ${this.app.state.messages.length === 0 ? this.renderWelcome() : ''}
        </div>
        
        <div class="input-area">
          <div class="input-wrapper">
            <textarea 
              class="input-field" 
              id="messageInput"
              placeholder="Type a message..." 
              rows="1"
            ></textarea>
            <button class="send-btn" id="sendBtn">
              <span>Send</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }
  
  renderWelcome() {
    return `
      <div class="welcome-screen">
        <div class="welcome-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
        <h2 class="welcome-title">Welcome to AI Chat</h2>
        <p class="welcome-text">Start a conversation with your AI assistant.</p>
      </div>
    `;
  }
  
  bindEvents() {
    const sendBtn = document.getElementById('sendBtn');
    const messageInput = document.getElementById('messageInput');
    const themeToggle = document.getElementById('themeToggle');
    
    if (sendBtn) {
      sendBtn.addEventListener('click', () => this.app.sendMessage());
    }
    
    if (messageInput) {
      messageInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.app.sendMessage();
        }
      });
      
      messageInput.addEventListener('input', () => {
        messageInput.style.height = 'auto';
        messageInput.style.height = Math.min(messageInput.scrollHeight, 160) + 'px';
      });
    }
    
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.app.toggleTheme());
    }
  }
}
