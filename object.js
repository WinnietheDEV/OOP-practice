// const userOneEmail = "1@email.com";
// const userTwoEmail = "2@email.com";

// function login(email) {
//   console.log(email, "is now online");
// }

// login(userOneEmail);

// const userOne = {
//   email: "nawin@email.com",
//   name: "Ryu",
// };

// // console.log(userOne.name);

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//     this.score = 0;
//   }

//   printInfo() {
//     console.log(`name ${this.name} - email ${this.email}`);
//   }

//   logIn() {
//     console.log(`${this.name} has logged in`);
//     return this;
//   }

//   logOut() {
//     console.log(`${this.name} has logged out with the score ${this.score}`);
//   }

//   updateScore() {
//     this.score++;
//     console.log(this.email, `score is now ${this.score}`);
//     return this;
//   }
// }

// const userOne = new User({ name: "win", email: "win@mail.com" });
// userOne.name = "win";

// userOne.printInfo();
// userOne.logIn().logOut();

// userOne.updateScore().logOut();

// class Staff extends User {
//   checkAuthority() {
//     console.log(`Able to set user data`);
//   }
// }

// const admin = new Staff({});

// admin.checkAuthority();

// class Car {
//   constructor(brand, model, color) {
//     this.brand = brand;
//     this.model = model;
//     this.color = color;
//   }
// }

// const firstCar = new Car("Toyoda", "ami111", "red");
// console.log(firstCar);

// class Cinema {
//   constructor(seat, pricePerSeat, round) {
//     this.seat = seat;
//     this.pricePerSeat = pricePerSeat;
//     this.round = round;
//   }

//   maximumIncome() {
//     return this.seat * this.pricePerSeat * this.round;
//   }

//   static vat = 0.07;
//   // static aboutCinema() {
//   //   console.log(`${this.seat}`);
//   // }
// }

// const cinema1 = new Cinema(20, 200, 8);

// console.log(cinema1.maximumIncome() * Cinema.vat + cinema1.maximumIncome());

// // Cinema.aboutCinema();
// class Color {
//   constructor(r, g, b) {
//     // Assign the RGB values as a property of `this`.
//     this.values = [r, g, b];
//   }

//   getRed() {
//     return this.values[0];
//   }

//   getGreen() {
//     return this.values[1];
//   }

//   getBlue() {
//     return this.values[2];
//   }

//   setRed(newColor) {
//     this.values[0] = newColor;
//   }
// }
// const color1 = new Color(255, 0, 0);
// console.log(color1);

// console.log(color1.getBlue());

// color1.setRed(100);

// console.log(color1.getRed());

// class Color {
//   // Declare: every Color instance has a private field called #values.
//   #values;
//   constructor(r, g, b) {
//     this.#values = [r, g, b];
//   }
//   getRed() {
//     return this.#values[0];
//   }
//   setRed(value) {
//     this.#values[0] = value;
//   }
// }

// const red = new Color(255, 0, 0);
// console.log(red.values[0]); // 255

// Challenge 1: Create a Reusable Class
// Task: Create a class Shape that has a method area() returning 0. Then create two subclasses, Rectangle and Circle, that extend Shape and override the area() method to calculate the area of the respective shape.

// Requirements:

// The Rectangle class should take width and height as parameters.
// The Circle class should take radius as a parameter.
// Ensure the code is clean and well-structured.

// class Shape {
//   constructor() {}

//   area() {
//     return 0;
//   }
// }

// class Rectangle extends Shape {
//   constructor(width, height) {
//     super();
//     this.width = width;
//     this.height = height;
//   }

//   area() {
//     return this.width * this.height;
//   }
// }

// const rectangleOne = new Rectangle(5, 10);
// console.log(rectangleOne.area());

// class Circle extends Shape {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }

//   area() {
//     return Math.PI * Math.pow(this.radius, 2);
//   }
// }

// const circle1 = new Circle(2);
// console.log(circle1.area());

// const circle = new Circle(7);
// console.log(circle.area()); // Output: approximately 153.94

// class EventEmitter {
//   constructor() {
//     this.event = {};
//   }

//   registerEvent(eventName, listener) {
//     this.event[eventName] = this.event[eventName]
//       ? this.event[eventName].push(listener)
//       : [listener];
//   }

//   emitEvent(eventName, ...args) {
//     if (this.event[eventName]) {
//       while (this.event[eventName].length > 0) {
//         const listener = this.event[eventName].shift();
//         listener(...args);
//       }
//     }
//   }
// }

// const eventEmitter = new EventEmitter();

// function sumNumber(...args) {
//   console.log(...args);
// }

// eventEmitter.registerEvent("click", sumNumber);

// console.log(eventEmitter);

// eventEmitter.emitEvent("click");
// console.log(eventEmitter);
// eventEmitter.registerEvent("click", sumNumber);
// console.log(eventEmitter);

// class Groceries {
//   #cart;
//   #priceThreshold;
//   #discountRate;
//   constructor(priceThreshold, discountRate) {
//     this.#cart = [];
//     this.#priceThreshold = priceThreshold || 1000;
//     this.#discountRate = discountRate || 0.1;
//   }

//   addItemToCart(itemToBeAdded) {
//     const itemIndex = this.#cart.findIndex(
//       (itemInCart) => itemInCart.itemName === itemToBeAdded.itemName
//     );

//     if (itemIndex > -1) {
//       const targetItem = this.#cart[itemIndex];
//       this.#cart[itemIndex] = {
//         ...targetItem,
//         quantity: targetItem.quantity + itemToBeAdded.quantity,
//       };
//     } else {
//       this.#cart.push(itemToBeAdded);
//       console.log(this.#cart);
//     }
//   }

//   removeItem(itemToBeRemoved) {
//     const cartAfterRemovingItem = this.#cart.filter(
//       (itemInCart) => itemInCart.itemName !== itemToBeRemoved.itemName
//     );
//     this.#cart = cartAfterRemovingItem;
//   }

//   listItemInCart() {
//     for (let i = 0; i < this.#cart.length; i++) {
//       console.log(
//         `${i + 1}. ${this.#cart[i].itemName} ${this.#cart[i].quantity}`
//       );
//     }
//   }

//   calculateTotal() {
//     let total;
//     for (let i = 0; i < this.#cart.length; i++) {
//       total += this.#cart[i].price * this.#cart[i].quantity;
//     }
//     return total;
//   }

//   calculateFinalPrice() {
//     const total = this.calculateTotal();
//     if (total > this.#priceThreshold) {
//       return total - total * this.#discountRate;
//     }
//   }
// }

// const groceryAtSuperMarketA = new Groceries(500, 0.1);

// groceryAtSuperMarketA.addItemToCart({
//   itemName: "apple",
//   quantity: 20,
//   price: 100,
// });
// groceryAtSuperMarketA.addItemToCart({
//   itemName: "orange",
//   quantity: 10,
//   price: 100,
// });
// groceryAtSuperMarketA.addItemToCart({ itemName: "apple", quantity: 20 });
// groceryAtSuperMarketA.listItemInCart();
// console.log(groceryAtSuperMarketA.calculateTotalPrice());
// groceryAtSuperMarketA.cart = [];

// class GroceryNotPrivate {
//   constructor() {
//     this.cart = ["a", "b"];
//   }
// }

// const groceryNotPrivate = new GroceryNotPrivate();
// groceryNotPrivate.cart = "rd";

// console.log(groceryNotPrivate);
