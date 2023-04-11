// OBJECT INHERITENCE USING ES6:
function Animal (name, energy) {
    this.name = name;
    this.energy = energy;
  }
  
  Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  }
  
  Animal.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
  }
  
  Animal.prototype.play = function (length) {
    console.log(`${this.name} is playing.`);
    this.energy -= length;
  }
  
  // class subClass extends BaseClass
  class Dog extends Animal {
    constructor (name, energy, breed) {
      super(name, energy) // chama a constructor function da classe que estamos extending (Animal)
      
      this.breed = breed;
    }
    // bark () {
    //   console.log('Woof Woof');
    //   this.energy -= .1;
    // }
  }
  Dog.prototype.bark = function() {
    console.log(`Woof Woof`);
    this.energy -= 1;
  }
  
  const leo = new Dog('Leo', 7, 'Goldendoodle');
  // leo.name; // Leo
  // leo.energy; // 7
  leo.eat(4); // Leo is eating.
  leo.bark(); // Woof Woof