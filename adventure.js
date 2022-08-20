class Hero {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.objects = {
      sprinkleSpray: 5,
      sugarShock: 10,
    };
    this.catchPhrases = [
      "i'm fresher than day old pizza",
      "you can't count my calories",
    ];
  }
  talkSass() {
    console.log(this.catchPhrases[Math.random() * 2]);
  }
  announceHealth() {
    console.log(this.health);
  }
  battle() {
    console.log("I'm ready to rumble");
  }
}
const donut = new Hero("Dougie");

class Enemy {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.objects = {
      pepperoniStars: 5,
      cheeseGrease: 10,
    };
    this.catchPhrases = [
      "i'm youtube famous",
      "i'm more dangerous than an uncovered sewer",
    ];
  }
  talkSmack() {
    console.log(this.catchPhrases[Math.random() * 2]);
  }
  announceHealth() {
    console.log(this.health);
  }
  battle() {
    console.log("i'm gonna flatten you like a slice of pepperoni!");
  }
}
const pizza = new Enemy("Pizza Rat");
