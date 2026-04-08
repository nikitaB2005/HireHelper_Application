# HireHelper - Professional Task Ecosystem 🚀

![HireHelper Dashboard]([file:///C:/Users/NIKITA%20BALWADA/.gemini/antigravity/brain/10048f5d-b1d9-44c0-af4a-cb7074be5bdb/hirehelper_dashboard_mockup_1775241457585.png)]"C:\Users\NIKITA BALWADA\Downloads\hero.png"

## 🌐 Live Deployment
- **Live Website (Frontend)**: [https://hire-helper-frontend.vercel.app](https://hire-helper-frontend.vercel.app)
- **API Base URL (Backend)**: [https://hirehelper-backend-desq.onrender.com/api/](https://hirehelper-backend-desq.onrender.com/api/)

## 📂 Source Code
- **Frontend Repository**: [HireHelper_Frontend](https://github.com/nikitaB2005/HireHelper_Frontend)
- **Backend Repository**: [HireHelper_Backend](https://github.com/nikitaB2005/HireHelper_Backend)

## Overview
**HireHelper** is a state-of-the-art task management and hiring platform designed to bridge the gap between service seekers (Hirers) and task fulfillers (Helpers). Built with a modern **Django + Angular** stack, it features a premium "Dark Glassmorphism" UI, real-time notifications, and a robust rating/review system.

This project was developed as part of a **B.Tech 3rd Year Engineering Project**, demonstrating clean code architecture, professional API design, and a seamless user experience.

---

## ✨ Key Features

### 🏢 For Employers (Hirers)
- **Task Pulse**: Post and manage tasks with a real-time card preview.
- **Application Hub**: Review, accept, or reject incoming applications with custom replies.
- **Smart Analytics**: Dashboard KPIs and statistics for active projects and helper engagement.
- **Feedback Loop**: Rate and review helpers upon task completion.

### 🛠️ For Helpers
- **Discovery Feed**: Browse open tasks in a visually stunning grid with global filters.
- **Seamless Application**: Apply for tasks with personalized messages.
- **Request Tracking**: Monitor application statuses (Pending, Accepted, Rejected) in real-time.
- **Reputation Building**: Build a professional profile through verified ratings.

### 🔒 Core Systems
- **Secure Auth**: JWT-based authentication with OTP email verification.
- **Live Notifications**: Real-time updates for accepted requests, replies, and reviews.
- **Glassmorphism UI**: A premium, responsive design across all devices.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | Angular 17, TailwindCSS (for glassmorphism), RxJS |
| **Backend** | Django 5.0, Django REST Framework, SimpleJWT |
| **Database** | PostgreSQL (Production) / SQLite (Development) |
| **Styling** | Vanilla CSS + Tailwind Utility Classes |
| **Security** | OTP Email Verification, JWT Tokens |

---

## 🚀 Getting Started

### Prerequisites
- Python 3.10+
- Node.js 18+ & Angular CLI
- PostgreSQL (Optional, defaults to SQLite if not configured)

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/your-username/HireHelper.git
cd HireHelper
```

#### 2. Backend Setup
```bash
cd backend
python -m venv venv
# Windows: venv\Scripts\activate | Linux/macOS: source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
> [!TIP]
> Copy `.env.example` to `.env` and configure your email credentials for the OTP system.

#### 3. Frontend Setup
```bash
cd frontend
npm install
ng serve
```
The application will be available at `http://localhost:4200`.

---

## 📂 Project Structure

```text
HireHelper/
├── backend/            # Django REST API
│   ├── accounts/       # User & Auth management
│   ├── tasks/          # Task & Review core
│   ├── request/        # Application lifecycle
│   └── notifications/  # Real-time signaling
├── frontend/           # Angular Application
│   ├── src/app/pages/  # View Components
│   ├── src/app/services/# API Communications
│   └── src/app/components/# Shared UI modules
└── README.md           # Documentation
```

---

## 📜 Technical Standards
- **Component Pattern**: Modern Angular `inject()` based dependency management.
- **RESTful API**: Standardized JSON responses with comprehensive status codes.
- **Glassmorphism**: Advanced CSS techniques for transparency, blurring, and depth.

---

## 👨‍💻 Author
**Project Lead:** Nikita
**Context:** B.Tech Computer Science & Engineering (3rd Year)

> [!NOTE]
> This project is maintained for educational purposes and technical demonstrations.
