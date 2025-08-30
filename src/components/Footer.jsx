import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>SOS Emergency</h3>
          <p>Saving lives through instant emergency access.</p>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/signup">Sign Up</a>
          <a href="/dashboard">Dashboard</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SOS Emergency. All rights reserved.</p>
      </div>
    </footer>
  );
}
