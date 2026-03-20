/**
 * MessageItem Component
 */
export class MessageItem {
  constructor(message) {
    this.message = message;
  }
  
  render() {
    const { role, content, time } = this.message;
    const avatar = role === 'user' 
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M12 6v6l4 2"></path></svg>';
    
    return `
      <div class="message ${role}">
        <div class="message-avatar">${avatar}</div>
        <div class="message-content">
          <div class="message-text">${this.escapeHtml(content)}</div>
          <div class="message-time">${time}</div>
        </div>
      </div>
    `;
  }
  
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}
