# 🚀 React  JSX, Props, and State

Welcome! This guide is for beginners who are learning the core concepts of React — **JSX**, **Props**, and **State**. Each concept is explained with examples and simple comments to help you understand how they work in real React projects.

---

## 🔤 1. JSX (JavaScript XML)

JSX allows us to write HTML **inside** JavaScript. React uses JSX to describe what the UI should look like.

### 📌 Example:

```jsx
const JsxExample = () => {
  return (
    <div>
      <h1>Hello JSX!</h1>
      <p>This is a JSX component mixing HTML and JavaScript.</p>
    </div>
  );
};

export default JsxExample;
```

> 💡 **Note:** JSX must return a single parent element (like `<div>`).

---

## 📦 2. Props (Properties)

Props allow you to **pass data** from one component to another. They are **read-only** and **cannot be changed** by the child component.

### 📌 Example:

```jsx
const Greeting = (props) => {
  return (
    <div>
      <h2>Hello {props.name}!</h2>
    </div>
  );
};

// Usage in another component:
<Greeting name="Moiz" />
```

> 🧠 Think of props like function parameters for components. They help make components **reusable** and **dynamic**.

---

## 🔁 3. State

**State** is used to store **data that can change** in a component. When state changes, the component **re-renders**.

### 📌 Example:

```jsx
import React, { useState } from 'react';

const StateExample = () => {
  const [fruit, setFruit] = useState("Apple");

  const handleFruit = () => {
    setFruit("Mango");
  };

  return (
    <div>
      <h1>Fruit is {fruit}</h1>
      <button onClick={handleFruit}>Update fruit</button>
    </div>
  );
};

export default StateExample;
```

> 🔧 `useState` is a React Hook that returns an array: the current value and a function to update it.

---

## ✅ Summary

| Concept | What it Does             | Example Use Case          |
|--------|--------------------------|---------------------------|
| JSX    | Mix HTML & JS in one file| Build UI in React         |
| Props  | Pass data to components  | Display user info         |
| State  | Manage internal data     | Toggle dark/light mode    |

---

## 🙌 Keep Learning!

Start building small components and play with these concepts. Once you're comfortable with JSX, Props, and State — you’re ready to move toward **event handling**, **conditional rendering**, and **lists in React**.

Happy Coding! 💻✨
```

---

Would you like me to generate this as an actual downloadable `.md` file for you? Or add more sections like **Conditional Rendering** or **Events** next?
