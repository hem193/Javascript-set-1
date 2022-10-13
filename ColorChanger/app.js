// Variable Declarations
const canvas = document.getElementById("canvas");
const canvasBtn = document.getElementById("button");

canvasBtn.addEventListener("click", function () {
  let hexaValues = "0123456789ABCDEF";
  let hash = "#";
  canvas.style.backgroundColor = changeBackgroundColor(hexaValues, hash);
});

function changeBackgroundColor(hexaValues, hash) {
  for (let i = 0; i < 6; i++) {
    hash = hash + hexaValues[Math.floor(Math.random() * 16)];
  }
  return hash;
}
