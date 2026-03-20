/**
 * AI Chat Platform - Main Application
 */

class App {
  constructor() {
    this.state = {
      messages: [],
      isLoading: false,
      isSidebarOpen: false,
      currentPage: 'chat',
      theme: 'dark'
    };
    
    this.init();
  }
  
  init() {
    this.render();
    this.bindEvents();
    this.loadWelcomeMessage();
    console.log('🤖 AI Chat Platform initialized');
  }
  
  render() {
    const app = document.getElementById('app');
    if (!app) return;
    
    app.innerHTML = `
      <button class="mobile-menu-btn" id="mobileMenuBtn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      
      <div class="overlay" id="overlay"></div>
      
      <aside class="sidebar" id="sidebar">
        <div class="sidebar-header">
          <div class="sidebar-logo">
            <div class="sidebar-logo-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <span class="sidebar-logo-text">AI Chat</span>
          </div>
        </div>
        
        <nav class="sidebar-nav">
          <div class="nav-section">
            <div class="nav-section-title">Menu</div>
            <a class="nav-item active" data-page="chat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>Chat</span>
            </a>
            <a class="nav-item" data-page="history">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>History</span>
            </a>
            <a class="nav-item" data-page="collections">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <span>Collections</span>
            </a>
          </div>
          
          <div class="nav-section">
            <div class="nav-section-title">Settings</div>
            <a class="nav-item" data-page="settings">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
              <span>Settings</span>
            </a>
          </div>
        </nav>
      </aside>
      
      <main class="main-content">
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
            <!-- Messages will be inserted here -->
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
      </main>
    `;
  }
  
  bindEvents() {
    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => this.toggleSidebar());
    }
    
    if (overlay) {
      overlay.addEventListener('click', () => this.toggleSidebar(false));
    }
    
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggleTheme());
    }
    
    // Navigation
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', (e) => {
        const page = e.currentTarget.dataset.page;
        this.navigateTo(page);
      });
    });
    
    // Send message
    const sendBtn = document.getElementById('sendBtn');
    const messageInput = document.getElementById('messageInput');
    
    if (sendBtn) {
      sendBtn.addEventListener('click', () => this.sendMessage());
    }
    
    if (messageInput) {
      messageInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          this.sendMessage();
        }
      });
      
      // Auto-resize
      messageInput.addEventListener('input', () => {
        messageInput.style.height = 'auto';
        messageInput.style.height = Math.min(messageInput.scrollHeight, 160) + 'px';
      });
    }
  }
  
  toggleSidebar(open) {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    if (open === undefined) {
      this.state.isSidebarOpen = !this.state.isSidebarOpen;
    } else {
      this.state.isSidebarOpen = open;
    }
    
    if (this.state.isSidebarOpen) {
      sidebar?.classList.add('open');
      overlay?.classList.add('active');
    } else {
      sidebar?.classList.remove('open');
      overlay?.classList.remove('active');
    }
  }
  
  toggleTheme() {
    this.state.theme = this.state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', this.state.theme);
    localStorage.setItem('theme', this.state.theme);
  }
  
  loadTheme() {
    const saved = localStorage.getItem('theme') || 'dark';
    this.state.theme = saved;
    document.documentElement.setAttribute('data-theme', saved);
  }
  
  navigateTo(page) {
    this.state.currentPage = page;
    
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.page === page);
    });
    
    this.toggleSidebar(false);
    
    if (page === 'chat') {
      this.showChatPage();
    } else if (page === 'history') {
      this.showHistoryPage();
    } else if (page === 'collections') {
      this.showCollectionsPage();
    } else if (page === 'settings') {
      this.showSettingsPage();
    }
  }
  
  showChatPage() {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    if (this.state.messages.length === 0) {
      this.loadWelcomeMessage();
    } else {
      this.renderMessages();
    }
  }
  
  showHistoryPage() {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    chatMessages.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <h3>No History Yet</h3>
        <p>Your chat history will appear here</p>
      </div>
    `;
  }
  
  showCollectionsPage() {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    chatMessages.innerHTML = `
      <div class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
        <h3>Collections</h3>
        <p>Save and organize your chats</p>
      </div>
    `;
  }
  
  showSettingsPage() {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    chatMessages.innerHTML = `
      <div style="padding: 20px; max-width: 600px;">
        <h3 style="margin-bottom: 24px;">Settings</h3>
        
        <div style="margin-bottom: 20px;">
          <label style="display: block; margin-bottom: 8px; font-weight: 500;">Theme</label>
          <select id="themeSelect" style="width: 100%; padding: 10px; background: var(--bg-tertiary); border: 1px solid var(--border-default); border-radius: var(--radius-md); color: var(--text-primary);">
            <option value="dark" ${this.state.theme === 'dark' ? 'selected' : ''}>Dark</option>
            <option value="light" ${this.state.theme === 'light' ? 'selected' : ''}>Light</option>
          </select>
        </div>
        
        <div style="margin-bottom: 20px;">
          <label style="display: block; margin-bottom: 8px; font-weight: 500;">Worker URL</label>
          <input type="text" id="workerUrl" placeholder="https://your-worker.workers.dev" style="width: 100%;">
        </div>
        
        <button class="btn btn-primary" onclick="alert('Settings saved!')">Save Settings</button>
      </div>
    `;
    
    const themeSelect = document.getElementById('themeSelect');
    if (themeSelect) {
      themeSelect.addEventListener('change', (e) => {
        this.state.theme = e.target.value;
        document.documentElement.setAttribute('data-theme', e.target.value);
        localStorage.setItem('theme', e.target.value);
      });
    }
  }
  
  loadWelcomeMessage() {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    chatMessages.innerHTML = `
      <div class="welcome-screen">
        <div class="welcome-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
        <h2 class="welcome-title">Welcome to AI Chat</h2>
        <p class="welcome-text">Start a conversation with your AI assistant. I'm here to help with questions, coding, and more.</p>
      </div>
    `;
  }
  
  renderMessages() {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    chatMessages.innerHTML = this.state.messages.map(msg => this.createMessageHTML(msg)).join('');
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  createMessageHTML(msg) {
    const time = msg.time || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    return `
      <div class="message ${msg.role}">
        <div class="message-avatar">
          ${msg.role === 'user' 
            ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>'
            : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path><path d="M12 6v6l4 2"></path></svg>'
          }
        </div>
        <div class="message-content">
          <div class="message-text">${this.escapeHtml(msg.content)}</div>
          <div class="message-time">${time}</div>
        </div>
      </div>
    `;
  }
  
  addMessage(role, content) {
    const messages = document.getElementById('chatMessages');
    if (!messages) return;
    
    // Clear welcome screen if exists
    const welcomeScreen = messages.querySelector('.welcome-screen');
    if (welcomeScreen) {
      messages.innerHTML = '';
    }
    
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const msg = { role, content, time };
    this.state.messages.push(msg);
    
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = this.createMessageHTML(msg);
    messages.appendChild(messageDiv.firstElementChild);
    messages.scrollTop = messages.scrollHeight;
  }
  
  async sendMessage() {
    const input = document.getElementById('messageInput');
    if (!input) return;
    
    const message = input.value.trim();
    if (!message) return;
    
    input.value = '';
    input.style.height = 'auto';
    
    this.addMessage('user', message);
    this.showTyping();
    
    try {
      const response = await this.callAPI(message);
      this.hideTyping();
      this.addMessage('assistant', response);
    } catch (error) {
      this.hideTyping();
      this.addMessage('assistant', 'Sorry, something went wrong. Please try again.');
      console.error('API Error:', error);
    }
  }
  
  async callAPI(message) {
    // Demo mode - simulate response
    return new Promise((resolve) => {
      setTimeout(() => {
        const responses = [
          "I understand. Let me help you with that.",
          "That's an interesting question. Let me think about it.",
          "I'm here to help! Could you provide more details?",
          "Great question! Here's what I know about that.",
          "Let me process that information for you.",
          "I can help you with that. What specific aspect would you like to explore?"
        ];
        resolve(responses[Math.floor(Math.random() * responses.length)]);
      }, 1200);
    });
  }
  
  showTyping() {
    const messages = document.getElementById('chatMessages');
    if (!messages) return;
    
    // Clear welcome screen if exists
    const welcomeScreen = messages.querySelector('.welcome-screen');
    if (welcomeScreen) {
      messages.innerHTML = '';
    }
    
    const typing = document.createElement('div');
    typing.className = 'message assistant';
    typing.id = 'typingIndicator';
    typing.innerHTML = `
      <div class="message-avatar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
          <path d="M12 6v6l4 2"></path>
        </svg>
      </div>
      <div class="message-content">
        <div class="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    `;
    
    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;
  }
  
  hideTyping() {
    const typing = document.getElementById('typingIndicator');
    if (typing) typing.remove();
  }
  
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});
