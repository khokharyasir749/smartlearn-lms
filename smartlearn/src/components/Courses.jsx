const courses = [
  {
    title: "Web Development",
    description:
      "Learn HTML, CSS, JavaScript and modern web development.",
    icon: "💻",
    students: "2,450",
    level: "Beginner",
  },
  {
    title: "Python Programming",
    description:
      "Learn Python fundamentals and build practical projects.",
    icon: "🐍",
    students: "1,850",
    level: "Beginner",
  },
  {
    title: "UI/UX Design",
    description:
      "Learn the fundamentals of modern interface and user experience design.",
    icon: "🎨",
    students: "1,320",
    level: "Intermediate",
  },
  {
    title: "React Development",
    description:
      "Build modern interactive websites using React.",
    icon: "⚛️",
    students: "980",
    level: "Intermediate",
  },
];

function Courses() {
  return (
    <section className="courses">
      <div className="section-heading">
        <p>POPULAR COURSES</p>

        <h2>Start Learning Today</h2>

        <span>
          Explore our most popular courses and build useful skills.
        </span>
      </div>

      <div className="course-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.title}>
            <div className="course-icon">
              {course.icon}
            </div>

            <span className="course-level">
              {course.level}
            </span>

            <h3>{course.title}</h3>

            <p>{course.description}</p>

            <div className="course-bottom">
              <span>
                👨‍🎓 {course.students}
              </span>

              <button>
                View Course →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;