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