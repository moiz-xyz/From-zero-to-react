## 🔁 List Rendering in React

### ✅ What is List Rendering?

List rendering in React refers to displaying a list of elements from an array or data structure using JavaScript’s `.map()` method.

### 🧠 Why Use List Rendering?

- Dynamically generate components from data.
- Reusable code structure.
- Keep UI and data in sync.

---

### 🧪 Basic Example

```jsx
const names = ['Moiz', 'Ali', 'Fatima'];

function NameList() {
  return (
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}
```

### 📌 Important Notes

- Use the `key` prop to uniquely identify list items.
- Avoid using the index as a key if the list can change (e.g. sorting, deleting).

---

### 🛠️ Use Cases

- Rendering blog posts, comments, or messages.
- Displaying a table of users or products.
- Dynamic navigation menus.
- Reusable card or tile components.

---

## 🔄 Conditional Rendering in React

### ✅ What is Conditional Rendering?

Conditional rendering means rendering different components or elements based on certain conditions (like if/else).

---

### 🔹 If/Else using Ternary Operator

```jsx
const isLoggedIn = true;

function Greeting() {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Sign In</h1>}
    </div>
  );
}
```

---

### 🔹 If/Else using Logical AND `&&`

```jsx
const hasNotifications = true;

function Notification() {
  return (
    <div>
      {hasNotifications && <p>You have new notifications!</p>}
    </div>
  );
}
```

---

### 🔹 Using if/else statements (not inline)

```jsx
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <h1>Welcome Back!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  }
}
```

---

### 🛠️ Use Cases

- Show loading spinners before data loads.
- Display login/signup forms based on user state.
- Render error messages or "No Data Found" content.
- Toggle themes, components, or menus.

---

## 🔍 Bonus: List + Conditional Rendering Example

```jsx
const products = [
  { id: 1, name: 'Laptop', inStock: true },
  { id: 2, name: 'Mouse', inStock: false },
];

function ProductList() {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name} - 
          {product.inStock ? ' In Stock' : ' Out of Stock'}
        </li>
      ))}
    </ul>
  );
}
```

---

## 🧠 Summary

| Concept              | Description                                 | Example Code               |
|----------------------|---------------------------------------------|----------------------------|
| List Rendering        | Renders items from an array                 | `array.map()`              |
| Conditional Rendering | Renders content based on condition          | `condition ? A : B`        |
| Logical &&            | Renders only if condition is true           | `isTrue && <Component />`  |

---

## 🧰 Resources

- [React Docs – Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)
- [React Docs – Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)

---

> 📚 Feel free to copy and use this `README.md` as personal notes or in your React project repositories.
```

