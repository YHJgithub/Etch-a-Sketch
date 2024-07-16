// 初始化网格大小
const initialGridSize = 16;

// 获取DOM元素
const container = document.getElementById("container");
const resizeButton = document.getElementById("resize-button");

// 创建网格
function createGrid(size) {
  // 清空容器
  container.innerHTML = "";
  // 计算每个方块的尺寸
  const squareSize = 960 / size;
  // 创建方块并添加到容器
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    // 添加鼠标悬停效果
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = getRandomColor();
      // 实现渐暗效果
      if (!square.style.opacity) {
        square.style.opacity = 0.1;
      } else {
        square.style.opacity = Math.min(
          parseFloat(square.style.opacity) + 0.1,
          1
        );
      }
    });
    container.appendChild(square);
  }
}

// 获取随机颜色
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// 调整网格大小
resizeButton.addEventListener("click", () => {
  let newSize = parseInt(prompt("Enter new grid size (maximum 100):"), 10);
  if (newSize > 100) {
    newSize = 100;
  } else if (newSize < 1 || isNaN(newSize)) {
    newSize = initialGridSize;
  }
  createGrid(newSize);
});

// 初始化网格
createGrid(initialGridSize);
