import { useNavigate } from "react-router-dom";

const courses = [
  {
    title: "Complete Web Development",
    progress: 75,
    lessons: "32 / 42",
    icon: "💻",
  },
  {
    title: "Python Programming",
    progress: 55,
    lessons: "20 / 36",
    icon: "🐍",
  },
  {
    title: "React.js Masterclass",
    progress: 30,
    lessons: "14 / 48",
    icon: "⚛️",
  },
];

function Dashboard() {
  const navigate = useNavigate();

  return (
    <main className="dashboard-page">

      <section className="dashboard-header">
        <div>
          <p>STUDENT DASHBOARD</p>
          <h1>Welcome back, Yasir 👋</h1>
          <span>
            Continue learning and keep making progress.
          </span>
        </div>

        <button
          className="primary-btn"
          onClick={() => navigate("/courses")}
        >
          Explore Courses
        </button>
      </section>

      <section className="dashboard-stats">

        <div className="dashboard-stat">
          <div>📚</div>
          <span>Enrolled Courses</span>
          <h2>6</h2>
        </div>

        <div className="dashboard-stat">
          <div>🎯</div>
          <span>Courses Completed</span>
          <h2>2</h2>
        </div>

        <div className="dashboard-stat">
          <div>⏱️</div>
          <span>Learning Hours</span>
          <h2>48</h2>
        </div>

        <div className="dashboard-stat">
          <div>🏆</div>
          <span>Certificates</span>
          <h2>2</h2>
        </div>

      </section>

      <section className="progress-section">

        <div className="dashboard-section-heading">
          <div>
            <p>YOUR LEARNING</p>
            <h2>Continue Learning</h2>
          </div>

          <button onClick={() => navigate("/courses")}>
            View All →
          </button>
        </div>

        <div className="dashboard-course-grid">

          {courses.map((course) => (
            <div
              className="dashboard-course-card"
              key={course.title}
            >

              <div className="dashboard-course-icon">
                {course.icon}
              </div>

              <div className="dashboard-course-content">

                <h3>{course.title}</h3>

                <div className="progress-info">
                  <span>Progress</span>
                  <strong>{course.progress}%</strong>
                </div>

                <div className="progress-bar">
                  <div
                    style={{
                      width: `${course.progress}%`,
                    }}
                  ></div>
                </div>

                <div className="lesson-info">
                  <span>📖 {course.lessons} lessons</span>
                  <span>{course.progress}% complete</span>
                </div>

                <button
                  onClick={() => navigate("/courses")}
                >
                  Continue Learning →
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

      <section className="dashboard-bottom">

        <div className="activity-card">

          <div className="dashboard-section-heading">
            <div>
              <p>RECENT ACTIVITY</p>
              <h2>Latest Activity</h2>
            </div>
          </div>

          <div className="activity-item">
            <div>▶️</div>
            <div>
              <h3>Completed a lesson</h3>
              <span>JavaScript Essentials</span>
            </div>
            <small>2 hours ago</small>
          </div>

          <div className="activity-item">
            <div>🏆</div>
            <div>
              <h3>Earned a certificate</h3>
              <span>HTML & CSS Fundamentals</span>
            </div>
            <small>Yesterday</small>
          </div>

          <div className="activity-item">
            <div>📚</div>
            <div>
              <h3>Started a new course</h3>
              <span>React.js Masterclass</span>
            </div>
            <small>3 days ago</small>
          </div>

        </div>

        <div className="goal-card">

          <div className="goal-icon">
            🎯
          </div>

          <p>WEEKLY GOAL</p>

          <h2>Keep Learning!</h2>

          <span>
            You've completed 4 of your 5 weekly
            learning sessions.
          </span>

          <div className="goal-progress">
            <div style={{ width: "80%" }}></div>
          </div>

          <strong>4 / 5 sessions</strong>

        </div>

      </section>

    </main>
  );
}

export default Dashboard;