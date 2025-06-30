import img1 from "../assets/main-img1.svg";
import img2 from "../assets/main-img2.svg";
import img3 from "../assets/main-img3.svg";
import mainlogo from "../assets/main-logo.svg";

function Main() {
  return (
    <main>
      <img className="main-logo" src={mainlogo} alt="" />

      <div className="container">
        <div className="main-wrapper">
          <div className="main-title">
            <span></span>
            <h2>Build & manage distributed teams like no one else.</h2>
          </div>

          <div className="main-content">
            <span className="span1">
              <img src={img1} alt="" />
              <span>
                <h3>Experienced Individuals</h3>
                <p>
                  Our network is made up of highly experienced professionals who
                  are passionate about what they do.
                </p>
              </span>
            </span>
            <span className="span1">
              <img src={img2} alt="" />
              <span>
                <h3>Easy to Implement</h3>
                <p>
                  Our processes have been refined over years of implementation
                  meaning our teams always deliver.
                </p>
              </span>
            </span>
            <span className="span1">
              <img src={img3} alt="" />
              <span>
                <h3>Enhanced Productivity</h3>
                <p>
                  Our customized platform with in-built analytics helps you
                  manage your distributed teams.
                </p>
              </span>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
