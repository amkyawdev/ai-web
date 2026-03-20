/**
 * API Service - Call Cloudflare Worker API
 */
export class ApiService {
  constructor(baseUrl = '') {
    this.baseUrl = baseUrl || localStorage.getItem('workerUrl') || 'https://oh.amkai.workers.dev';
  }
  
  setBaseUrl(url) {
    this.baseUrl = url;
    localStorage.setItem('workerUrl', url);
  }
  
  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const defaultHeaders = {
      'Content-Type': 'application/json'
    };
    
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...defaultHeaders,
          ...options.headers
        }
      });
      
      if (!response.ok) {
        const error = await response.json().catch(() => ({ error: 'Request failed' }));
        throw new Error(error.error || 'Request failed');
      }
      
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
  
  async sendMessage(message, conversationId = null) {
    return this.request('/chat', {
      method: 'POST',
      body: JSON.stringify({ message, conversationId })
    });
  }
  
  async getHistory() {
    return this.request('/history', { method: 'GET' });
  }
  
  async healthCheck() {
    return this.request('/health', { method: 'GET' });
  }
}

export const apiService = new ApiService();
