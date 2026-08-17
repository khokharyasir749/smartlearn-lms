import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    alert("Login successful! Welcome to SmartLearn.");

    navigate("/dashboard");
  }

  return (
    <main className="login-page">
      <div className="login-card">

        <div className="login-logo">
          📚
        </div>

        <h1>Welcome Back 👋</h1>

        <p>
          Login to continue your learning journey.
        </p>

        <form onSubmit={handleLogin}>

          <label>Email Address</label>

          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>

          <div className="password-wrapper">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>

          </div>

          <div className="login-options">

            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="forgot-btn"
              onClick={() => alert("Password reset feature coming soon.")}
            >
              Forgot password?
            </button>

          </div>

          <button
            type="submit"
            className="login-submit"
          >
            Login →
          </button>

        </form>

        <div className="login-divider">
          <span>OR</span>
        </div>

        <button
          className="google-btn"
          onClick={() => alert("Google login coming soon.")}
        >
          🌐 Continue with Google
        </button>

        <p className="signup-text">
          Don't have an account?
          <button
            onClick={() => alert("Registration page coming soon.")}
          >
            Sign up
          </button>
        </p>

        <button
          className="back-home"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>

      </div>
    </main>
  );
}

export default Login;