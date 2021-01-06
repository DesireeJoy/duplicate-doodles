"use strict";
import { Card } from "./Card.js";
import { setLast, winPopup, popupImage } from "./vars.js";

const grid = document.querySelector(".grid");
const gamesWonAmt = document.querySelector(".gamesWon");
const modalWindow = document.querySelector(".modal__link");

let userObj = {
  name: "User",
  wonGames: 0,
};

let i = "1";

// Reset Cards without losing Game Info

modalWindow.addEventListener("click", function (evt) {
  evt.preventDefault();
  winPopup.style.display = "none";

  let newGamesWon = (userObj.wonGames += 1);
  gamesWonAmt.textContent = newGamesWon;
});

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Set Cards Up Twice at the beginning
function setCards() {
  const newArray = initialCards.concat(initialCards);
  const initialCards2 = shuffle(newArray);

  initialCards2.forEach((element) => {
    const cardData = {
      name: element.name,
      link: element.link,
      id: i,
    };

    const makeCard = createCard(cardData);
    // addCard(makeCard);
    i++;
  });
}
function createCard(cardData) {
  const newCard = new Card(cardData, "#cardTemplate");
  const addedCard = newCard.generateCard();

  addCard(addedCard);
}
function toggleBtn(ele) {
  if (ele.disabled != true) {
    ele.disabled = true;
  } else {
    ele.disabled = true;
  }
}

function addCard(card) {
  grid.append(card);
}

setCards();
