const planner = document.getElementById("planner");
const startHour = 9;
const endHour = 17;

function loadPlanner() {
  for (let hour = startHour; hour <= endHour; hour++) {
    const timeBlock = document.createElement("div");
    timeBlock.className = "time-block";

    const hourLabel = document.createElement("div");
    hourLabel.className = "hour";
    hourLabel.textContent = formatHour(hour);

    const input = document.createElement("input");
    input.className = "task";
    input.type = "text";
    input.value = localStorage.getItem(`task-${hour}`) || "";

    const saveBtn = document.createElement("button");
    saveBtn.className = "saveBtn";
    saveBtn.textContent = "Save";
    saveBtn.onclick = () => {
      localStorage.setItem(`task-${hour}`, input.value);
      alert("Task saved!");
    };

    timeBlock.appendChild(hourLabel);
    timeBlock.appendChild(input);
    timeBlock.appendChild(saveBtn);

    planner.appendChild(timeBlock);
  }
}

function formatHour(hour) {
  const suffix = hour >= 12 ? "PM" : "AM";
  const formattedHour = ((hour + 11) % 12 + 1); // Convert to 12-hour format
  return `${formattedHour} ${suffix}`;
}

loadPlanner();
