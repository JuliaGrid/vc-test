let slider = document.querySelector(".greeting__input");
let pointer = document.querySelector(".greeting__pointer");
let inputRed = document.querySelector(".greeting__input-red");
let finalSum = document.querySelector(".final__sum");
let bedValue = document.querySelector("#final__bed-value");
let depositValue = document.querySelector("#final__deposit-value");
let bankValue = document.querySelector("#final__bank-value");
let bedImg = document.querySelector("#final__bed-img");
let depositImg = document.querySelector("#final__deposit-img");
let bankImg = document.querySelector("#final__bank-img");
let final = document.querySelector(".final");
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

function deposit(value) {
  let firstYear = value * 12 + ((value * 12) / 100) * 6.68;
  let secondYear = firstYear + (firstYear / 100) * 6.68;
  let thirdYear = secondYear + (secondYear / 100) * 6.68;
  return Math.round(firstYear + secondYear + thirdYear);
}

function investment(value) {
  let firstYear = value * 12 * 3;
  return Math.round(firstYear + (firstYear / 100) * 71.21);
}

function writeCoins(img, value, biggestValue) {
  let step = biggestValue / 10;
  let margin = -28;
  let result = `<img src="img/coin.svg" alt="money">`;
  function countCoins(number) {
    for (let i = 1; i < number; i++) {
      result =
        result +
        `<img src="img/coin.svg" alt="money" style="position: absolute; margin-left: ${
          15 * i
        }px"/>`;
    }
    margin = margin + -7 * (number - 1);
  }
  if (value >= step * 1 && value < step * 2) {
    countCoins(2);
  } else if (value >= step * 2 && value < step * 3) {
    countCoins(3);
  } else if (value >= step * 3 && value < step * 4) {
    countCoins(4);
  } else if (value >= step * 4 && value < step * 5) {
    countCoins(5);
  } else if (value >= step * 5 && value < step * 6) {
    countCoins(6);
  } else if (value >= step * 6 && value < step * 7) {
    countCoins(7);
  } else if (value >= step * 7 && value < step * 8) {
    countCoins(8);
  } else if (value >= step * 8 && value < step * 9) {
    countCoins(9);
  } else if (value >= step * 9 && value <= step * 10) {
    countCoins(10);
  }
  img.innerHTML = result;
  img.style.marginLeft = margin + "px";
}

function writeMoney(money) {
  return String(money).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
}

slider.oninput = function () {
  pointer.innerHTML = writeMoney(slider.value) + " " + "₽";
  finalSum.innerHTML = String(writeMoney(slider.value));
  bedResult = slider.value * 12 * 3;
  depositResult = deposit(slider.value);
  bankResult = investment(slider.value);
  biggestResult = investment(50000);
  bedValue.innerHTML = String(writeMoney(bedResult));
  depositValue.innerHTML = String(writeMoney(depositResult));
  bankValue.innerHTML = String(writeMoney(bankResult));
  writeCoins(bedImg, bedResult, biggestResult);
  writeCoins(depositImg, depositResult, biggestResult);
  writeCoins(bankImg, bankResult, biggestResult);
  setPointerPosition();
  setRedInputPosition();
};

slider.onmouseup = function () {
  final.scrollIntoView({ behavior: "smooth" });
};

slider.addEventListener(
  "touchend",
  function () {
    final.scrollIntoView({ behavior: "smooth" });
  },
  false
);
