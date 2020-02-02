import "./styles.css";
import Paddle from "../src/paddle";

const canvas = document.querySelector("#gameScreen");
const context = canvas.getContext("2d");
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// Clear screen each time
context.clearRect(0, 0, 800, 600);

// Draw a simple rect
context.fillStyle = "#0f0";
context.fillRect(40, 10, 10, 10);

// Use paddle
context.clearRect(0, 0, 800, 600);
let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
context.fillStyle = "#000";
paddle.draw(context);
