"use strict";

const grid = document.querySelector(".grid");
const cardTemplate = document.querySelector("#cardTemplate").content;
const winPopup = document.querySelector(".modal");
const popupImage = winPopup.querySelector(".modal__pic");

let card1 = [];

let i = "1";

// Set Cards Up Twice at the beginning
function setCards() {
  initialCards.forEach((element) => {
    const cardElement = createCard({
      name: element.name,
      link: element.link,
      id: i,
    });
    addCard(cardElement);
    i++;
  });
}

// Create the template clone

function createCard(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  let cloneID = cardElement.querySelector(".grid__card");
  let cloneBtn = cardElement.querySelector(".grid__flip");

  cloneID.value = cardData.id;
  cloneID.id = cardData.name;
  flipCard(cardElement);
  return cardElement;
}

// Flip the cards

function flipCard(ele) {
  const cardButton = ele.querySelector(".grid__flip");
  const cardImage = ele.querySelector(".grid__card");

  const flip = ele
    .querySelector(".grid__flip")
    .addEventListener("click", function (evt) {
      evt.preventDefault();
      cardButton.disabled = true;
      if (card1.includes(cardImage.id)) {
        winPopup.classList.add("modal_visible");
        cardImage.style.backgroundImage =
          "url('images/" + cardImage.id + ".jpg')";
        popupImage.src = "images/" + cardImage.id + ".jpg";
      } else {
        card1.push(cardImage.id);
        cardImage.style.backgroundImage =
          "url('images/" + cardImage.id + ".jpg')";
      }
    });
}

function addCard(card) {
  grid.append(card);
}

setCards();
setCards();
