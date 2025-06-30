import iimg from "../assets/about-left-bg.svg";
import nikita from "../assets/nikita.svg";
import plus from "../assets/plus.svg";
import cristian from "../assets/cristian.svg";
import cruz from "../assets/cruz.svg";
import img2 from "../assets/bottom3.svg";

function Aboutmain() {
  return (
    <div className="about-main">
      <img className="about-img" src={iimg} alt="images" />
      <div className="container">
        <div className="about-wrapper">
          <h2 className="about-title">Meet the directors</h2>
          <div className="first-block parent">
            <div>
              {" "}
              <span className="card1">
                <img
                  className="nikita"
                  width="96"
                  height="96"
                  src={nikita}
                  alt="nikita"
                />
                <h3 className="about-h3">Nikita Marks</h3>
                <p className="about-p">Founder & CEO</p>
                <img
                  className="plus"
                  src={plus}
                  alt="+"
                  width="56"
                  height="56"
                />
              </span>{" "}
            </div>
            <div>
              {" "}
              <span className="card1">
                <img
                  className="nikita"
                  width="96"
                  height="96"
                  src={cristian}
                  alt="nikita"
                />
                <h3 className="about-h3">Cristian Duncan</h3>
                <p className="about-p">Co-founder & COO</p>
                <img
                  className="plus"
                  src={plus}
                  alt="+"
                  width="56"
                  height="56"
                />
              </span>{" "}
            </div>
            <div>
              {" "}
              <span className="card1">
                <img
                  className="nikita"
                  width="96"
                  height="96"
                  src={cruz}
                  alt="nikita"
                />
                <h3 className="about-h3">Cruz Hamer</h3>
                <p className="about-p">Co-founder & CTO</p>
                <img
                  className="plus"
                  src={plus}
                  alt="+"
                  width="56"
                  height="56"
                />
              </span>{" "}
            </div>

            <div>
              {" "}
              <span className="card1">
                <img
                  className="nikita"
                  width="96"
                  height="96"
                  src={cruz}
                  alt="nikita"
                />
                <h3 className="about-h3">Cruz Hamer</h3>
                <p className="about-p">Co-founder & CTO</p>
                <img
                  className="plus"
                  src={plus}
                  alt="+"
                  width="56"
                  height="56"
                />
              </span>{" "}
            </div>
            <div>
              {" "}
              <span className="card1">
                <img
                  className="nikita"
                  width="96"
                  height="96"
                  src={cruz}
                  alt="nikita"
                />
                <h3 className="about-h3">Cruz Hamer</h3>
                <p className="about-p">Co-founder & CTO</p>
                <img
                  className="plus"
                  src={plus}
                  alt="+"
                  width="56"
                  height="56"
                />
              </span>{" "}
            </div>

            <div>
              {" "}
              <span className="card1">
                <img
                  className="nikita"
                  width="96"
                  height="96"
                  src={cruz}
                  alt="nikita"
                />
                <h3 className="about-h3">Cruz Hamer</h3>
                <p className="about-p">Co-founder & CTO</p>
                <img
                  className="plus"
                  src={plus}
                  alt="+"
                  width="56"
                  height="56"
                />
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
      <img className="bottom" src={img2} alt="images" />
    </div>
  );
}

export default Aboutmain;
