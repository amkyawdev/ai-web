/**
 * Auth Service - Login / token handling
 */
export class AuthService {
  constructor() {
    this.tokenKey = 'auth_token';
  }
  
  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
  
  setToken(token) {
    localStorage.setItem(this.tokenKey, token);
  }
  
  removeToken() {
    localStorage.removeItem(this.tokenKey);
  }
  
  isAuthenticated() {
    return !!this.getToken();
  }
  
  async login(credentials) {
    // Placeholder for authentication
    // In real app, this would call an auth endpoint
    return { success: true, user: { id: 1, name: 'User' } };
  }
  
  logout() {
    this.removeToken();
  }
}

export const authService = new AuthService();
