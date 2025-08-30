
# 🚨 SOS Emergency App

A web-based emergency management system built with **React + Vite**.
The app allows users to **register their personal details, medical history, and emergency contacts**, generate a **unique QR code**, and share it in case of an emergency.

---

## ✨ Features

* 📌 **Landing Page** – Explains the concept and purpose of the SOS system.
* 📝 **Signup Page** – Collects user details including:

  * Name, phone number, email
  * Emergency contacts
  * Medical history & allergies
  * Address and ID proof
* 👤 **Account Page** – Users can view and edit their details anytime.
* 🔗 **Dynamic QR Code** – Each user gets a unique QR code that stores their emergency information.
* 📱 **Responsive UI** – Works across desktop, tablet, and mobile devices.
* ☁️ **Cloud Storage Ready** – User data can be stored in cloud (e.g., Firebase / Supabase).

---

## 🛠️ Tech Stack

* **Frontend:** React + Vite
* **Styling:** TailwindCSS
* **Routing:** React Router
* **State Management:** useState / Context API (as required)
* **QR Code:** `qrcode.react`

---

## 📂 Project Structure

```
sos/
├── src/
│   ├── components/    # Reusable UI components (Navbar, Footer, etc.)
│   ├── pages/         # App pages (Landing, Signup, Account, QRCode)
│   ├── assets/        # Images and static files
│   ├── App.jsx        # Root component
│   ├── main.jsx       # React DOM entry
│   └── index.css      # Tailwind styles
├── public/            # Public assets
├── package.json       # Dependencies & scripts
└── README.md          # Project documentation
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Prabhav1437/sos.git
cd sos
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Development Server

```bash
npm run dev
```

App will be live at 👉 [http://localhost:5173](http://localhost:5173)

### 4️⃣ Build for Production

```bash
npm run build
```

---

## 📌 Roadmap

* ✅ Setup project with Vite + React
* ✅ Landing page & Navbar
* ✅ Signup form with emergency details
* ✅ QR code generation
* 🔲 Cloud database (Firebase / Supabase)
* 🔲 User authentication (optional)
* 🔲 Dark mode support

---

## 🤝 Contributing

Contributions are welcome! 🎉

1. Fork the repo
2. Create a new branch (`feature/my-feature`)
3. Commit your changes
4. Push the branch
5. Open a Pull Request
