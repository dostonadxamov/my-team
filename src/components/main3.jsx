import img from "../assets/main3-left.svg";

function Main3() {
  return (
    <div className="main3">
      <div className="container">
        <div className="main3-wrapper">
          <h2>Ready to get started?</h2>
          <button>Contact us</button>
        </div>
      </div>
      <img className="main3-img" src={img} alt="" />
    </div>
  );
}

export default Main3;
