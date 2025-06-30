import leftimg from "../assets/hero-leftimg.png";
import bottomimg from "../assets/hero-bottomimg.jpg";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-title">
            <h1 className="title-h1">
              Find the best <span>talent</span>
            </h1>
            <img src={leftimg} className="hero-leftimg" alt="Images" />
          </div>

          <div className="hero-text">
            <span></span>
            <p>
              Finding the right people and building high performing teams can be
              hard. Most companies aren’t tapping into the abundance of global
              talent. We’re about to change that.
            </p>
            <img className="hero-bottomImg" src={bottomimg} alt="images" />
          </div>
          {/* tablet */}
          <div className="container">
            <div className="tablet ">
              <h1>
                Find the best <span>talent</span>
              </h1>
              <p>
                Finding the right people and building high performing teams can
                be hard. Most companies aren’t tapping into the abundance of
                global talent. We’re about to change that.
              </p>
              <img src={bottomimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
