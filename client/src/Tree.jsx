import "./App.css";

function GetTimestampInSeconds()
{
  return (Math.floor(Date.now() / 1000));
}

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

function GetCurrentLevel(curr_upkeep)
{
  if (curr_upkeep < 10)
  {
    return 0;
  }
  else if (curr_upkeep < 25)
  {
    return 1;
  }
  else if (curr_upkeep < 50)
  {
    return 2;
  }
  else if (curr_upkeep < 100)
  {
    return 3;
  }
  else
  {
    return 4;
  }
}

function Tree()
{
  //Handling calcuating upkeep over time. Upkeep is refreshed on page load.
  var last_upkeep_update = localStorage["last_upkeep_update"] || 0;
  var deduct_upkeep = 0;
  if (last_upkeep_update === 0)
  {
    localStorage["last_upkeep_update"] = "" + GetTimestampInSeconds()
  }
  else
  {
    last_upkeep_update = Number(last_upkeep_update);
    //Deduct 1 upkeep every 10 seconds for testing purposes.
    deduct_upkeep = Math.floor((GetTimestampInSeconds() - last_upkeep_update) / 10);
    localStorage["last_upkeep_update"] = "" + (last_upkeep_update + (deduct_upkeep * 10));
  }

  //Handles display methods for the current upkeep.
  var curr_upkeep = 0;
  if (localStorage["points"])
  {
    curr_upkeep = Number(localStorage["points"]);
    curr_upkeep = curr_upkeep > deduct_upkeep ? curr_upkeep - deduct_upkeep : 0;
    localStorage["points"] = "" + curr_upkeep;
  }

  var next_goal = GetNextUpkeepGoal(curr_upkeep);

  var progress = curr_upkeep/next_goal;
  var progress_text = "";
  if (next_goal === -1)
  {
    progress = 1.0;
    progress_text = (curr_upkeep - 100) + " excess upkeep past Level 4!"
  }
  else
  {
    progress_text = (next_goal - curr_upkeep) + " upkeep until level " + (GetCurrentLevel(curr_upkeep) + 1);
  }

  return (
    <div className="page-container">
        <div className={"tree-image level-" + GetCurrentLevel(curr_upkeep)}></div>
        <div className="top-page">
          <div className="curved-divider"></div>
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{width: `calc(100% * ${progress})`}}></div>
        </div>
        <div className="text-box text-align-center">
          {progress_text}
        </div>
        <div className="spacer"></div>
        <div className="text-box text-align-center">
          {`Info:\n10 Upkeep for Level 1\n25 Upkeep for Level 2\n50 Upkeep for Level 3\n100 Upkeep for Level 4 (MAX)`}
        </div>
    </div>
  );
}

export default Tree;