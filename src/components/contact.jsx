import img1 from "../assets/main-img1.svg";
import img2 from "../assets/main-img2.svg";
import img3 from "../assets/main-img3.svg";
import last from "../assets/last.svg";

function Contact() {
  return (
    <div className="contact">
      <img className="last" src={last} alt="" />
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact1">
            <h1>Contact</h1>
            <h2>Ask us about</h2>
            <span className="about-card">
              <img src={img1} alt="" />
              <span>
                <p>The quality of our talent network</p>
              </span>
            </span>
            <span className="about-card">
              <img src={img2} alt="" />
              <span>
                <p>Usage & implementation of our software</p>
              </span>
            </span>
            <span className="about-card">
              <img src={img3} alt="" />
              <span>
                <p>How we help drive innovation</p>
              </span>
            </span>
          </div>

          <div className="form">
            <form>
              <input className="name" placeholder="Name" type="text" />
              <input
                className="name"
                placeholder="Email Address"
                type="email"
              />
              <input className="name" placeholder="Company Name" type="text" />
              <input className="name" placeholder="Title" type="text" />
              <textarea className="name" placeholder="Message"></textarea>
              <button type="submit">submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
