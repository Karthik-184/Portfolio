const clickableCircles = document.querySelectorAll(".circle");
const dialog = document.getElementById("dialog");
const openDialog = () => {
  dialog.showModal();
};
clickableCircles.forEach(circle => {
  circle.addEventListener("click", openDialog);
});
console.log(clickableCircles)