import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToCourses = () => {
    navigate("/courses");
  };

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <main className="home-page">

      <section className="home-hero">

        <div className="hero-content">

          <span className="hero-badge">
            🚀 Learn. Build. Grow.
          </span>

          <h1>
            Build Your Future
            <br />
            With SmartLearn 📚
          </h1>

          <p>
            Learn programming, web development, design,
            and practical skills through structured courses.
          </p>

          <div className="hero-buttons">

            <button
              type="button"
              className="primary-btn"
              onClick={goToCourses}
            >
              Explore Courses →
            </button>

            <button
              type="button"
              className="secondary-btn"
              onClick={goToDashboard}
            >
              Go to Dashboard
            </button>

          </div>

          <div className="hero-stats">

            <div>
              <strong>10K+</strong>
              <span>Students</span>
            </div>

            <div>
              <strong>50+</strong>
              <span>Courses</span>
            </div>

            <div>
              <strong>95%</strong>
              <span>Success Rate</span>
            </div>

          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-card-main">

            <div className="hero-card-icon">
              💻
            </div>

            <h3>Start Learning</h3>

            <p>
              Build real skills through practical courses.
            </p>

            <div className="hero-progress">
              <div></div>
            </div>

            <span>
              75% Course Progress
            </span>

          </div>

          <div className="floating-card card-one">
            ⭐ 4.9 Rating
          </div>

          <div className="floating-card card-two">
            🏆 Certificate
          </div>

        </div>

      </section>


      <section className="features-section">

        <div className="section-heading">

          <p>WHY SMARTLEARN?</p>

          <h2>
            Everything You Need to Learn
          </h2>

          <span>
            A simple learning platform designed to
            help you build useful skills.
          </span>

        </div>

        <div className="features-grid">

          <div className="feature-card">
            <div>📚</div>
            <h3>Quality Courses</h3>
            <p>
              Learn from structured courses created
              around practical skills.
            </p>
          </div>

          <div className="feature-card">
            <div>🎯</div>
            <h3>Track Progress</h3>
            <p>
              Keep track of lessons and learning
              progress from your dashboard.
            </p>
          </div>

          <div className="feature-card">
            <div>🏆</div>
            <h3>Earn Certificates</h3>
            <p>
              Complete courses and showcase your
              achievements.
            </p>
          </div>

          <div className="feature-card">
            <div>💻</div>
            <h3>Practical Learning</h3>
            <p>
              Focus on projects and useful skills
              for real work.
            </p>
          </div>

        </div>

      </section>


      <section className="home-cta">

        <div>

          <p>START YOUR JOURNEY</p>

          <h2>
            Ready to Start Learning?
          </h2>

          <span>
            Explore our courses and start building
            your skills today.
          </span>

        </div>

        <button
          type="button"
          className="primary-btn"
          onClick={goToCourses}
        >
          Browse Courses →
        </button>

      </section>

    </main>
  );
}

export default Home;