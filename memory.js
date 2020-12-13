"use strict";

const grid = document.querySelector(".grid");
const cardTemplate = document.querySelector("#cardTemplate").content;
const winPopup = document.querySelector(".modal");
const popupImage = winPopup.querySelector(".modal__pic");
const changeBtn = document.querySelector(".changeName");
const changePopup = document.querySelector(".changeNameWhole");
const gamesWonAmt = document.querySelector(".gamesWon");
const nameSelector = document.querySelector(".userName");
const cardSelector = document.querySelector(".grid__card");
const replayBtn = document.querySelector(".modal__link");
const changeName = document.querySelector(".changeNameNow");

let card1 = [];

let userObj = {
  name: "blank",
  wonGames: 0,
};

let i = "1";

function updateName() {
  userObj.name = "Desi";
  console.log(userObj);
}

// Reset Cards without losing User Info

function resetCards() {
  // Find all fields inside the form, and
  // make an array from them using the Array.from() method
  const cardsList = Array.from(grid.querySelectorAll(".grid__card"));
  console.log(cardsList);
  // Iterate over the resulting array
  cardsList.forEach((card) => {
    const flipBtn = card.querySelector(".grid__flip");
    flipBtn.removeAttribute("disabled");
    // add the input event handler to each field
    card.style.backgroundImage = "url('images/cardBack.png')";
    winPopup.style.display = "none";
    console.log(card);
  });
  card1 = [];
  let newGamesWon = (userObj.wonGames += 1);
  gamesWonAmt.textContent = newGamesWon;
}

// Reset Function
function refreshPage() {
  window.location.reload();
}

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
        winPopup.style.display = "flex";
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

changeName.addEventListener("submit", (evt) => {
  evt.preventDefault();
  updateName();
  console.log("working maybe");
});

replayBtn.addEventListener("click", (evt) => {
  resetCards();
});

//Change Name Popup

changeBtn.addEventListener("click", (evt) => {
  if (evt.target === changeBtn) {
    changePopup.style.display = "flex";
  }
});
changePopup.addEventListener("click", (evt) => {
  if (evt.target === changePopup) {
    changePopup.style.display = "none";
    console.log("Suicide");
  }
});

setCards();
