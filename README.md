# 📱 PopX — EduCase Frontend Assignment

A pixel-perfect, highly responsive mobile mockup application built with **React 19**, **Vite**, **Tailwind CSS v4**, and **React Router v7**. This project replicates the **PopX** UI/UX onboarding flow, complete with state persistence, validation, and custom animations.

---

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) using the new `@tailwindcss/vite` configuration
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **State**: `useState` + `localStorage` for cross-page user session persistence

---

## 📂 Project Structure

```text
frontend/
├── public/
│   ├── screenshots/       # Location for README visual assets
│   ├── favicon.svg        # App favicon
│   └── icons.svg          # SVGs used throughout the app
├── src/
│   ├── assets/            # Static assets (avatar, camera icons)
│   ├── components/        # Reusable component library
│   │   ├── button.jsx     # Custom styled button component
│   │   └── inputs.jsx     # Floating-label text inputs
│   ├── pages/             # Page components
│   │   ├── LandingPage.jsx
│   │   ├── Login.jsx
│   │   ├── SignUp.jsx
│   │   └── AccountDetails.jsx
│   ├── routes/            # Routing configuration
│   │   └── AppRouter.jsx  # React Router DOM mapping
│   ├── App.jsx            # Main App Layout (mimicking mobile frame)
│   ├── index.css          # Design system, CSS variables & animations
│   └── main.jsx           # App entry point
├── package.json           # Scripts & Dependencies
├── eslint.config.js       # ESLint rules
└── vite.config.js         # Vite configuration with Tailwind integration
```

---

## 🛠️ Reusable UI Components

The project includes custom built UI components designed to mimic the Figma mockups with high fidelity:

### 1. `CustomButton`
An interactive button supporting three design variants:
- `primary`: Solid purple (`#6C25FF`), white text, and transition hover states.
- `secondary`: Light purple translucent background with darker text.
- `disabled`: Grayed out (`#CBCBCB`) button that blocks click events.

### 2. `CustomInput`
A floating label input that aligns labels perfectly with the input border.
- Floating label shifts and resizes dynamically.
- Highlights with signature brand color (`#6C25FF`) upon focus.
- Displays inline red error states and validation flags (`*`).

---

## ⚙️ Setup and Installation

Follow these steps to run the project locally on your machine:

### 1. Clone the repository
```bash
git clone https://github.com/GitLakshman/EduCase.git
cd EduCase/frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

The app will now be running on [http://localhost:5173](http://localhost:5173). Open it in your browser to view the application!

### 4. Build for production
```bash
npm run build
```

---

## 🎨 Design System Details

- **Typography**: [Inter Font Family](https://fonts.google.com/specimen/Inter)
- **Palette**:
  - Primary Purple: `#6C25FF` (hover: `#5b1ee0`)
  - Secondary/Translucent Purple: `#6C25FF4B`
  - Background Neutral: `#F7F8FA`
  - Text Primary: `#1D2229`
  - Border Lavender: `#CBC3E3`
  - Disabled State: `#CBCBCB`
