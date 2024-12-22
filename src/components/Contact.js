import "../CSS/Contact.css";
function Contact() {
  return (
    <div className="area-container">
      <div className="contact-text">
        <h3>Contact us</h3>
      </div>
      <div className="contact-area">
        <div className="Contact">
          <form action="">
            <input
              class="main-input"
              type="text"
              name="name"
              placeholder="Your name"
            />
            <input
              class="main-input"
              type="email"
              name="E-Mail"
              placeholder="Your E-Mail"
            />
            <textarea
              class="main-input"
              name="Message"
              placeholder="Your Message ....."
            ></textarea>
          </form>
          <button
            onClick={() => {
              return window.alert("Service not available");
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
export default Contact;
