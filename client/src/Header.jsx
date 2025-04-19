
import "./App.css";
import homeNav from "./home_btn.png";
import treeNav from "./tree_btn.png";
import achieveNav from "./achieve_btn.png";
import storeNav from "./store_btn.png";
import eQIcon from "./eQIcon.png";

function Header() {
  return (
    <div>
      <nav className="navbar">
        <a href="/" className="logo-link">
          <img src={eQIcon} alt="Ecoquest Icon" className="nav-icon" />
        </a>
        <div className="nav-container">
          <ul className="nav-links">
            <li className="nav-item">
              <a href="/"><img src={homeNav} alt="Home" className="home" /></a>
              <a href="/tree"><img src={treeNav} alt="Tree" className="tree" /></a>
              <a href="/achievements"><img src={achieveNav} alt="Achievements" className="achievements" /></a>
              <a href="/store"><img src={storeNav} alt="Store" className="store" /></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
