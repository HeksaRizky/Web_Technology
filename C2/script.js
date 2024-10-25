const imageUrl = "ss.png";
const imageContainer = document.getElementById("image-container");
const originalImageContainer = document.getElementById(
  "original-image-container"
);
const splitBtn = document.getElementById("splitBtn");

splitBtn.addEventListener("click", splitImage);

function splitImage() {
  const x = parseInt(document.getElementById("xInput").value);
  const y = parseInt(document.getElementById("yInput").value);

  originalImageContainer.style.display = "none";
  imageContainer.style.display = "grid";

  imageContainer.innerHTML = "";
  imageContainer.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
  imageContainer.style.gridTemplateRows = `repeat(${y}, 1fr)`;

  const pieceWidth = 400 / x;
  const pieceHeight = 300 / y;

  for (let row = 0; row < y; row++) {
    for (let col = 0; col < x; col++) {
      const piece = document.createElement("div");
      piece.classList.add("piece");

      piece.style.backgroundImage = `url(${imageUrl})`;
      piece.style.backgroundPosition = `-${col * pieceWidth}px -${
        row * pieceHeight
      }px`;
      piece.style.width = `${pieceWidth}px`;
      piece.style.height = `${pieceHeight}px`;

      piece.addEventListener("click", () => {
        piece.classList.add("hidden");
      });

      imageContainer.appendChild(piece);
    }
  }
}
