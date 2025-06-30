import heroimg from "../assets/about-bg.svg";

function Abouthero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-title">
            <h1 className="title-h1">About</h1>
          </div>

          <div className="hero-text">
            <span></span>
            <p>
              We help companies build dynamic teams made up of top global
              talent. Using our network of passionate professionals we drive
              innovation and deliver incredible outcomes. Talented, diverse
              teams shape the best products and experiences. We’ll bring those
              teams to you.
            </p>
          </div>
          {/* tablet */}
          <div className="container">
            <div className="tablet ">
              <h1>About</h1>
              <p>
                We help companies build dynamic teams made up of top global
                talent. Using our network of passionate professionals we drive
                innovation and deliver incredible outcomes. Talented, diverse
                teams shape the best products and experiences. We’ll bring those
                teams to you.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img className="about-bg" src={heroimg} alt="" />
    </div>
  );
}

export default Abouthero;
