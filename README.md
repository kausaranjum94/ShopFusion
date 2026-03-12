# ShopFusion 🛒

A modern **React-based eCommerce web application** that allows users to browse products, filter by category, search products, and manage a wishlist.  
The project focuses on **clean UI, reusable components, custom hooks, and URL-based filtering/sorting**.

---

## 🚀 Live Demo

```
https://shopfusionapp.netlify.app/
```

---

## 📌 Features

- 🛍 Browse products
- 📂 Filter products by category
- 🔎 Search products
- ↕️ Sort products (Price, Name, Rating)
- ❤️ Add items to wishlist
- ⚡ Shimmer loading effect
- 🔗 URL-based sorting and filtering
- 🧠 Custom React hooks for API calls
- 💾 Wishlist stored in localStorage

---

## 🛠 Tech Stack

### Frontend

- React
- React Router
- Tailwind CSS
- JavaScript (ES6)

### API

- Fake Store API

---

## 📂 Project Structure

```
src
 ┣ component
 ┃ ┣ ProductCard.jsx
 ┃ ┗ shimmer
 ┃   ┗ ShimmerGrid.jsx
 ┣ hooks
 ┃ ┣ useFetchProducts.jsx
 ┃ ┗ useFetchCategories.jsx
 ┣ pages
 ┃ ┣ Home.jsx
 ┃ ┣ Cart.jsx
 ┃ ┣ Wishlist.jsx
 ┃ ┗ Search.jsx
 ┣ App.jsx
 ┗ main.jsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/kausaranjum94/ShopFusion.git
```

### 2️⃣ Go to project folder

```
cd shopfusion
```

### 3️⃣ Install dependencies

```
npm install
```

### 4️⃣ Start development server

```
npm run dev
```

---

## 🌐 Environment Variables

Create a `.env` file in the root folder and add:

```
VITE_PRODUCTS_API=https://fakestoreapi.com/products
```

---

## 🧠 Key Learning Concepts

This project demonstrates:

- Custom React Hooks
- URL query parameters for sorting
- Component reusability
- State management using React Hooks
- Performance optimization using `useMemo`
- API loading states and error handling
- LocalStorage for persistent wishlist

---

## 📈 Future Improvements

- Add authentication

---

## 👨‍💻 Author

**Kausar Anjum**

GitHub:

```
https://github.com/kausaranjum94/
```

---

⭐ If you like this project, feel free to **star the repository**.
