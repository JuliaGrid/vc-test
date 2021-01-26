let averageButton = document.querySelector(".average__button");
let averageContent = document.querySelector(".average__display");
let averageText = document.querySelector(".average__button-text");
let averageArrow = document.querySelector(".average__button-arrow");

function openCloseMenu() {
  if (
    window.getComputedStyle(averageContent).getPropertyValue("display") ==
    "none"
  ) {
    averageContent.style.display = "block";
    averageText.textContent = "Свернуть";
    averageArrow.style.transform = "rotate(180deg)";
  } else {
    averageContent.style.display = "none";
    averageText.textContent = "А как в среднем у читателей vc.ru?";
    averageArrow.style.transform = "rotate(0deg)";
  }
}

averageButton.onclick = openCloseMenu;
