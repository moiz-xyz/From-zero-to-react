# 🚀 React Hooks Mini Guide: useState, useEffect & useRef

This mini project demonstrates how to use three of the most essential React hooks:

- ✅ `useState` — for managing component state
- 🔁 `useEffect` — for side effects like fetching data or listening to events
- 🎯 `useRef` — for directly interacting with DOM elements or persisting values

---

## 📁 Project Setup

```bash
npm install
npm start
```

---

## 🌟 Hooks Explained

---

### 1️⃣ `useState` – Manage State in Functional Components

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // 🔁 initial value = 0

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>➕ Increase</button>
      <button onClick={() => setCount(0)}>🔄 Reset</button>
    </div>
  );
}
```

📌 `useState` lets you add and update local state in function components.

---

### 2️⃣ `useEffect` – Handle Side Effects

```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // ⛔ Cleanup on unmount
  }, []);

  return <h2>⏱️ Timer: {seconds}s</h2>;
}
```

📌 `useEffect` runs after the component renders. Great for:
- API calls
- Timers
- Event listeners
- Cleanup logic

---

### 3️⃣ `useRef` – Reference DOM or Persist Values

```jsx
import React, { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // 🔍 access DOM element
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Click the button to focus me!" />
      <button onClick={handleFocus}>🎯 Focus Input</button>
    </div>
  );
}
```

📌 `useRef` is useful for:
- Accessing DOM elements (like input, video, canvas)
- Storing mutable values without re-rendering

---

## 🎨 UI Preview

> Use the buttons to interact with counters, timers, and focus fields — see how hooks make everything dynamic!

---

## 📚 Summary

| Hook       | Use Case                          |
|------------|------------------------------------|
| `useState` | Add state to components            |
| `useEffect`| Handle side effects and lifecycles |
| `useRef`   | Reference DOM and store values     |

---

## 🧠 Author

Made by **Moiz** – a frontend developer learning React one hook at a time 💻🔥

Feel free to connect or suggest improvements!

