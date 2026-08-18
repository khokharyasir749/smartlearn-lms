import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <main className="login-page">
      <div className="login-container">

        <div className="login-card">

          <div className="login-logo">
            <span>📚</span>
            <span>SmartLearn</span>
          </div>

          <h1>Welcome Back</h1>

          <p>
            Login to continue your learning journey.
          </p>

          <form
            className="login-form"
            onSubmit={handleLogin}
          >

            <div>
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label>Password</label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit">
              Login →
            </button>

          </form>

          <div className="login-footer">
            New to SmartLearn?{" "}
            <button
              type="button"
              onClick={() => navigate("/courses")}
            >
              Explore Courses
            </button>
          </div>

        </div>

      </div>
    </main>
  );
}

export default Login;