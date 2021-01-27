let slider = document.querySelector(".greeting__input");
let pointer = document.querySelector(".greeting__pointer");
let inputRed = document.querySelector(".greeting__input-red");
let finalSum = document.querySelector(".final__sum");
window.sliderValue;
const radius = 25;

function setPointerPosition() {
  const dxPixels =
    radius / 2 +
    ((slider.valueAsNumber - parseInt(slider.min)) *
      (slider.scrollWidth - radius)) /
      (parseInt(slider.max) - parseInt(slider.min));
  pointer.style.left = dxPixels - pointer.offsetWidth / 2 + "px";
}

function setRedInputPosition() {
  const dxPixels =
    radius / 2 +
    ((slider.valueAsNumber - parseInt(slider.min)) *
      (slider.scrollWidth - radius)) /
      (parseInt(slider.max) - parseInt(slider.min));
  inputRed.style.width = dxPixels + "px";
}

setPointerPosition();

slider.oninput = function () {
  pointer.innerHTML = slider.value + " " + "₽";
  finalSum.innerHTML = String(slider.value);
  setPointerPosition();
  setRedInputPosition();
};
