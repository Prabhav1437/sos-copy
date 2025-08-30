import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import QRPage from "./pages/QRPage";
import "./index.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/qr" element={<QRPage />} />
      </Routes>
    </Router>
  );
}
