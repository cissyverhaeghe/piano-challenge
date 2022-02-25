const holder = document.querySelector("body");
const playbutton = document.querySelector(".play");

class Tile {
  constructor(holder) {
    this.holder = holder;
    this.color = this.getRandomColor();
    this.htmlRef = this.generateInitialHTML();
    this.clicked = false;
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
    this.holder.style.background = this.color;
  }

  setUpEvents() {
    this.htmlRef.onclick = () => {
      this.setStyling();
      new Tile(holder, getRandomColor());
    };
  }

  getRandomColor() {
    let randomNumbers = [];
    let numbers = 3;
    while (numbers--) {
      randomNumbers.push(Math.floor(Math.random() * 256));
    }
    return `rgb(${randomNumbers[0]}, ${randomNumbers[1]}, ${randomNumbers[2]})`;
  }
}

const allTiles = [];

holder.onclick = () => {
  allTiles.push(new Tile(holder));
};

playbutton.onclick = () => {
  let teller = 0;
  setInterval(function () {
    if (teller === allTiles.length) {
      console.log(teller);
      allTiles[teller - 1].htmlRef.style.height = "50%";
      teller = 0;
    }
    allTiles[teller].htmlRef.style.height = "80%";
    holder.style.background = allTiles[teller].color;
    if (teller >= 1) {
      allTiles[teller - 1].htmlRef.style.height = "50%";
    }
    teller++;
  }, 1000);
};
