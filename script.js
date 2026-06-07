const cards = document.querySelector(".cards");
const allCards = document.querySelectorAll(".card");
const leftBtn = document.querySelector(".left-scroll");
const rightBtn = document.querySelector(".right-scroll");

let counter = 0;
const cardWidth = allCards[0].offsetWidth + 16;
const maxIndex = allCards.length - 1;

leftBtn.style.display = "none";

const updateSlider = () => {
  cards.style.transform = `translateX(-${counter * cardWidth}px)`;
  leftBtn.style.display = counter === 0 ? "none" : "block";
  rightBtn.style.display = counter >= maxIndex ? "none" : "block";
};

rightBtn.addEventListener("click", () => {
  if (counter < maxIndex) counter++;
  updateSlider();
});

leftBtn.addEventListener("click", () => {
  if (counter > 0) counter--;
  updateSlider();
}); 
const input = document.querySelector("input");
const teas = [
  "chai tea",
  "black tea",
  "iced tea",
  "herbal tea",
  "green tea"
];

let teaIndex = 0;
let charIndex = 0;
let isDeleting = false;

const type = () => {
  const currentTea = teas[teaIndex];

  if (!isDeleting) {
    // typing forward
    input.placeholder = currentTea.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentTea.length) {
      // finished typing, wait then delete
      isDeleting = true;
      setTimeout(type, 1000); // pause before deleting
      return;
    }
  } else {
    // deleting
    input.placeholder = currentTea.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      // finished deleting, move to next tea
      isDeleting = false;
      teaIndex = (teaIndex + 1) % teas.length; // loop back to start
    }
  }

  setTimeout(type, isDeleting ? 50 : 100); // delete faster than type
};

type();
const decks = document.querySelector(".decks");
const allDecks = document.querySelectorAll(".deck");
const lBtn = document.querySelector(".lscroll");
const rBtn = document.querySelector(".rscroll");

let deckCounter = 0;
const deckWidth = allDecks[0].offsetWidth + 10; // card width + gap (gap is 10px)
const deckMaxIndex = allDecks.length - 1;

lBtn.style.display = "none";

const updateDeckSlider = () => {
  decks.style.transform = `translateX(-${deckCounter * deckWidth}px)`;
  lBtn.style.display = deckCounter === 0 ? "none" : "block";
  rBtn.style.display = deckCounter >= deckMaxIndex ? "none" : "block";
};

rBtn.addEventListener("click", () => {
  if (deckCounter < deckMaxIndex) deckCounter++;
  updateDeckSlider();
});

lBtn.addEventListener("click", () => {
  if (deckCounter > 0) deckCounter--;
  updateDeckSlider();
});
const boxSlider = document.querySelector(".box-slider");
const lsBtn = document.querySelector(".ls");
const rsBtn = document.querySelector(".rs");

let boxIndex = 0;
const totalBoxes = 4;

const updateBoxSlider = () => {
  boxSlider.style.transform = `translateX(-${boxIndex * 100}%)`;
  boxSlider.style.transition = "transform 0.5s ease";
};

rsBtn.addEventListener("click", () => {
  boxIndex = (boxIndex + 1) % totalBoxes;
  updateBoxSlider();
});

lsBtn.addEventListener("click", () => {
  boxIndex = (boxIndex - 1 + totalBoxes) % totalBoxes;
  updateBoxSlider();
});