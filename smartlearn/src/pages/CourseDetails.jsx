import { useParams, useNavigate } from "react-router-dom";

const courses = {
  1: {
    title: "Complete Web Development",
    category: "Web Development",
    level: "Beginner",
    icon: "💻",
    rating: "4.9",
    students: "2,450",
    lessons: 42,
    price: "$49",
    duration: "18 hours",
    description:
      "Learn the fundamentals of modern web development. Build websites using HTML, CSS, JavaScript and responsive design.",
    instructor: "Yasir Ahmed",
  },

  2: {
    title: "Python Programming",
    category: "Programming",
    level: "Beginner",
    icon: "🐍",
    rating: "4.8",
    students: "1,850",
    lessons: 36,
    price: "$39",
    duration: "15 hours",
    description:
      "Learn Python from the basics and build practical programming projects.",
    instructor: "Ali Hassan",
  },

  3: {
    title: "React.js Masterclass",
    category: "Web Development",
    level: "Intermediate",
    icon: "⚛️",
    rating: "4.9",
    students: "1,420",
    lessons: 48,
    price: "$59",
    duration: "22 hours",
    description:
      "Build modern interactive applications using React components, state, props and routing.",
    instructor: "Ahmed Khan",
  },

  4: {
    title: "UI/UX Design Fundamentals",
    category: "Design",
    level: "Beginner",
    icon: "🎨",
    rating: "4.7",
    students: "1,320",
    lessons: 28,
    price: "$35",
    duration: "12 hours",
    description:
      "Learn the fundamentals of user interface and user experience design.",
    instructor: "Sara Ahmed",
  },

  5: {
    title: "JavaScript Essentials",
    category: "Programming",
    level: "Intermediate",
    icon: "🟨",
    rating: "4.8",
    students: "1,760",
    lessons: 40,
    price: "$45",
    duration: "17 hours",
    description:
      "Learn JavaScript fundamentals and build interactive web experiences.",
    instructor: "Hamza Ali",
  },

  6: {
    title: "Graphic Design",
    category: "Design",
    level: "Beginner",
    icon: "🖌️",
    rating: "4.6",
    students: "980",
    lessons: 25,
    price: "$29",
    duration: "10 hours",
    description:
      "Learn design principles, typography, layouts and visual communication.",
    instructor: "Ayesha Khan",
  },

  7: {
    title: "Data Science with Python",
    category: "Data Science",
    level: "Advanced",
    icon: "📊",
    rating: "4.9",
    students: "870",
    lessons: 55,
    price: "$69",
    duration: "25 hours",
    description:
      "Explore data analysis, Python libraries and practical data science concepts.",
    instructor: "Usman Malik",
  },

  8: {
    title: "Git & GitHub",
    category: "Programming",
    level: "Beginner",
    icon: "🔧",
    rating: "4.8",
    students: "1,150",
    lessons: 20,
    price: "$25",
    duration: "7 hours",
    description:
      "Learn Git and GitHub workflows for managing and collaborating on projects.",
    instructor: "Zain Ahmed",
  },
};

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses[id];

  if (!course) {
    return (
      <div className="page-container">
        <h1>Course Not Found 😕</h1>

        <button
          className="primary-btn"
          onClick={() => navigate("/courses")}
        >
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <main className="course-details-page">

      <section className="course-details-hero">

        <div className="details-icon">
          {course.icon}
        </div>

        <div className="details-content">

          <span className="course-category">
            {course.category}
          </span>

          <h1>{course.title}</h1>

          <p>
            {course.description}
          </p>

          <div className="details-rating">
            ⭐ {course.rating}
            <span>
              ({course.students} students)
            </span>
          </div>

          <div className="details-info">
            <span>🎯 {course.level}</span>
            <span>📖 {course.lessons} Lessons</span>
            <span>⏱️ {course.duration}</span>
          </div>

        </div>

      </section>

      <section className="course-details-grid">

        <div className="curriculum">

          <h2>Course Curriculum 📚</h2>

          <div className="lesson">
            <span>01</span>
            <div>
              <h3>Introduction</h3>
              <p>Getting started with the course.</p>
            </div>
            <span>▶️</span>
          </div>

          <div className="lesson">
            <span>02</span>
            <div>
              <h3>Fundamentals</h3>
              <p>Learn the core concepts.</p>
            </div>
            <span>▶️</span>
          </div>

          <div className="lesson">
            <span>03</span>
            <div>
              <h3>Practical Project</h3>
              <p>Build your first project.</p>
            </div>
            <span>▶️</span>
          </div>

          <div className="lesson">
            <span>04</span>
            <div>
              <h3>Final Project</h3>
              <p>Apply everything you learned.</p>
            </div>
            <span>▶️</span>
          </div>

        </div>

        <aside className="enroll-card">

          <div className="enroll-icon">
            {course.icon}
          </div>

          <h2>{course.price}</h2>

          <p>Lifetime access to this course.</p>

          <button
            className="enroll-btn"
            onClick={() => navigate("/login")}
          >
            Start Learning
          </button>

          <div className="enroll-details">
            <span>✓ Full course access</span>
            <span>✓ Certificate</span>
            <span>✓ Practical projects</span>
            <span>✓ Progress tracking</span>
          </div>

          <div className="instructor">
            <strong>Instructor</strong>
            <span>{course.instructor}</span>
          </div>

        </aside>

      </section>

    </main>
  );
}

export default CourseDetails;