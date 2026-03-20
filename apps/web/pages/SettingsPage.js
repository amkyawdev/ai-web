/**
 * SettingsPage - User settings
 */
export class SettingsPage {
  constructor(app) {
    this.app = app;
  }
  
  render() {
    return `
      <div class="chat-container">
        <header class="chat-header">
          <div class="chat-header-title">
            <h2>Settings</h2>
          </div>
        </header>
        
        <div class="chat-messages">
          <div style="padding: 20px; max-width: 600px;">
            <h3 style="margin-bottom: 24px;">Settings</h3>
            
            <div style="margin-bottom: 20px;">
              <label style="display: block; margin-bottom: 8px; font-weight: 500;">Theme</label>
              <select id="themeSelect" style="width: 100%; padding: 10px; background: var(--bg-tertiary); border: 1px solid var(--border-default); border-radius: var(--radius-md); color: var(--text-primary);">
                <option value="dark" ${this.app.state.theme === 'dark' ? 'selected' : ''}>Dark</option>
                <option value="light" ${this.app.state.theme === 'light' ? 'selected' : ''}>Light</option>
              </select>
            </div>
            
            <div style="margin-bottom: 20px;">
              <label style="display: block; margin-bottom: 8px; font-weight: 500;">Worker URL</label>
              <input type="text" id="workerUrl" placeholder="https://your-worker.workers.dev" style="width: 100%;">
            </div>
            
            <button class="btn btn-primary" onclick="alert('Settings saved!')">Save Settings</button>
          </div>
        </div>
      </div>
    `;
  }
  
  bindEvents() {
    const themeSelect = document.getElementById('themeSelect');
    if (themeSelect) {
      themeSelect.addEventListener('change', (e) => {
        this.app.state.theme = e.target.value;
        document.documentElement.setAttribute('data-theme', e.target.value);
        localStorage.setItem('theme', e.target.value);
      });
    }
  }
}
