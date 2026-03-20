/**
 * InputBar Component
 */
export class InputBar {
  constructor(options = {}) {
    this.placeholder = options.placeholder || 'Type a message...';
    this.onSend = options.onSend || (() => {});
  }
  
  render() {
    return `
      <div class="input-area">
        <div class="input-wrapper">
          <textarea 
            class="input-field" 
            id="messageInput"
            placeholder="${this.placeholder}" 
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
    `;
  }
  
  bindEvents() {
    const input = document.getElementById('messageInput');
    const sendBtn = document.getElementById('sendBtn');
    
    if (sendBtn) {
      sendBtn.addEventListener('click', () => {
        const message = input?.value.trim();
        if (message) {
          this.onSend(message);
          input.value = '';
          input.style.height = 'auto';
        }
      });
    }
    
    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          sendBtn?.click();
        }
      });
      
      input.addEventListener('input', () => {
        input.style.height = 'auto';
        input.style.height = Math.min(input.scrollHeight, 160) + 'px';
      });
    }
  }
}
