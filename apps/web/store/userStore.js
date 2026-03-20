/**
 * User Store - User data state management
 */
export class UserStore {
  constructor() {
    this.state = {
      user: null,
      isAuthenticated: false,
      preferences: {
        theme: 'dark',
        workerUrl: ''
      }
    };
    
    this.loadFromStorage();
  }
  
  loadFromStorage() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      this.state.preferences.theme = theme;
    }
    
    const workerUrl = localStorage.getItem('workerUrl');
    if (workerUrl) {
      this.state.preferences.workerUrl = workerUrl;
    }
  }
  
  setUser(user) {
    this.state.user = user;
    this.state.isAuthenticated = !!user;
  }
  
  setTheme(theme) {
    this.state.preferences.theme = theme;
    localStorage.setItem('theme', theme);
  }
  
  setWorkerUrl(url) {
    this.state.preferences.workerUrl = url;
    localStorage.setItem('workerUrl', url);
  }
  
  getTheme() {
    return this.state.preferences.theme;
  }
  
  getWorkerUrl() {
    return this.state.preferences.workerUrl;
  }
  
  logout() {
    this.state.user = null;
    this.state.isAuthenticated = false;
  }
}
