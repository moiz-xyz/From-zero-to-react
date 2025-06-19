```markdown
# 🚀 React Project with Multiple UI Libraries

This project demonstrates how to install and use different UI libraries in a React app, including:

- ✅ Tailwind CSS
- ✅ Bootstrap
- ✅ Material UI
- ✅ Ant Design

---

## ⚙️ Prerequisites

Make sure you have:

- Node.js installed (v14 or above)
- npm or yarn

---

## 📦 Project Setup

```bash
npx create-react-app my-ui-demo
cd my-ui-demo
```

---

## 1️⃣ Tailwind CSS Setup

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Update `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Update `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 2️⃣ Bootstrap Setup

```bash
npm install bootstrap
```

### Import in `src/index.js` or `App.js`

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

---

## 3️⃣ Material UI (MUI) Setup

```bash
npm install @mui/material @emotion/react @emotion/styled
```

### Example Usage

```js
import Button from '@mui/material/Button';

<Button variant="contained" color="primary">
  MUI Button
</Button>
```

---

## 4️⃣ Ant Design Setup

```bash
npm install antd
```

### Import in `App.js`

```js
import 'antd/dist/reset.css'; // for latest version
import { Button } from 'antd';

<Button type="primary">Ant Design Button</Button>
```

---

## 🏃 Run the Project

```bash
npm start
```

---

## 🧠 Notes

- You can use one or multiple UI libraries as per your needs.
- Be careful when mixing styles (e.g. Tailwind and Bootstrap), as classes might conflict.
```
