# Employee Management Dashboard

A modern React.js web application built as part of the Bookxpert React Assignment.  
This application allows users to log in and manage employees with full CRUD operations, search, filters, image upload, and print functionality.

---

## 🚀 Features

- Mock authentication (Login & protected dashboard)
- Employee Dashboard with:
  - Total, Active & Inactive employee counts
- Add, Edit & Delete employees
- Profile image upload with preview
- Active / Inactive toggle
- Search employees by name
- Filter by gender and status
- Combined filtering support
- Print employee list
- Data persistence using Local Storage
- Clean and modern UI

---

## 🛠 Tech Stack

- React.js (Vite)
- JavaScript
- React Router
- Context API
- CSS
- LocalStorage

---

## 🖥️ How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/likhithAndra99/Likhith_React_Project.git
```
```bash
cd Likhith_React_Project
```
### 2. Install dependencies
```bash
npm install
```

### 3. Start the application
```bash
npm run dev
```

### 4. Open in browser

Open:
```bash
http://localhost:5173
```

You will see the Login screen.

---

## 🔐 Login

Enter any email and password (mock authentication):

Example:
Email: test@test.com


Password: 123


After login, you will be redirected to the Dashboard.

---

## 📂 Data Storage

Employee data is stored in **LocalStorage**, so it remains even after refreshing the page.

---

## 🧠 Design Decisions

- Context API is used for global state management
- LocalStorage is used instead of backend for simplicity
- Reusable form for both Add and Edit
- Clean folder structure for scalability
- Modular, reusable components

---

---

## 👤 Author

**Andra Likhith Sai**  
Senior Software Engineer  
GitHub: https://github.com/likhithAndra99
