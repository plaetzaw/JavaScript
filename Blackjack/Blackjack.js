let playerHandD = document.querySelector("#player-hand");
let dealerHandD = document.querySelector("#dealer-hand");
let dealButton = document.querySelector("#deal-button");
let hitButton = document.querySelector("#hit-button");
let standButton = document.querySelector("#stand-button");
let messages0 = document.querySelector("#messages");
let x = document.querySelector(".closebtn");

console.log(dealButton);
console.log(dealerHandD);
console.log(playerHandD);
console.log(hitButton);
console.log(standButton);
class Deck {
  constructor() {
    this.deck = [];
    this.reset();
    this.shuffle();
  }
  reset() {
    this.deck = [];
    const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
    const values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "King", "Queen"];
    for (let suit in suits) {
      for (let value in values) {
        this.deck.push({
          points: values[value],
          suit: suits[suit],
          imgFile: "images/JPEG/" + values[value] + suits[suit][0] + ".jpg"
        });
      }
    }
  }

  shuffle() {
    const { deck } = this;
    for (var i = deck.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }
    return this;
  }
  deal() {
    return this.deck.pop();
  }
}

class Player {
  constructor() {
    this.hand = [];
    this.points = 0;
  }
  checkBust() {
    if (this.points > 21) {
      let bustMessage = document.createElement("div");
      document.createElement("span");
      bustMessage.classname = "alert";
      bustMessage.innerHTML =
        '<span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span><strong>YOU BUSTED</strong>';
      messages0.appendChild(bustMessage);
      reseto();
    }
  }
}

class Dealer {
  constructor() {
    this.hand = [];
    this.points = 0;
  }

  checkBust() {
    if (this.points > 21) {
      let bustMessage = document.createElement("div");
      bustMessage.classname = "alert success";
      bustMessage.innerHTML =
        '<span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span> <strong>"Dealer BUSTED - You WIN!"</strong>';
      messages.appendChild(bustMessage);
      reseto();
    } else if (this.points == player.points) {
      let bustMessage = document.createElement("div");
      bustMessage.classname = "alert warning";
      bustMessage.innerHTML =
        '<span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span><strong>DRAW</strong>';
      messages0.appendChild(bustMessage);
      reseto();
    } else if (this.points > player.points) {
      let bustMessage = document.createElement("div");
      bustMessage.classname = "alert";
      bustMessage.innerHTML =
        '<span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span><strong>Dealer Wins - You Lose!</strong>';
      messages0.appendChild(bustMessage);
      reseto();
    } else if (this.points < player.points) {
      let bustMessage = document.createElement("div");
      bustMessage.classname = "alert success";
      bustMessage.innerHTML =
        '<span class="closebtn" onclick="this.parentElement.style.display=\'none\';">&times;</span><strong>You Win!</strong>';
      messages0.appendChild(bustMessage);
      reseto();
    }
  }
  hitLogic() {
    while (this.points < 17) {
      this.hand.push(deck1.deal());
      let img = document.createElement("img");
      img.setAttribute("src", dealer.hand[dealer.hand.length - 1]["imgFile"]);
      img.setAttribute("width", "100px");
      dealerHandD.appendChild(img);
      calculatePoints(this);
      calculatePoints(this);
    }
    calculatePoints(this);
    calculatePoints(this);
    calculatePoints(player);
    this.checkBust();
  }
}
const player = new Player();
const dealer = new Dealer();
const deck1 = new Deck();
dealButton.addEventListener("click", function(e) {
  console.log(e);
  player.hand.push(deck1.deal());
  player.hand.push(deck1.deal());
  dealer.hand.push(deck1.deal());
  dealer.hand.push(deck1.deal());

  for (let i = 0; i < player.hand.length; i++) {
    let img = document.createElement("img");
    img.setAttribute("src", player.hand[i].imgFile);
    img.setAttribute("width", "100px");
    playerHandD.appendChild(img);
  }
  for (let i = 0; i < dealer.hand.length; i++) {
    let img = document.createElement("img");
    img.setAttribute("src", dealer.hand[i]["imgFile"]);
    img.setAttribute("width", "100px");
    dealerHandD.appendChild(img);
  }
  calculatePoints(player);
  console.log(player.points);
  calculatePoints(dealer);
  console.log(dealer.points);
});

hitButton.addEventListener("click", function(e) {
  player.hand.push(deck1.deal());
  let img = document.createElement("img");
  img.setAttribute("src", player.hand[player.hand.length - 1].imgFile);
  img.setAttribute("width", "100px");
  playerHandD.appendChild(img);
  calculatePoints(player);
  calculatePoints(dealer);
  calculatePoints(player);
  calculatePoints(dealer);
  player.checkBust();
});

standButton.addEventListener("click", function(e) {
  dealer.hitLogic();
});

function calculatePoints(person) {
  let playerPoints = document.querySelector("#player-points");
  let dealerPoints = document.querySelector("#dealer-points");
  let pointsC = 0;
  for (let i = 0; i < person.hand.length; i++) {
    switch (person.hand[i]["points"]) {
      case "Ace":
        if (pointsC <= 10) {
          pointsC += 11;
        } else if (person.points == 21) {
          pointsC += 11;
        } else if (person.points > 21) {
          pointsC += 1;
        } else {
          pointsC += 1;
        }
        break;
      case "King":
        pointsC += 10;
        break;
      case "Queen":
        pointsC += 10;
        break;
      case "Jack":
        pointsC += 10;
        break;
      default:
        pointsC += person.hand[i]["points"];
        break;
    }
    person.points = pointsC;
  }
  if (person == player) {
    playerPoints.textContent = person.points;
  } else {
    dealerPoints.textContent = person.points;
  }
}

function reseto() {
  let x = document.querySelector(".closebtn");
  let playerPoints = document.querySelector("#player-points");
  let dealerPoints = document.querySelector("#dealer-points");
  x.addEventListener("click", function(e) {
    player.points = 0;
    dealer.points = 0;
    player.hand = [];
    dealer.hand = [];
    playerHandD.innerHTML = "";
    dealerHandD.innerHTML = "";
    playerPoints.innerHTML = "";
    dealerPoints.innerHTML = "";
    messages0.innerHTML = "";
    deck1.reset();
    deck1.shuffle();
  });
}
deck1.shuffle();
