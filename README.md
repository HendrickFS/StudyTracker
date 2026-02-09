# StudyTracker 🎯

A gamified learning progress tracker with achievements. Track your study goals, earn badges, and maintain learning streaks!

## 📋 Overview

StudyTracker helps you stay motivated while learning by turning your educational goals into achievements. Set goals, track progress, earn badges, and build streaks.

## Features

- **Goal Management**: Create and track learning goals (e.g., "Finish DB normalization exercises")
- **Progress Tracking**: Visual progress bars showing completion percentage
- **Achievement System**: Unlock badges upon completing goals
- **Streak Counter**: Maintain daily/weekly learning streaks
- **User Authentication**: Secure login and personalized dashboard
- **Personal Dashboard**: View all your goals, achievements, and progress in one place

## Tech Stack

### Backend - Strapi CMS
- Headless CMS for content management
- RESTful API
- User authentication and authorization
- Content types:
  - Users (with authentication)
  - Goals
  - Achievements
  - User progress tracking

### Frontend - Next.js
- React-based framework with App Router
- Server-side rendering (SSR)
- TypeScript for type safety
- Tailwind CSS for styling
- Features:
  - User dashboard
  - Progress visualization
  - Achievement gallery
  - Streak tracking

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Database (SQLite for dev, PostgreSQL/MySQL for production)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd StudyTracker
   ```

2. **Setup Backend (Strapi)**
   ```bash
   cd backend
   npm install
   npm run develop
   ```
   Strapi will be available at `http://localhost:1337`

3. **Setup Frontend (Next.js)**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   Next.js app will be available at `http://localhost:3000`


## Core Concepts

### Goals
Learning objectives with:
- Title and description
- Target completion date
- Progress percentage
- Status (active, completed, abandoned)

### Achievements
Unlockable badges for:
- Completing goals
- Maintaining streaks
- Reaching milestones
- Special challenges

### Streaks
Track consecutive days/weeks of:
- Goal progress updates
- Daily learning time
- Achievement unlocks

## Authentication

- JWT-based authentication via Strapi
- User-specific content and progress
- Protected API routes
- Role-based access control

## Roadmap

- [ ] Basic authentication and user management
- [ ] Goal CRUD operations
- [ ] Achievement system
- [ ] Streak tracking
- [ ] Dashboard with visualizations
- [ ] Mobile responsive design
- [ ] Social features (share achievements)
- [ ] Leaderboards
- [ ] Custom achievement creator