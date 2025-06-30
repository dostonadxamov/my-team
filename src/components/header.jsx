import logo from "../assets/logo.svg";
import hr from "../assets/hr.png";
import Normal_btn from "./normal-btn";

function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            <li>
              <img src={logo} alt="logo" />
            </li>
            <li>
              <a href="">home</a>
            </li>
            <li>
              <a href="">about</a>
            </li>
          </ul>
          <Normal_btn />
          <img className="hr" src={hr} alt="" />
        </nav>
      </div>
    </header>
  );
}

export default Header;
