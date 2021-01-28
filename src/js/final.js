let bedButton = document.querySelector("#final__bed-button");
let depositButton = document.querySelector("#final__deposit-button");
let bankButton = document.querySelector("#final__bank-button");
let bedNote = document.querySelector("#final__bed");
let depositNote = document.querySelector("#final__deposit");
let bankNote = document.querySelector("#final__bank");

function closeBed() {
  bedNote.style.display = "none";
  bedButton.style.background = "#FEEBEF";
  bedButton.style.color = "#FE4D4A";
}

function closeDeposit() {
  depositNote.style.display = "none";
  depositButton.style.background = "#FEEBEF";
  depositButton.style.color = "#FE4D4A";
}

function closeBank() {
  bankNote.style.display = "none";
  bankButton.style.background = "#FEEBEF";
  bankButton.style.color = "#FE4D4A";
}

function openCloseBedNote() {
  if (window.getComputedStyle(bedNote).getPropertyValue("display") == "none") {
    if (
      window.getComputedStyle(depositNote).getPropertyValue("display") ==
      "block"
    ) {
      closeDeposit();
    } else if (
      window.getComputedStyle(bankNote).getPropertyValue("display") == "block"
    ) {
      closeBank();
    }
    bedNote.style.display = "block";
    bedButton.style.background = "#FE4D4A";
    bedButton.style.color = "#FFFFFF";
  } else {
    closeBed();
  }
}

function openCloseDepositNote() {
  if (
    window.getComputedStyle(depositNote).getPropertyValue("display") == "none"
  ) {
    if (
      window.getComputedStyle(bedNote).getPropertyValue("display") == "block"
    ) {
      closeBed();
    } else if (
      window.getComputedStyle(bankNote).getPropertyValue("display") == "block"
    ) {
      closeBank();
    }
    depositNote.style.display = "block";
    depositButton.style.background = "#FE4D4A";
    depositButton.style.color = "#FFFFFF";
  } else {
    closeDeposit();
  }
}

function openCloseBankNote() {
  if (window.getComputedStyle(bankNote).getPropertyValue("display") == "none") {
    if (
      window.getComputedStyle(bedNote).getPropertyValue("display") == "block"
    ) {
      closeBed();
    } else if (
      window.getComputedStyle(depositNote).getPropertyValue("display") ==
      "block"
    ) {
      closeDeposit();
    }
    bankNote.style.display = "block";
    bankButton.style.background = "#FE4D4A";
    bankButton.style.color = "#FFFFFF";
  } else {
    closeBank();
  }
}

bedButton.onclick = openCloseBedNote;
depositButton.onclick = openCloseDepositNote;
bankButton.onclick = openCloseBankNote;
