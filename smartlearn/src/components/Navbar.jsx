import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="navbar">
      <div
        className="navbar-logo"
        onClick={() => navigate("/")}
      >
        <span className="logo-icon">📚</span>
        <span>SmartLearn</span>
      </div>

      <nav className="navbar-links">
        <button
          className={isActive("/") ? "active" : ""}
          onClick={() => navigate("/")}
        >
          Home
        </button>

        <button
          className={isActive("/courses") ? "active" : ""}
          onClick={() => navigate("/courses")}
        >
          Courses
        </button>

        <button
          className={isActive("/dashboard") ? "active" : ""}
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </button>
      </nav>

      <button
        className="navbar-login"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </header>
  );
}

export default Navbar;