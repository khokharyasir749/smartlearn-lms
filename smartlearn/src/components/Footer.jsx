function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>📚 SmartLearn</h2>
          <p>
            Learn practical skills through structured online courses.
          </p>
        </div>

        <div className="footer-column">
          <h3>Platform</h3>
          <a href="#">Courses</a>
          <a href="#">Dashboard</a>
          <a href="#">Pricing</a>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Careers</a>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <a href="#">Help Center</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 SmartLearn. All rights reserved.</p>
        <p>Built with React ⚛️</p>
      </div>
    </footer>
  );
}

export default Footer;