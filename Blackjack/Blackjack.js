let playerHandD = document.querySelector("#player-hand");
let dealerHandD = document.querySelector("#dealer-hand");
let dealButton = document.querySelector("#deal-button");
let hitButton = document.querySelector("#hit-button");
let standButton = document.querySelector("#stand-button");
let messages0 = document.querySelector("#messages");
let x = document.querySelector(".closebtn");
let plusTen = document.querySelector("#up10button");
let minusTen = document.querySelector("#down10button");
let betD = document.querySelector("#bet-amount");
let moneyD = document.querySelector("#player-money");

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

class Bet {
  constructor() {
    this.money = 500;
    this.bet = 0;
  }
  betwin() {
    this.money += 2 * this.bet;
    this.bet = 0;
    betD.textContent = this.bet;
    moneyD.textContent = this.money;
  }
  betloss() {
    this.bet = 0;
    betD.textContent = this.bet;
    moneyD.textContent = this.money;
  }
  betdraw() {
    this.money += this.bet;
    this.bet = 0;
    betD.textContent = this.bet;
    moneyD.textContent = this.money;
  }
}

const beto = new Bet();

plusTen.addEventListener("click", function() {
  if (beto.money == 0) {
    plusTen.disabled = true;
  } else {
    beto.bet += 10;
    beto.money -= 10;
    betD.textContent = beto.bet;
    moneyD.textContent = beto.money;
    minusTen.disabled = false;
    console.log(beto.bet);
  }
});

minusTen.addEventListener("click", function() {
  if (beto.bet == 0) {
    minusTen.disabled = true;
  } else {
    beto.bet -= 10;
    beto.money += 10;
    betD.textContent = beto.bet;
    moneyD.textContent = beto.money;
    console.log(beto.bet);
  }
});

if (beto.bet == 0) {
  minusTen.disabled = true;
}

betD.textContent = beto.bet;
moneyD.textContent = beto.money;

class Player {
  constructor() {
    this.hand = [];
    this.points = 0;
  }
  checkBust() {
    if (this.points > 21) {
      let bustMessage = document.createElement("div");
      bustMessage.className = "alert";
      bustMessage.innerHTML =
        '<span class="closebtn" onclick="this.parentElement.style.display=\'none\';">Play Again</span> <strong>You Busted!</strong>';
      messages0.appendChild(bustMessage);
      hitButton.disabled = true;
      standButton.disabled = true;
      beto.betloss();
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
      bustMessage.className = "victory";
      bustMessage.innerHTML =
        '<span class="closebtn" onclick="this.parentElement.style.display=\'none\';">Play Again</span> <strong>Dealer Busted - You Win!</strong>';
      messages0.appendChild(bustMessage);
      beto.betwin();
      reseto();
    } else if (this.points == player.points) {
      let bustMessage = document.createElement("div");
      bustMessage.className = "tie";
      bustMessage.innerHTML =
        '<span class="closebtn" onclick="this.parentElement.style.display=\'none\';">Play Again</span> <strong>Draw!</strong>';
      messages0.appendChild(bustMessage);
      beto.betdraw();
      reseto();
    } else if (this.points > player.points) {
      let bustMessage = document.createElement("div");
      bustMessage.className = "alert";
      bustMessage.innerHTML =
        '<span class="closebtn" onclick="this.parentElement.style.display=\'none\';">Play Again</span> <strong>Dealer Wins!</strong>';
      messages0.appendChild(bustMessage);
      beto.betloss();
      reseto();
    } else if (this.points < player.points) {
      let bustMessage = document.createElement("div");
      bustMessage.className = "victory";
      bustMessage.innerHTML =
        '<span class="closebtn" onclick="this.parentElement.style.display=\'none\';">Play Again</span> <strong>You Win!</strong>';
      messages0.appendChild(bustMessage);
      beto.betwin();
      reseto();
    }
  }
  hitLogic() {
    while (this.points < 17) {
      this.hand.push(deck1.deal());
      let img = document.createElement("img");
      img.setAttribute("src", dealer.hand[dealer.hand.length - 1]["imgFile"]);
      img.setAttribute("width", "100px");
      img.setAttribute("class", "hatch");
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
hitButton.disabled = true;
standButton.disabled = true;
dealButton.addEventListener("click", function(e) {
  console.log(e);
  plusTen.disabled = true;
  minusTen.disabled = true;
  dealButton.disabled = true;
  hitButton.disabled = false;
  standButton.disabled = false;
  player.hand.push(deck1.deal());
  player.hand.push(deck1.deal());
  dealer.hand.push(deck1.deal());
  dealer.hand.push(deck1.deal());

  for (let i = 0; i < player.hand.length; i++) {
    let img = document.createElement("img");
    img.setAttribute("src", player.hand[i].imgFile);
    img.setAttribute("width", "100px");
    img.setAttribute("class", "hatch");
    playerHandD.appendChild(img);
  }
  for (let i = 0; i < dealer.hand.length; i++) {
    if (i == 0) {
      let img = document.createElement("img");
      img.setAttribute("src", "images/JPEG/Gray_back.jpg");
      img.setAttribute("width", "100px");
      img.setAttribute("class", "hatch");
      img.setAttribute("id", "face-down");
      dealerHandD.appendChild(img);
    } else {
      let img = document.createElement("img");
      img.setAttribute("src", dealer.hand[i]["imgFile"]);
      img.setAttribute("width", "100px");
      img.setAttribute("class", "hatch");
      dealerHandD.appendChild(img);
    }
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
  img.setAttribute("class", "hatch");
  playerHandD.appendChild(img);
  calculatePoints(player);
  calculatePoints(dealer);
  calculatePoints(player);
  calculatePoints(dealer);
  player.checkBust();
});

standButton.addEventListener("click", function(e) {
  let facedownCard = document.querySelector("#face-down");
  facedownCard.setAttribute("src", dealer.hand[0]["imgFile"]);
  hitButton.disabled = true;
  standButton.disabled = true;
  calculatePoints(dealer);
  calculatePoints(dealer);
  console.log(dealer.points);
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
  } else if (hitButton.disabled == true) {
    dealerPoints.textContent = person.points;
  } else {
    dealerPoints.textContent = person.hand[1]["points"];
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
    plusTen.disabled = false;
    minusTen.disabled = false;
    dealButton.disabled = false;
    hitButton.disabled = false;
    standButton.disabled = false;
    deck1.reset();
    deck1.shuffle();
  });
}

if (beto.money == 0) {
  let bustMessage = document.createElement("div");
  bustMessage.className = "outofCash";
  bustMessage.innerHTML =
    '<span class="closebtn" onclick="this.parentElement.style.display=\'none\';">Play Again</span> <strong>You Ran Out Of Money, Goodbye</strong>';
  messages0.appendChild(bustMessage);
}

deck1.shuffle();
