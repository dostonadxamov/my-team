import logo from "../assets/logo.svg";
import facebook from "../assets/icon-facebook.svg";
import pinterest from "../assets/icon-pinterest.svg";
import twitter from "../assets/icon-twitter.svg";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-wrapper">
          <div>
            <img src={logo} alt="" />
            <div className="content">
              <span>
                <h3>home</h3>
                <h3>about</h3>
              </span>
              <div className="foot-content">
                <p>987 Hillcrest Lane</p>
                <p>Irvine, CA</p>
                <p>California 92714</p>
                <p>Call Us : 949-833-7432</p>
              </div>
            </div>
          </div>

          <div className="social">
            <span>
              {" "}
              <img src={facebook} alt="" />
              <img src={pinterest} alt="" />
              <img src={twitter} alt="" />
            </span>
            <p>Copyright 2020. All Rights Reserved</p>
          </div>
        </div>

        <div className="mobile">
          <img src={logo} alt="" />
          <span>
            <h3>home</h3>
            <h3>about</h3>
          </span>
          <p>987 Hillcrest Lane</p>
          <p>Irvine, CA</p>
          <p>California 92714</p>
          <p>Call Us : 949-833-7432</p>
          <span>
            {" "}
            <img src={facebook} alt="" />
            <img src={pinterest} alt="" />
            <img src={twitter} alt="" />
          </span>
          <p>Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
