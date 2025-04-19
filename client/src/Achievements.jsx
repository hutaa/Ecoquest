import "./App.css";

export default function Achievements() {
  return (
    <div className="achievements-page">
      <h1 className="achievements-title">Your Eco Achievements</h1>
      <div className="achievements-container">
        <CreateButton />
      </div>
      <div className="points-display">
        Your current points: <span id="points-counter">{localStorage["points"] || 0}</span>
      </div>
    </div>
  );
}

function CreateButton() {
  function pointSystem(name) {
    let points = localStorage["points"] ? Number(localStorage["points"]) : 0;
    
    if (["stairs", "plant", "bags", "recycle", "waste", "clothes"].includes(name)) {
      points += 10;
    }

    localStorage["points"] = points.toString();
    document.getElementById("points-counter").textContent = points;
  }

  const achievements = [
    { name: "stairs", label: "Took the Stairs" },
    { name: "plant", label: "Planted a tree/plant" },
    { name: "bags", label: "Used reusable bags" },
    { name: "recycle", label: "Recycled/composted" },
    { name: "waste", label: "Limited food waste" },
    { name: "clothes", label: "Donated clothes" }
  ];

  return (
    <div className="achievements-grid">
      {achievements.map((achievement) => (
        <div key={achievement.name} className="achievement-card">
          <button 
            name={achievement.name} 
            onClick={() => pointSystem(achievement.name)}
            className="achievement-button"
          >
            {achievement.label}
            <span className="points-badge">+10 pts</span>
          </button>
        </div>
      ))}
    </div>
  );
}