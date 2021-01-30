let averageButton = document.querySelector(".average__button");
let averageContent = document.querySelector(".average__display");
let averageText = document.querySelector(".average__button-text");
let averageArrow = document.querySelector(".average__button-arrow");
let average = document.querySelector(".average");

function openCloseMenu() {
  if (!averageContent.classList.contains("average__display--display")) {
    averageText.textContent = "Свернуть";
  } else {
    averageText.textContent = "А как в среднем у читателей vc.ru?";
  }
  averageArrow.classList.toggle("average__button-arrow--open");
  averageContent.classList.toggle("average__display--display");
}

averageButton.addEventListener(
  "click",
  function () {
    openCloseMenu();
    average.scrollIntoView({ behavior: "smooth" });
  },
  false
);
