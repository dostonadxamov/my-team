import img1 from "../assets/main2-bg-left.svg";
import kady from "../assets/kady.svg";
import aisha from "../assets/aisha.svg";
import arthur from "../assets/arthur.svg";
import img2 from "../assets/img.svg";
import img3 from "../assets/main2-bg-right.svg";

function Main2() {
  return (
    <div className="main2">
      <img src={img1} alt="" />
      <div className="container">
        <div className="main2-wrapper">
          <h2 className="main2-h2">
            Delivering real results for top companies. Some of our{" "}
            <span>success stories.</span>
          </h2>
          <div className="main2-info">
            <span className="info-card">
              <img className="background-img" src={img2} alt="" />
              <p className="info-p1">
                {" "}
                “The team perfectly fit the specialized skill set required. They
                focused on the most essential features helping us launch the
                platform eight months faster than planned.”
              </p>
              <h3 className="card-h3">Kady Baker</h3>
              <p className="info-p2">Product Manager at Bookmark</p>
              <img className="kady" src={kady} alt="" />
            </span>

            <span className="info-card">
              <img className="background-img" src={img2} alt="" />
              <p className="info-p1">
                {" "}
                “The team perfectly fit the specialized skill set required. They
                focused on the most essential features helping us launch the
                platform eight months faster than planned.”
              </p>
              <h3 className="card-h3">Kady Baker</h3>
              <p className="info-p2">Product Manager at Bookmark</p>
              <img className="kady" src={aisha} alt="" />
            </span>
            <span className="info-card">
              <img className="background-img" src={img2} alt=""></img>
              <p className="info-p1">
                {" "}
                “The team perfectly fit the specialized skill set required. They
                focused on the most essential features helping us launch the
                platform eight months faster than planned.”
              </p>
              <h3 className="card-h3">Kady Baker</h3>
              <p className="info-p2">Product Manager at Bookmark</p>
              <img className="kady" src={arthur} alt="" />
            </span>
          </div>
        </div>
      </div>
      <img className="bg-bottom" src={img3} alt="" />
    </div>
  );
}

export default Main2;
