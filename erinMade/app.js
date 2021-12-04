const btn = document.getElementById("btn");

let clickCount = 0;

function countBtnClick(event) {
  clickCount += 1;
  btn.innerText = clickCount;
}

if (btn) {
  btn.addEventListener("click", countBtnClick);
}
