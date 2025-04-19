import "./App.css";

function Achievements() {
  eventListener();
  return (
    <div>
    <CreateButton />
    </div>
  );
  
}

export default Achievements;


function CreateButton() {
  return (
    <button name = "stairs" onClick = {pointSystem("stairs")}>Took the Stairs <img src = "InputButton.png"></img></button>,
    <button name = "plant" onClick = {pointSystem("plant")}>Planted a tree/plant <img src = "InputButton.png"></img></button>,
    <button name = "bags" onClick = {pointSystem("bags")}>Used reusable bags <img src = "InputButton.png"></img></button>,
    <button name = "recycle" onClick = {pointSystem("recycle")}>Recycled/composted <img src = "InputButton.png"></img></button>,
    <button name = "waste" onClick = {pointSystem("waste")}>Limited food waste <img src = "InputButton.png"></img></button>,
    <button name = "clothes" onClick = {pointSystem("clothes")}>Donated clothes <img src = "InputButton.png"></img></button>
  );
}


function pointSystem(name)
{
  points = 0
  if (name == "stairs")
    points = 10;
  else if (name == "plant")
    points = 10;
  else if (name == "bags")
    points = 10;
  else if (name == "recycle")
    points = 10;
  else if (name == "waste")
    points = 10;
  else if (name == "clothes")
    points = 10;
}
