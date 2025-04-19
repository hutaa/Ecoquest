import "./App.css";
import homeNav from "./home_btn.png";
import treeNav from "./tree_btn.png";
import achieveNav from "./achieve_btn.png";
import storeNav from "./store_btn.png";
import eQLogo from "./ecoquest_logo.png";
import playBtn from "./play_btn.png";
import eQIcon from "./eQIcon.png";

const header = () => {
  return (
    <div className="homePage">
      <head>
        <meta charset="UTF-8" />
        <title>Ecoquest</title>
      </head>
      <nav className="navbar">
        <img src={eQIcon} alt="Ecoquest Icon" className="nav-icon" />
        <div className="nav-container">
          <ul className="nav-links">
            <li className="nav-item">
              <a href="/"><img src={homeNav} alt="Home" className="home" /></a>
              <a href="/"><img src={treeNav} alt="Tree" className="tree" /></a>
              <a href="/"><img src={achieveNav} alt="Achievements" className="achievements" /></a>
              <a href="/"><img src={storeNav} alt="Store" className="store" /></a>
            </li>
          </ul>
        </div>
      </nav>
      <div className = "ecoquestLogo">
        <img src = {eQLogo} alt="Ecoquest Logo" className="logo"/>
      </div> 
      <div className = "play">
        <img src = {playBtn} alt="Play Button" className="playBtn"/>
      </div>   
    </div>
    
    
  );
}

export default header;