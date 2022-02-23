const imgBox = document.querySelector(".imgBox");
const whiteBoxes = document.getElementsByClassName("whiteBox");

imgBox.addEventListener("dragstart", (e) => {
  console.log("drag start");
  e.target.className += " hold";

  setTimeout(() => {
    e.target.className += " hide";
  }, 0);
});

imgBox.addEventListener("dragend", (e) => {
  e.target.className = "imgBox";
  console.log("drag end");
});

for (whiteBox of whiteBoxes) {
  whiteBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("drag over");
  });

  whiteBox.addEventListener("dragenter", (e) => {
    e.target.className += " dashed";
    console.log("drag enter");
  });

  whiteBox.addEventListener("dragleave", (e) => {
    e.target.className = "whiteBox";
    console.log("drag leave");
  });

  whiteBox.addEventListener("drop", (e) => {
    e.target.appendChild(imgBox);
    console.log("drag drop");

    document.querySelector(".dashed").classList = "whiteBox";
  });
}
