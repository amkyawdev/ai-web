/**
 * ChatBox Component
 */
export class ChatBox {
  constructor(container) {
    this.container = container;
    this.messages = [];
  }
  
  render() {
    return `
      <div class="chat-box">
        <div class="chat-messages" id="chatMessages">
          ${this.messages.map(msg => this.renderMessage(msg)).join('')}
        </div>
      </div>
    `;
  }
  
  renderMessage(msg) {
    return `
      <div class="message ${msg.role}">
        <div class="message-avatar">
          ${msg.role === 'user' ? '👤' : '🤖'}
        </div>
        <div class="message-content">
          <div class="message-text">${msg.content}</div>
          <div class="message-time">${msg.time}</div>
        </div>
      </div>
    `;
  }
  
  addMessage(msg) {
    this.messages.push(msg);
    this.update();
  }
  
  update() {
    const container = document.getElementById('chatMessages');
    if (container) {
      container.innerHTML = this.render();
    }
  }
}
