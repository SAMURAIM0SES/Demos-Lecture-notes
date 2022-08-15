class Characters {
  constructor(name, age, height, weight) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }
  display() {
    console.log(this);
  }
}

class Races extends Characters {
  constructor(name, age, height, weight, race = "Human", type = "none") {
    super(name, age, height, weight);
    this.race = race;
    this.type = type;
  }
  battlecry() {
    switch (this.race) {
      case "Giant":
        console.log(
          `My name is ${this.name}, RAWR, THESE ARE MY LEGS! FEAR ME I AM A ${this.type} ${this.race}`
        );

        break;

      case "Human":
        console.log(`Whats the deal its ${this.name} the D`);
        break;

      case "Dwarf":
        console.log(
          `My name is ${this.name} the ${this.type} ${this.race}, It is giant popping time`
        );
        break;
      default:
        console.log("oops I did it again");
        break;
    }
  }
}

const Tanner = new Races("Tanner", 32, "3'11", 250, "Dwarf", "Drunken");
const Mike = new Races("Mike", 10, "7'1", 350, "Giant", "Stone");
const Darius = new Races("Darius", 24, "6'", 184);

Tanner.battlecry();
Mike.battlecry();
Darius.battlecry();
