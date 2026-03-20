/**
 * HistoryPage - Chat history
 */
export class HistoryPage {
  constructor(app) {
    this.app = app;
  }
  
  render() {
    return `
      <div class="chat-container">
        <header class="chat-header">
          <div class="chat-header-title">
            <h2>Chat History</h2>
          </div>
        </header>
        
        <div class="chat-messages">
          <div class="empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <h3>No History Yet</h3>
            <p>Your chat history will appear here</p>
          </div>
        </div>
      </div>
    `;
  }
}
