
# 🌐 React Hook: `useContext` – Global State Made Easy

This guide explains the `useContext` hook with a practical example. `useContext` helps you **avoid prop drilling** and share data globally across components, like themes, user data, or settings.

---

## 📁 Setup

```bash
npm install
npm start
```

---

## 🔍 What is `useContext`?

`useContext` lets you access data from a `Context` object in React. Instead of passing props through every component layer, you create a global state and "consume" it wherever needed.

---

## 🧪 Example: Theme Context

```jsx
import React, { useContext, createContext } from 'react';

// 1. Create a Context
const ThemeContext = createContext();

// 2. Create a Provider component
function ThemeProvider({ children }) {
  const theme = 'dark'; // can be dynamic or come from props/state
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Consume Context using useContext
function ThemedComponent() {
  const theme = useContext(ThemeContext); // 🎯 access the context value
  return <h2>🌗 Current Theme: {theme}</h2>;
}

// 4. Wrap your App or component tree with the Provider
function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}

export default App;
```

---

## ✅ Why Use `useContext`?

| Feature              | Benefit                             |
|----------------------|--------------------------------------|
| Global State Access  | No need to pass props manually       |
| Cleaner Components   | Less boilerplate and prop drilling   |
| Great for Themes     | Dark/light modes, language settings  |
| Works with `useReducer` | Build lightweight global state     |

---

## 💡 Tips

- Create multiple contexts for different data (theme, auth, cart, etc.)
- Combine with `useReducer` for scalable state management
- Use separate files for context creation and consumption for cleaner codebase

---

## 🧠 Author

Made by **Moiz** – Exploring React Hooks and building awesome UIs with clean, reusable code!
