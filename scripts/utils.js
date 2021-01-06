import { setLast, winPopup, popupImage } from "./vars.js";

function emptyLast() {
  const empty = "";
  setLast(empty);
}

function checkMatch(card1, card2) {
  if (card1 === card2) {
    return true;
  } else {
    return false;
  }
}

function flipBack(currentCard, lastCard) {
  console.log(currentCard + "Current Card");
  console.log(lastCard + "Last Card");
  let allCards = document.querySelectorAll(".grid__card");
  let i;

  for (i = 0; i < allCards.length; i++) {
    const thisId = allCards[i].id;
    const thisBG = allCards[i].style.backgroundImage;
    const thisButton = allCards[i].querySelector(".grid__flip");
    if (allCards[i].id === lastCard) {
      if (allCards[i].style.backgroundImage != "url('images/cardBack.png')") {
        allCards[i].style.backgroundImage = "url('images/cardBack.png')";
        thisButton.disabled = false;
      }
    }
  }
}

function matchedIt(current) {
  console.log("You win!");
  winPopup.style.display = "flex";
  emptyLast();
  popupImage.src = "images/" + current + ".jpg";
}

export { emptyLast, checkMatch, matchedIt, flipBack };
