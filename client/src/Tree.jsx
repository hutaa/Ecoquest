import "./App.css";

function GetNextUpkeepGoal(curr_upkeep)
{
  if (curr_upkeep < 10)
  {
    return 10;
  }
  else if (curr_upkeep < 25)
  {
    return 25;
  }
  else if (curr_upkeep < 50)
  {
    return 50;
  }
  else if (curr_upkeep < 100)
  {
    return 100;
  }
  else
  {
    return -1;
  }
}

function Tree()
{
  var curr_upkeep = 0;
  if (localStorage["points"])
  {
    curr_upkeep = Number(localStorage["points"]);
  }
  
  var next_goal = GetNextUpkeepGoal(curr_upkeep);

  var progress = curr_upkeep/next_goal;
  var progress_text = "";
  if (next_goal === -1)
  {
    progress = 1;
    progress_text = (curr_upkeep) + "excess upkeep past Level 4!"
  }
  else
  {
    progress_text = (next_goal - curr_upkeep) + " Upkeep until next level!"
  }

  return (
    <div className="page-container">
        <div className="tree-image"></div>
        <div className="top-page">
          <div className="curved-divider"></div>
        </div>
        <div className="spacer"></div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{width: `calc(100% * ${progress})`}}></div>
        </div>
        <div className="text-box text-align-center">
          {progress_text}
        </div>
        <div className="spacer"></div>
        <div className="text-box text-align-center">
          {"Info:\n10 Upkeep for Level 1\n25 Upkeep for Level 2\n50 Upkeep for Level 3\n100 Upkeep for Level 4 (MAX)\n"}
        </div>
    </div>
  );
}

export default Tree;