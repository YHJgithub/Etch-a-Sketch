const initSize = 16;

const container = document.querySelector("#container");
const resizeButton = document.querySelector("#resize-button");

function creatGrid(size) {
  container.textContent = "";
  for (let i = 0; i < size * size; i++) {
    // 每个方块大小
    const divSize = 960 / size;
    let div = document.createElement("div");
    div.classList.add("square");
    div.style.height = `${divSize}px`;
    div.style.width = `${divSize}px`;
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = getRandomColor();
    });
    container.appendChild(div);
  }
}

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

creatGrid(initSize);

resizeButton.addEventListener("click", () => {
  let newSize = +prompt("一行要多少方格: ", 10);
  if (newSize > 100) {
    newSize = 100;
  } else if (newSize < 1 || isNaN(newSize)) {
    newSize = initSize;
  }
  creatGrid(newSize);
});
