import "./styles.css";

const canvas = document.querySelector("#gameScreen");
const context = canvas.getContext("2d");

// Clear screen each time
context.clearRect(0, 0, 800, 600);

// Draw a simple rect
context.fillStyle = "#0f0";
context.fillRect(40, 10, 10, 10);
