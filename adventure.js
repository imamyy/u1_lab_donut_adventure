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
    console.log(this.catchPhrases[Math.floor(Math.random() * 2)]);
  }
  announceHealth() {
    console.log(this.health);
  }
  battle(enemy) {
    console.log("I'm ready to rumble");
    const attack =
      this.objects[Object.keys(this.objects)[Math.floor(Math.random() * 2)]];
    console.log(attack);
    if (attack === 5) {
      enemy.health -= 5;
      console.log(
        `PizzaRat got hit by sprinkleSpray! His health is now at ${enemy.health}`
      );
    } else if (attack === 10) {
      enemy.health -= 10;
      console.log(
        `PizzaRat got hit by sugarShock! His health is now at ${enemy.health}`
      );
    }
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
    console.log(this.catchPhrases[Math.floor(Math.random() * 2)]);
  }
  announceHealth() {
    console.log(this.health);
  }
  battle(enemy) {
    console.log("i'm gonna flatten you like a slice of pepperoni!");
    const attack =
      this.objects[Object.keys(this.objects)[Math.floor(Math.random() * 2)]];
    console.log(attack);
    if (attack === 5) {
      enemy.health -= 5;
      console.log(
        `DonutDougie got hit by pepperoniStars! His health is now at ${enemy.health}`
      );
    } else if (attack === 10) {
      enemy.health -= 10;
      console.log(
        `PizzaRat got hit by cheeseGrease! His health is now at ${enemy.health}`
      );
    }
  }
}
const pizza = new Enemy("Pizza Rat");

donut.talkSass();
pizza.talkSmack();
donut.announceHealth();
pizza.announceHealth();
donut.battle(pizza);
pizza.battle(donut);
donut.announceHealth();
pizza.announceHealth();
