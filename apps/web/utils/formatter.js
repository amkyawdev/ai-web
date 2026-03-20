/**
 * Formatter - Format text, time, message
 */
export class Formatter {
  static formatTime(date) {
    return new Date(date).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  }
  
  static formatDate(date) {
    return new Date(date).toLocaleDateString([], {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
  
  static formatDateTime(date) {
    return `${this.formatDate(date)} ${this.formatTime(date)}`;
  }
  
  static formatMessage(text, maxLength = 1000) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }
  
  static escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
  
  static truncate(text, length = 50) {
    if (text.length <= length) return text;
    return text.substring(0, length) + '...';
  }
}
