import { useState } from "react";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Complete Web Development",
    category: "Web Development",
    level: "Beginner",
    icon: "💻",
    rating: "4.9",
    students: "2,450",
    lessons: 42,
    price: "$49",
  },
  {
    id: 2,
    title: "Python Programming",
    category: "Programming",
    level: "Beginner",
    icon: "🐍",
    rating: "4.8",
    students: "1,850",
    lessons: 36,
    price: "$39",
  },
  {
    id: 3,
    title: "React.js Masterclass",
    category: "Web Development",
    level: "Intermediate",
    icon: "⚛️",
    rating: "4.9",
    students: "1,420",
    lessons: 48,
    price: "$59",
  },
  {
    id: 4,
    title: "UI/UX Design Fundamentals",
    category: "Design",
    level: "Beginner",
    icon: "🎨",
    rating: "4.7",
    students: "1,320",
    lessons: 28,
    price: "$35",
  },
  {
    id: 5,
    title: "JavaScript Essentials",
    category: "Programming",
    level: "Intermediate",
    icon: "🟨",
    rating: "4.8",
    students: "1,760",
    lessons: 40,
    price: "$45",
  },
  {
    id: 6,
    title: "Graphic Design",
    category: "Design",
    level: "Beginner",
    icon: "🖌️",
    rating: "4.6",
    students: "980",
    lessons: 25,
    price: "$29",
  },
  {
    id: 7,
    title: "Data Science with Python",
    category: "Data Science",
    level: "Advanced",
    icon: "📊",
    rating: "4.9",
    students: "870",
    lessons: 55,
    price: "$69",
  },
  {
    id: 8,
    title: "Git & GitHub",
    category: "Programming",
    level: "Beginner",
    icon: "🔧",
    rating: "4.8",
    students: "1,150",
    lessons: 20,
    price: "$25",
  },
];

function CoursesPage() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || course.category === category;

    const matchesLevel =
      level === "All" || course.level === level;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <main className="courses-page">
      <section className="courses-header">
        <p>LEARN SOMETHING NEW</p>

        <h1>Explore Our Courses 📚</h1>

        <span>
          Choose from our collection of practical courses
          and start building new skills.
        </span>
      </section>

      <section className="course-controls">
        <input
          type="text"
          placeholder="🔎 Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Web Development">Web Development</option>
          <option value="Programming">Programming</option>
          <option value="Design">Design</option>
          <option value="Data Science">Data Science</option>
        </select>

        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="All">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </section>

      <section className="all-courses-grid">
        {filteredCourses.map((course) => (
          <div className="full-course-card" key={course.id}>
            <div className="full-course-icon">
              {course.icon}
            </div>

            <div className="full-course-content">
              <span className="course-category">
                {course.category}
              </span>

              <h2>{course.title}</h2>

              <span className="course-level">
                {course.level}
              </span>

              <div className="course-rating">
                ⭐ {course.rating}
                <span>
                  ({course.students} students)
                </span>
              </div>

              <div className="course-meta">
                <span>📖 {course.lessons} Lessons</span>
                <strong>{course.price}</strong>
              </div>

              <button
                className="view-course-btn"
                onClick={() => navigate(`/course/${course.id}`)}
              >
                View Course →
              </button>
            </div>
          </div>
        ))}
      </section>

      {filteredCourses.length === 0 && (
        <div className="no-courses">
          <h2>😕 No courses found</h2>
          <p>Try another search or category.</p>
        </div>
      )}
    </main>
  );
}

export default CoursesPage;