# Influenz Marketing Website

A modern marketing website built with React, TypeScript, and Vite. Features a responsive design, interactive components, and a contact form with email integration.

## Features

- 🎨 Modern UI with Tailwind CSS and DaisyUI
- 📱 Fully responsive design
- ✉️ Contact form with email integration
- 🔒 Form validation and error handling
- ⚡ Fast performance with Vite
- 🔍 SEO optimized

## Tech Stack

- Frontend:
  - React
  - TypeScript
  - Vite
  - Tailwind CSS
  - DaisyUI

- Backend:
  - Node.js
  - Express
  - Nodemailer

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd Marketing
```

1. Install frontend dependencies

```bash
npm install
```

1. Install backend dependencies

```bash
cd server
npm install
```

1. Set up environment variables

Create `.env` files in both root and server directories:

Root `.env`:

```env
VITE_API_URL=http://localhost:3001
```

Server `.env`:

```env
PORT=3001
SMTP_HOST=your-smtp-host
SMTP_PORT=465
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
FROM_NAME=Influenz
REPLY_TO=your-email@domain.com
```

### Development

1. Start the backend server

```bash
cd server
npm run dev
```

1. Start the frontend development server

```bash
# In another terminal
npm run dev
```

### Production Build

1. Build the frontend

```bash
npm run build
```

1. Deploy the `dist` folder to your web hosting
1. Deploy the `server` folder to your backend hosting

## Contact Form

The contact form features:

- Real-time validation
- Loading states
- Success/error messages
- Email notifications
- SMTP integration

## Deployment

### Frontend (influenz.co.in)

- Upload `dist` folder contents to web hosting
- Configure domain DNS
- Set up SSL certificate

### Backend (api.influenz.co.in)

- Deploy Node.js server
- Configure environment variables
- Set up SSL certificate
- Configure reverse proxy

## License

MIT License - See LICENSE file for details
