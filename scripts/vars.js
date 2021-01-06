const cardsWon = [];
let lastCard = "";
function setLast(val) {
  lastCard = val;
}

const winPopup = document.querySelector(".modal");
const popupImage = winPopup.querySelector(".modal__pic");

export { cardsWon, lastCard, setLast, winPopup, popupImage };
