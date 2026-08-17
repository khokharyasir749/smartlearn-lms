const testimonials = [
  {
    name: "Asjad Abbas",
    role: "Web Development Student",
    text: "SmartLearn helped me understand web development through simple and practical lessons.",
  },
  {
    name: "Rana Asad",
    role: "Python Student",
    text: "The courses are easy to follow and the learning dashboard keeps me motivated.",
  },
  {
    name: "Yaseen",
    role: "UI/UX Student",
    text: "I enjoyed learning design concepts through structured lessons and practical examples.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="section-heading">
        <p>STUDENT REVIEWS</p>
        <h2>What Our Students Say</h2>
        <span>
          See what students think about their learning experience.
        </span>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.name}>
            <div className="stars">★★★★★</div>

            <p>"{testimonial.text}"</p>

            <h3>{testimonial.name}</h3>

            <span>{testimonial.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;