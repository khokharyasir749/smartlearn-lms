import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div
        className="logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        📚 SmartLearn
      </div>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>

        <NavLink to="/courses">Courses</NavLink>

        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>

      <button
        className="login-btn"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </nav>
  );
}

export default Navbar;