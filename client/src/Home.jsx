import "./App.css";
import eQLogo from "./ecoquest_logo.png";
import playBtn from "./play_btn.png";
import Header from './Header';

const header = () => {
  return (
    <div className="homePage">
      <head>
        <meta charset="UTF-8" />
        <title>Ecoquest</title>
      </head>
      <div className = "ecoquestLogo">
        <a href ="/"><img src = {eQLogo} alt="Ecoquest Logo" className="logo"/></a>
      </div> 
      <div className = "play">
        <a href ="/tree"><img src = {playBtn} alt="Play Button" className="playBtn"/></a>
      </div>   
    </div>
    
  );
}

export default header;