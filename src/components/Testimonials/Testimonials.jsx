import "./Testimonials.css";

import test1 from "../../assets/images/testimonials/testimonial1.jpg";
import test2 from "../../assets/images/testimonials/testimonial2.jpg";
import test3 from "../../assets/images/testimonials/testimonial3.jpg";

const testimonials = [
  {
    image: test1,
    name: "James Walker",
    role: "CEO",
    text: "They really listened to what we wanted and made it happen. Communication was smooth the whole way through."
  },
  {
    image: test2,
    name: "Olivia Brown",
    role: "Marketing Director",
    text: "We saw a real difference after working with them. Our online presence improved and the whole process was hassle-free."
  },
  {
    image: test3,
    name: "Daniel Wilson",
    role: "Business Owner",
    text: "They handled everything from planning to delivery without a hitch. Would definitely work with them again."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">

      <div className="container">

        <div className="section-heading">
          <span>TESTIMONIALS</span>
          <h2>What Clients Say</h2>
          <div className="divider"></div>
        </div>

        <div className="testimonial-grid">

          {testimonials.map((item, index) => (

            <div className="testimonial-card" key={index}>

              <img src={item.image} alt={item.name} />

              <p>"{item.text}"</p>

              <h3>{item.name}</h3>

              <span>{item.role}</span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;