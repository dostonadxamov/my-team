import top from "../assets/top.svg";
import verge from "../assets/the-verge.svg";
import post from "../assets/post.svg";
import tech from "../assets/tech.svg";
import gat from "../assets/gadgets-now.svg";

function Aboutmain3() {
  return (
    <div className="about-main3">
      <img src={top} className="top" alt="images" />
      <div className="container">
        <h2 className="some">Some of our clients</h2>
        <div className="wrapper">
          <img src={verge} alt="images" />
          <img src={post} alt="images" />
          <img src={tech} alt="images" />
          <img src={gat} alt="images" />
        </div>
      </div>
    </div>
  );
}

export default Aboutmain3;
