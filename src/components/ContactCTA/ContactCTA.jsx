import "./ContactCTA.css";

const ContactCTA = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-row">
          <div className="contact-col contact-info">
            <span className="contact-subtitle">Message us</span>
            <h2 className="contact-title">have some questions</h2>
            <div className="contact-line"></div>
          </div>
          <div className="contact-col">
            <form className="contact-form">
              <div className="form-group">
                <input id="name" type="text" name="name" className="form-input" placeholder="Name*" required />
              </div>
              <div className="form-group">
                <input id="email" type="email" name="email" className="form-input" placeholder="Email*" required />
              </div>
              <div className="form-group">
                <textarea id="message" name="message" className="form-input" placeholder="Message*" rows="6" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
