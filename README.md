# The BluePrint Series - Event Website

A dynamic single-page event website built with **React/Next.js** frontend and **Express.js** backend API.

## 🎨 Design

Built pixel-perfect from the Figma file with programmatically extracted:
- **Colors**: Primary `#1e00ff`, grays from Figma
- **Fonts**: Plus Jakarta Sans (display), IBM Plex Sans (body), IBM Plex Mono (labels)
- **Font sizes**: 11px, 16px, 20px, 24px, 32px, 60px, 112px, 120px
- **Layout**: 1280px content width, 111px navbar, 900px hero
- **Images**: All assets extracted from .fig file

## 🚀 Quick Start

### 1. Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 2. Start Development Servers

**Terminal 1 - Backend (port 3001):**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend (port 3000):**
```bash
cd frontend
npm run dev
```

### 3. View the Site

- **Home**: http://localhost:3000
- **Rich Tu Event**: http://localhost:3000/event/rich-tu
- **Maya Johnson Event**: http://localhost:3000/event/maya-johnson

## 📁 Project Structure

```
blueprint-app/
├── backend/
│   ├── server.js           # Express.js API server
│   ├── package.json
│   └── data/
│       ├── rich-tu.json    # Mock event data
│       └── maya-johnson.json
├── frontend/
│   ├── app/
│   │   ├── page.js         # Home page (events list)
│   │   ├── layout.js       # Root layout
│   │   ├── globals.css     # Figma design tokens
│   │   ├── not-found.js    # 404 page
│   │   ├── lib/
│   │   │   └── api.js      # API fetch utilities
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Hero.js
│   │   │   ├── Introduction.js
│   │   │   ├── Agenda.js
│   │   │   ├── Speakers.js
│   │   │   ├── EventDetail.js
│   │   │   ├── FAQ.js
│   │   │   └── Footer.js
│   │   └── event/
│   │       └── [slug]/
│   │           └── page.js # Dynamic event page
│   └── public/
│       └── images/         # Extracted Figma assets
└── render.yaml             # Render deployment config
```

## 🔌 API Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/events` | List all events |
| `GET /api/events/:id` | Full event data |
| `GET /api/events/:id/info` | Title, date, location, description |
| `GET /api/events/:id/introduction` | Introduction section |
| `GET /api/events/:id/agenda` | Agenda with days and items |
| `GET /api/events/:id/speakers` | Speakers (limited to 3) |
| `GET /api/events/:id/detail` | Event detail description |
| `GET /api/events/:id/previous-events` | Previous events gallery |
| `GET /api/events/:id/faq` | FAQ items |

### Test API

```bash
# List events
curl http://localhost:3001/api/events

# Get Rich Tu event info
curl http://localhost:3001/api/events/rich-tu/info

# Get speakers
curl http://localhost:3001/api/events/rich-tu/speakers
```

## 🌐 Deploy to Render

1. Push to GitHub
2. Connect repo to [Render](https://render.com)
3. Select "Blueprint" and use `render.yaml`
4. Deploy!

Or deploy manually:
- Backend: Create Web Service, set root to `backend/`
- Frontend: Create Web Service, set root to `frontend/`, add env var `NEXT_PUBLIC_API_URL`

## ✅ Requirements Met

| Requirement | Status |
|-------------|--------|
| React with Next.js | ✅ |
| Express.js backend | ✅ |
| Event title, date, description, location | ✅ `/api/events/:id/info` |
| Event introduction | ✅ `/api/events/:id/introduction` |
| Agenda | ✅ `/api/events/:id/agenda` |
| Speakers (3 max) | ✅ `/api/events/:id/speakers` |
| Event detail description | ✅ `/api/events/:id/detail` |
| Previous events section | ✅ `/api/events/:id/previous-events` |
| FAQ section | ✅ `/api/events/:id/faq` |
| Two mock pages | ✅ `/event/rich-tu` & `/event/maya-johnson` |
| Reusable hero image | ✅ Same image for all events |
| Get Tickets placeholder | ✅ Non-functional button |
| Design accuracy | ✅ Pixel-perfect from Figma |

## 🎯 Mock Events

1. **Rich Tu** (`/event/rich-tu`) - Fireside chat at Soho House, NYC
2. **Maya Johnson** (`/event/maya-johnson`) - Design & Technology at The Standard, LA

Both demonstrate full API functionality with different data.
