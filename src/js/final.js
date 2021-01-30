let bedButton = document.querySelector("#final__bed-button");
let depositButton = document.querySelector("#final__deposit-button");
let bankButton = document.querySelector("#final__bank-button");
let bedNote = document.querySelector("#final__bed");
let depositNote = document.querySelector("#final__deposit");
let bankNote = document.querySelector("#final__bank");

function toggleBed() {
  bedNote.classList.toggle("final__note--close");
  bedButton.classList.toggle("final__interrogatory--open");
}

function toggleDeposit() {
  depositNote.classList.toggle("final__note--close");
  depositButton.classList.toggle("final__interrogatory--open");
}

function toggleBank() {
  bankNote.classList.toggle("final__note--close");
  bankButton.classList.toggle("final__interrogatory--open");
}

function openCloseBedNote() {
  if (!depositNote.classList.contains("final__note--close")) {
    toggleDeposit();
  } else if (!bankNote.classList.contains("final__note--close")) {
    toggleBank();
  }
  toggleBed();
}

function openCloseDepositNote() {
  if (!bedNote.classList.contains("final__note--close")) {
    toggleBed();
  } else if (!bankNote.classList.contains("final__note--close")) {
    toggleBank();
  }
  toggleDeposit();
}

function openCloseBankNote() {
  if (!bedNote.classList.contains("final__note--close")) {
    toggleBed();
  } else if (!depositNote.classList.contains("final__note--close")) {
    toggleDeposit();
  }
  toggleBank();
}

bedButton.addEventListener("click", openCloseBedNote, false);
depositButton.addEventListener("click", openCloseDepositNote, false);
bankButton.addEventListener("click", openCloseBankNote, false);
