# 📘 React Basics – Topics 1 to 3

This note explains the first 3 essential topics in React development.  
Perfect for beginners who want to understand the foundation before building projects.

---

## 🔧 1. Installation

There are two popular ways to install React:

### ✅ Using **Vite** (faster and modern)

npm create vite@latest my-app
cd my-app
npm install
npm run dev

Choose React and JavaScript or typescript during the prompt.

---

## 🗂️ 2. Code Structure

A clean and basic folder structure looks like this:
my-app/
├── public/
│   └── index.html
├── src/
│   ├── assets/         # Images, logos, videos, etc.
│   ├── components/     # Reusable UI components (Navbar, Button)
│   ├── pages/          # Main pages (Home, About, Contact)
│   ├── App.jsx         # Main component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global CSS or Tailwind
├── package.json
└── README.md

App.jsx is the parent component of your app.
main.jsx connects React to the HTML in index.html.

## 🧱 3. Components

# What is a Component?
A Component is a reusable part of the UI (like a button, navbar, or card).

# How to create a Component:
// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <h1>This is the Navbar</h1>
    </nav>
  );
};

export default Navbar;

 # How to use it in App.jsx:
 import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <h2>Welcome to React</h2>
    </div>
  );
}

export default App;

 
##  ✅🧠 Tip:
File names usually start with a capital letter for components.
Always export your component and import where you need it.


### ✅ Summary

|  Topic         | What You Learned                 |
| -------------- | -------------------------------- |
| Installation   | Setup using Vite or CRA          |
| Code Structure | Organized folder layout          |
| Components     | Building blocks of your React UI |

