const board = document.querySelector("#board");

const button = document.querySelector("button");
button.addEventListener("click", () => {
  const size = prompt("jo jo");
  setSize(size);
});

function populateBoard(size) {
  const amount = size * size;
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 1; i <= amount; i++) {
    const content = document.createElement("div");
    content.classList.add("grid-item");

    content.addEventListener("mouseover", () => {
      content.style.backgroundColor = "red";
    });

    content.addEventListener("mouseleave", () => {
      content.style.backgroundColor = "pink";
    });

    board.appendChild(content);
  }
}

function setSize(size) {
  board.innerHTML = ""; // clear board
  if (size <= 100) {
    populateBoard(size);
  }
}
