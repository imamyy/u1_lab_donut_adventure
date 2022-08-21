class Denizen {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
  announceHealth() {
    console.log(this.health);
  }
}

class Hero extends Denizen {
  constructor(name) {
    super(name);
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
  battle(enemy) {
    let attack = Object.keys(this.objects)[Math.floor(Math.random() * 2)];
    let hitpoint = this.objects[attack];
    console.log(attack + ": " + hitpoint);
    enemy.health -= hitpoint;
    console.log(
      `${enemy.name} got hit by ${attack}! His health is now at ${enemy.health}`
    );
  }
}
const donut = new Hero("Dougie");

class Enemy extends Denizen {
  constructor(name) {
    super(name);
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
  battle(enemy) {
    let attack = Object.keys(this.objects)[Math.floor(Math.random() * 2)];
    let hitpoint = this.objects[attack];
    console.log(attack + ": " + hitpoint);
    enemy.health -= hitpoint;
    console.log(
      `${enemy.name} got hit by ${attack}! His health is now at ${enemy.health}`
    );
  }
}
const pizza = new Enemy("Pizza Rat");

while (true) {
  donut.talkSass();
  pizza.talkSmack();
  donut.battle(pizza);
  if (pizza.health <= 0) {
    console.log("Donut is the winner!");
    break;
  }
  pizza.battle(donut);
  if (donut.health <= 0) {
    console.log("Pizza is the winner");
    break;
  }
}
