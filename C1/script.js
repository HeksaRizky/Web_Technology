const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = canvas.height / 2;
let radius = 10;
let dx = 2;

function drawCircle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
}

function update() {
  drawCircle();

  x += dx;

  if (x > canvas.width + radius) {
    x = -radius;
  }

  requestAnimationFrame(update);
}

update();
