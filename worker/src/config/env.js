/**
 * Environment Config - Environment variables access
 */

export const config = {
  // API Keys
  getApiKey: (env) => env.ONE_HANDS_API,
  
  // Environment
  isProduction: (env) => env.ENVIRONMENT === 'production',
  isDevelopment: (env) => env.ENVIRONMENT === 'development',
  
  // Defaults
  defaults: {
    AI_REPO: 'https://github.com/amkyawdev/complete-ai-webapp.git',
    API_TIMEOUT: 30000,
    MAX_MESSAGE_LENGTH: 10000
  }
};

export default config;
