# 🚀 React + Vite + Tailwind CSS Starter Project

A modern frontend starter built with **React**, **Vite**, and **Tailwind CSS**. Perfect for building fast, responsive, and clean web apps.

---

## 🧰 Tech Stack

- ⚛️ React – For building user interfaces
- ⚡ Vite – For blazing fast dev server and builds
- 🎨 Tailwind CSS – For utility-first, customizable styling
- 💾 Node.js – Required to run the dev environment

---

## 📦 Installation & Setup Guide

### 1. 📁 Clone the Repository

```bash
git clone https://github.com/ashrifrihan/admin-design.git
cd your-repo-name
```

### 2. 📥 Install Dependencies

Make sure you have Node.js **v16+** installed.

```bash
npm install
# or
yarn install
```

### 3. 🚦 Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Now open your browser and go to:  
👉 `http://localhost:5173`

---

## 🚀 Build & Preview Production

To create a production-ready build:

```bash
npm run build
# or
yarn build
```

Then preview it locally:

```bash
npm run preview
# or
yarn preview
```

Preview will be hosted at:  
👉 `http://localhost:4173`

---

## 🎨 Tailwind CSS Setup

Tailwind is preconfigured and ready to go!

### Tailwind Import in `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Tailwind Config in `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

## 📁 Project Structure

```txt
├── public/                 # Static assets (favicon, etc.)
├── src/                   
│   ├── components/         # Reusable React components
│   ├── App.jsx             # Root component
│   ├── main.jsx            # Entry point of the app
│   └── index.css           # Tailwind imports & global styles
├── .gitignore
├── index.html              # Main HTML file
├── tailwind.config.js      # Tailwind config
├── postcss.config.js       # PostCSS config
├── vite.config.js          # Vite config
├── package.json            # Project metadata & scripts
└── README.md               # You’re here!
```

---

## ❗ Troubleshooting

If you hit any issues:

1. Delete `node_modules` and `package-lock.json` / `yarn.lock`
2. Reinstall with `npm install` or `yarn`
3. Make sure your **Node.js** version is 16 or newer
4. Run `npm run dev` again

Still stuck? Google error message or hit up Stack Overflow 🧠

---

## 🔧 Common Commands

| Command           | Description                      |
|------------------|----------------------------------|
| `npm run dev`     | Start dev server (localhost:5173) |
| `npm run build`   | Build the app for production     |
| `npm run preview` | Preview the production build     |

---

## ✨ Features

- ✅ Fast dev server with hot module reload
- ✅ Tailwind CSS preconfigured
- ✅ Simple and scalable file structure
- ✅ Zero config out of the box

---

## 🙌 Author

Made with 💻, ☕ and ❤️ by **Ashrif Rihan**  
🧠 Final Year CS Student | MERN Stack Enthusiast | Debugging Mage  
📫 Reach me on [LinkedIn](https://www.linkedin.com/in/ashrif-rihan/) | [Instagram](https://www.instagram.com/ashrif_rihan)

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🧪 Ready to Build? Let’s Code!

Go to `src/App.jsx` and start building your magic! 🧙‍♂️✨
