# AmkyawDev AI WebApp 🇲🇲🇬🇧

A modern AI web application built with Bulma CSS and Alpine.js, featuring Myanmar (🇲🇲) and English (🇬🇧) language support.

## 📁 Project Structure

```
ai-webapp/
│
├── index.html                    # One-click entry / Landing page
├── config.js                     # Configuration file
│
├── pages/
│   ├── main.html                # Main body (Home UI)
│   ├── chat.html                # Chat Page
│   ├── endpoint.html            # API Endpoint Tester
│   ├── dashboard.html           # Dashboard
│   └── collections.html         # Collections Page
│
├── data/
│   ├── mm/                      # Myanmar language AI Data
│   │   ├── chat.json            # Chat responses
│   │   ├── web-link.json        # Web links
│   │   ├── text-web-link.json   # Text resources
│   │   ├── img-web-link.json    # Image resources
│   │   └── coder-web-link.json  # Code snippets
│   │
│   └── eng/                     # English language AI Data
│       ├── chat.json            # Chat responses
│       ├── knowledge-web-link.json # Knowledge links
│       ├── text-web-link.json   # Text resources
│       ├── img-web-link.json    # Image resources
│       └── coder-web-link.json  # Code snippets
│
├── js/
│   ├── main.js                  # Main app logic + sidebar/menu
│   ├── chat.js                  # Chat Bot system
│   ├── api-endpoint.js          # API handler
│   ├── collections.js           # Collections logic
│   ├── network.js               # Network manager (caching)
│   └── performance.js           # Performance optimizer
│
├── css/
│   ├── main.css                 # Main styles + dark theme
│   ├── chat.css                 # Chat page styles
│   ├── endpoint.css             # API endpoint styles
│   ├── docs.css                 # Dashboard styles
│   ├── collections.css          # Collections styles
│   └── animations.css           # CSS animations
│
├── engine/
│   ├── ai-engine.js             # Core AI logic
│   ├── msg-output.js            # Output message formatter
│   ├── ai-utils.js              # AI utilities
│   └── exa.js                   # Exam/Quiz engine
│
├── brain/
│   ├── brain.html               # AI training page
│   ├── brain.js                 # Training system
│   └── memory.js                # Memory system
│
└── README.md
```

## ✨ Features

- **Modern UI Design** - Clean, responsive interface with gradient colors
- **Dark/Light Theme** - Toggle between dark and light modes
- **Mobile-First** - Hamburger menu for mobile, sidebar for desktop
- **Dialog System** - Smooth modal dialogs for options and settings
- **Touch Optimized** - Smooth touch interactions for mobile devices
- **Bilingual** - Full Myanmar and English language support
- **AI Training System** - Train and customize AI responses
- **Multiple Pages** - Home, Chat, API Tester, Dashboard, Collections, AI Brain
- **Network Manager** - Advanced API handling with caching
- **Performance Optimized** - Lazy loading and performance monitoring
- **CSS Animations** - Smooth transitions and animations

## 🛠 Tech Stack

- **Bulma CSS** - Modern CSS framework (v0.9.4)
- **Alpine.js** - Lightweight JavaScript framework (v3.x)
- **Font Awesome** - Icon library (v6.4)
- **Vanilla JavaScript** - No heavy frameworks

## 📄 Pages

| Page | File | Description |
|------|------|-------------|
| Landing | `index.html` | Welcome hero with feature cards |
| Home | `pages/main.html` | Main home with search |
| Chat | `pages/chat.html` | AI chat interface |
| API Tester | `pages/endpoint.html` | API endpoint tester |
| Dashboard | `pages/dashboard.html` | Analytics dashboard |
| Collections | `pages/collections.html` | Data collections browser |
| AI Brain | `brain/brain.html` | AI training and learning |

## 🔗 Navigation Links

All pages are connected via sidebar:
- Home → `pages/main.html`
- Chat → `pages/chat.html`
- API Tester → `pages/endpoint.html`
- Dashboard → `pages/dashboard.html`
- Collections → `pages/collections.html`
- AI Brain → `brain/brain.html`

## 🚀 Getting Started

1. Open `index.html` in your browser
2. Click on any feature card to navigate
3. Use sidebar for desktop or hamburger menu for mobile
4. Toggle theme with moon/sun button
5. Switch language with Myanmar/English buttons

## 📱 Responsive Design

- **Desktop (>1024px)**: Fixed sidebar on left
- **Mobile (<1024px)**: Hamburger menu with slide-in navigation

## 💾 Data Storage

- Settings saved to localStorage
- Theme preference persists
- Language preference persists
- AI training memories stored locally

## 📝 License

MIT License

---

Built with ❤️ by AmkyawDev
