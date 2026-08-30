# 📚 Sam's Bookstore

A responsive e-commerce bookstore application built with **HTML, CSS, Bootstrap 5, and Vanilla JavaScript (ES6 Modules).**

Users can browse books, add products to a shopping cart, manage quantities, review their order, and complete the checkout process.

---

## 🚀 Features

- 📚 Dynamic product rendering
- 🛒 Add books to shopping cart
- ➕ Increase product quantity
- ➖ Decrease product quantity
- 🗑️ Remove products from cart
- 🔢 Real-time cart counter
- 💰 Automatic price calculation
- 💾 Save cart data using LocalStorage
- 📝 Multi-step checkout process
- ✅ Order confirmation page
- 📱 Responsive design

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript ES6 Modules
- Bootstrap 5
- LocalStorage API

---

## 🧠 JavaScript Concepts Used

- ES6 Modules (`import` / `export`)
- DOM Manipulation
- Event Delegation
- Template Literals
- Array Methods:
  - map()
  - find()
  - reduce()
  - filter()
- Dataset API
- LocalStorage
- Dynamic Rendering

---

## 🏗️ Project Architecture

### products.js
Stores bookstore product information:

- Title
- Author
- Price
- Image


### app.js

Main application controller:

- Loads products
- Renders product cards
- Handles user interactions
- Connects application modules


### cart.js

Manages shopping cart:

- Add products
- Remove products
- Increase/decrease quantity
- Calculate totals
- Save cart state


### checkout.js

Handles:

- Customer information
- Order review
- Creating orders
- Saving completed orders


### success.js

Displays:

- Order ID
- Total price
- Confirmation message

---

## 📂 Project Structure

```
Sam-Bookstore/
│
├── index.html
├── success.html
├── style.css
│
├── js/
│   ├── products.js
│   ├── app.js
│   ├── cart.js
│   ├── checkout.js
│   └── success.js
│
├── assets/
│   └── images/
│
└── README.md
```

---

## ⚙️ Run Locally

Clone the repository:

```bash
git clone https://github.com/sam59246677/HTML-CSS-Jquery-Bootstrap-BookStore.git
```

Open the project folder:

```bash
cd HTML-CSS-Jquery-Bootstrap-BookStore
```

Run the project using **Live Server** in VS Code.

---

## 📸 Screenshots

(Add screenshots here)

---

## 🌐 Live Demo

(Add deployed project link)

---

## 👨‍💻 Author

Sam Rostami

GitHub:
https://github.com/sam59246677