import "./App.css";
import homeNav from "./home_btn.png";
import treeNav from "./tree_btn.png";
import achieveNav from "./achieve_btn.png";
import storeNav from "./store_btn.png";

const header = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item">
          <a href="/">
            <img src ={homeNav} alt="Home button" className="home" />
          </a>
          <a href="/">
            <img src ={treeNav} alt="Tree button" className="tree" />
          </a>
          <a href="/">
            <img src ={achieveNav} alt="Acievements button" className="achivements" />
          </a>
          <a href="/">
            <img src ={storeNav} alt="Store button" className="home" />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default header;