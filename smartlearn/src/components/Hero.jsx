function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-small-text">
          🎓 Learn. Grow. Succeed.
        </p>

        <h1>
          Learn New Skills.
          <br />
          Build Your Future.
        </h1>

        <p className="hero-description">
          Explore high-quality courses, improve your skills,
          and track your learning progress with SmartLearn.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Explore Courses
          </button>

          <button className="secondary-btn">
            Learn More
          </button>
        </div>
      </div>

      <div className="hero-card">
        <div className="card-icon">
          📚
        </div>

        <h3>Start Learning Today</h3>

        <p>
          Choose from courses designed to help you
          learn practical skills.
        </p>

        <div className="student-info">
          👨‍🎓 10,000+ Students
        </div>
      </div>
    </section>
  );
}

export default Hero;