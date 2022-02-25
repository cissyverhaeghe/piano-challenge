//generate 3 random numbers between 0 and 255

function getRandomColor() {
  let randomNumbers = [];
  let numbers = 3;
  while (numbers--) {
    randomNumbers.push(Math.floor(Math.random() * 256));
  }
  return `rgb(${randomNumbers[0]}, ${randomNumbers[1]}, ${randomNumbers[2]})`;
}

class Tile {
  constructor(holder, color) {
    this.holder = holder;
    this.color = color;
    this.htmlRef = this.generateInitialHTML();
    this.setUpEvents();
    this.setBackgroundColor();
  }

  generateInitialHTML() {
    this.holder.insertAdjacentHTML("beforeend", `<div class="tile"></div>`);
    return this.holder.querySelector(`.tile:last-child`);
  }

  setBackgroundColor() {
    this.htmlRef.style.background = this.color;
  }

  setStyling() {
    this.htmlRef.style.height = "80%";
  }

  setUpEvents() {
    this.htmlRef.onclick = () => {
      this.setStyling();
      new Tile(holder, getRandomColor());
    };
  }
}

const holder = document.querySelector("body");
const color = getRandomColor();

const tile = new Tile(holder, color);
console.log(tile.bg);
