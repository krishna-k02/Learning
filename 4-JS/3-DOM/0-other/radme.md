🧱 1. Introduction to OOP in JavaScript
Concepts:

What is OOP?

Procedural vs Object-Oriented Programming

Four Pillars: Abstraction, Encapsulation, Inheritance, Polymorphism

Example:

js
Copy
Edit
// Procedural
let car1 = {
  brand: "Toyota",
  start: function() {
    console.log("Car started");
  }
};

// OOP
class Car {
  constructor(brand) {
    this.brand = brand;
  }
  start() {
    console.log(`${this.brand} started`);
  }
}
🧩 2. Objects and Object Literals
Concepts:

Creating objects

Accessing properties

Modifying properties

Methods inside objects

Example:

js
Copy
Edit
const person = {
  name: "Alice",
  age: 25,
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};
person.greet(); // Hi, I'm Alice
🏗️ 3. Constructor Functions
Concepts:

Function as a constructor

new keyword

Adding methods

Example:

js
Copy
Edit
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hi, I'm ${this.name}`);
  };
}
const p1 = new Person("John", 30);
p1.greet();
🧬 4. Prototypes and Inheritance
Concepts:

__proto__

Object.create()

Prototype chain

Inheriting properties/methods

Example:

js
Copy
Edit
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(`${this.name} makes a noise`);
};

let dog = new Animal("Dog");
dog.speak(); // Dog makes a noise
🧱 5. Classes (ES6)
Concepts:

Class syntax

Constructor method

Method definitions

Creating instances

Example:

js
Copy
Edit
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise`);
  }
}
const cat = new Animal("Cat");
cat.speak(); // Cat makes a noise
🪜 6. Inheritance in Classes
Concepts:

extends keyword

super() method

Method overriding

Example:

js
Copy
Edit
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks`);
  }
}
const dog = new Dog("Buddy");
dog.speak(); // Buddy barks
🔐 7. Encapsulation and Private Fields
Concepts:

Using closures for private variables

ES2022 private fields (# syntax)

Example:

js
Copy
Edit
class Counter {
  #count = 0;

  increment() {
    this.#count++;
    console.log(this.#count);
  }
}
const counter = new Counter();
counter.increment(); // 1
🎭 8. Polymorphism
Concepts:

Method overriding

Same method, different behavior in child classes

Example:

js
Copy
Edit
class Shape {
  draw() {
    console.log("Drawing a shape");
  }
}
class Circle extends Shape {
  draw() {
    console.log("Drawing a circle");
  }
}
const shape = new Circle();
shape.draw(); // Drawing a circle
🧠 9. Abstraction
Concepts:

Hide internal logic

Show only necessary parts to users

Example:

js
Copy
Edit
class Database {
  #connect() {
    console.log("Connecting to DB...");
  }
  runQuery() {
    this.#connect();
    console.log("Running query...");
  }
}
const db = new Database();
db.runQuery();
🧰 10. Mixins and Composition (Advanced)
Concepts:

Multiple behavior reuse

Avoiding deep inheritance

Example:

js
Copy
Edit
let swimmer = {
  swim() {
    console.log("Swimming");
  }
};
let flyer = {
  fly() {
    console.log("Flying");
  }
};

function createSuperHero(name) {
  return Object.assign({ name }, swimmer, flyer);
}
const hero = createSuperHero("AquaBird");
hero.fly();
hero.swim();