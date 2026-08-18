import { useNavigate, useParams } from "react-router-dom";

const courses = {
  1: {
    title: "Complete Web Development",
    category: "Web Development",
    icon: "💻",
    description:
      "Learn HTML, CSS, JavaScript, React, and modern web development through practical projects.",
    rating: "4.9",
    students: "2,450",
    lessons: 42,
    level: "Beginner",
    price: "$49",
  },

  2: {
    title: "Python Programming",
    category: "Programming",
    icon: "🐍",
    description:
      "Learn Python programming fundamentals and build practical projects.",
    rating: "4.8",
    students: "1,850",
    lessons: 36,
    level: "Beginner",
    price: "$39",
  },

  3: {
    title: "React.js Masterclass",
    category: "Web Development",
    icon: "⚛️",
    description:
      "Build modern React applications and learn component-based development.",
    rating: "4.9",
    students: "1,420",
    lessons: 48,
    level: "Intermediate",
    price: "$59",
  },

  4: {
    title: "UI/UX Design Fundamentals",
    category: "Design",
    icon: "🎨",
    description:
      "Learn user interface and user experience design fundamentals.",
    rating: "4.7",
    students: "1,320",
    lessons: 28,
    level: "Beginner",
    price: "$35",
  },

  5: {
    title: "JavaScript Essentials",
    category: "Programming",
    icon: "🟨",
    description:
      "Master JavaScript fundamentals and build interactive web applications.",
    rating: "4.8",
    students: "1,760",
    lessons: 40,
    level: "Intermediate",
    price: "$45",
  },

  6: {
    title: "Graphic Design",
    category: "Design",
    icon: "🖌️",
    description:
      "Learn graphic design principles and create professional visual projects.",
    rating: "4.6",
    students: "980",
    lessons: 25,
    level: "Beginner",
    price: "$29",
  },

  7: {
    title: "Data Science with Python",
    category: "Data Science",
    icon: "📊",
    description:
      "Learn data analysis, visualization, and Python-based data science.",
    rating: "4.9",
    students: "870",
    lessons: 55,
    level: "Advanced",
    price: "$69",
  },

  8: {
    title: "Git & GitHub",
    category: "Programming",
    icon: "🔧",
    description:
      "Learn Git and GitHub for version control and professional development.",
    rating: "4.8",
    students: "1,150",
    lessons: 20,
    level: "Beginner",
    price: "$25",
  },
};

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses[id];

  if (!course) {
    return (
      <main className="course-details-page">
        <div className="course-details-container">
          <h1>Course Not Found</h1>

          <button
            className="back-courses-btn"
            onClick={() => navigate("/courses")}
          >
            ← Back to Courses
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="course-details-page">
      <div className="course-details-container">

        <button
          className="back-courses-btn"
          onClick={() => navigate("/courses")}
        >
          ← Back to Courses
        </button>

        <section className="course-details-hero">

          <div className="course-details-content">

            <div className="course-details-icon">
              {course.icon}
            </div>

            <span className="course-details-category">
              {course.category}
            </span>

            <h1>{course.title}</h1>

            <p className="course-details-description">
              {course.description}
            </p>

            <div className="course-details-meta">
              <span>⭐ {course.rating}</span>
              <span>👨‍🎓 {course.students} students</span>
              <span>📖 {course.lessons} lessons</span>
              <span>🎯 {course.level}</span>
            </div>

            <div className="course-price">
              Course Price
              <strong>{course.price}</strong>
            </div>

            <button
              className="enroll-btn"
              onClick={() => navigate("/login")}
            >
              Enroll Now →
            </button>

          </div>

          <div className="course-details-card">

            <h2>Course Includes</h2>

            <ul>
              <li>✅ Practical lessons</li>
              <li>✅ Beginner friendly content</li>
              <li>✅ Real-world projects</li>
              <li>✅ Progress tracking</li>
              <li>✅ Course certificate</li>
              <li>✅ Lifetime access</li>
            </ul>

          </div>

        </section>

      </div>
    </main>
  );
}

export default CourseDetails;