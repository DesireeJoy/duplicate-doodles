import { emptyLast, checkMatch, matchedIt, flipBack } from "./utils.js";
import { cardsWon, lastCard, setLast } from "./vars.js";

export class Card {
  constructor(cardData, cardTemplate) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._id = cardData.id;
    this._templateElement = cardTemplate;
  }
  _findMatch(id) {
    const cardMatch = (gridList.querySelector(".grid__card").id = "this._id");
  }
  _flipCard(evt) {
    const cardButton = this._cardElement.querySelector(".grid__flip");
    const flip = cardButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      const myCard = evt.target.closest(".grid__card");
      const currentCard = myCard.id;

      //If this is the first of two clicks
      if (lastCard === "") {
        myCard.style.backgroundImage = "url('images/" + myCard.id + ".jpg')";
        setLast(myCard.id);
        cardButton.disabled = true;
      }
      //So this is the second of the pair of clicks
      else {
        if (checkMatch(currentCard, lastCard)) {
          matchedIt(currentCard);
          myCard.style.backgroundImage =
            "url('images/" + currentCard + ".jpg')";
        } else {
          myCard.style.backgroundImage = "url('images/" + myCard.id + ".jpg')";

          cardButton.disabled = false;
          const saveLast = lastCard;
          emptyLast();
          setTimeout(function () {
            console.log(lastCard);
            myCard.style.backgroundImage = "url('images/cardBack.png')";
            flipBack(currentCard, saveLast);
          }, 250);
        }
      }
    });
  }

  generateCard() {
    const cardTemplate = document
      .querySelector(this._templateElement)
      .content.querySelector(".grid__card");

    const cardElement = cardTemplate.cloneNode(true);
    this._cardElement = cardElement;
    this._cardElement.id = this._name;
    this._cardElement.value = this._id;
    this._flipCard();

    return this._cardElement;
  }
}
