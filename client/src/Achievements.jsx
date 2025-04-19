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
    <button name = "plant" onClick = {pointSystem("plant")}>Planted a tree/plant</button>,
    <button name = "bags" onClick = {pointSystem("bags")}>Used reusable bags</button>,
    <button name = "recycle" onClick = {pointSystem("recycle")}>Recycled/composted</button>,
    <button name = "waste" onClick = {pointSystem("waste")}>Limited food waste</button>,
    <button name = "clothes" onClick = {pointSystem("clothes")}>Donated clothes</button>
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
