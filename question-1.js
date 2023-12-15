"use strict";

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 5, d: 6 };

const newObj = Object.assign(obj1, obj2);
// const newObj = { ...obj1, ...obj2 };

console.log(obj1 === newObj);

// const person = {
//   personName: "John",
//   age: 999,
//   country: "United States",
//   countryCode: "US",
// };

// for (const key in person) {
//   if (Object.hasOwnProperty.call(person, key)) {
//     const element = person[key];
//     console.log(element);
//   }
// }

// const fruits = ["apple", "banana", "orange"];

// for (const [key, value] of fruits.entries()) {
//   console.log(key);
//   console.log(value);
// }

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// console.log(parseInt("10+10"));
// console.log(parseInt("7bdfdhf"));

// function getMessage() {
//   throw "Hello world!";
// }

// function sayHello() {
//   try {
//     const data = getMessage();
//     console.log("Worked: ", data);
//   } catch (error) {
//     console.log("An error occurred: ", error);
//   }
// }

// sayHello();

// console.log("20" + 30 + 10);
// console.log(20 + 30 + "10");

// const string = [..."Apple"];
// console.log(string);

// (() => {
//   let x, y;

//   try {
//     throw new Error();
//   } catch (x) {
//     (x = 1), (y = 2);
//     console.log("x", x);
//   }

//   console.log("x", x);
//   console.log("y", y);
// })();

// const numbers = [1, 2, 3];
// numbers[10] = 11;

// console.log(numbers);

// console.log(typeof typeof 1);

// function sayHi() {
//   return (() => "Hello")();
// }
// console.log(typeof sayHi());

// const language = { name: "React JS" };

// function getLang(version) {
//   return `${this.name} version ${version}`;
// }

// console.log(getLang.call(language, 18));
// console.log(getLang.bind(language, 18));
// console.log(getLang.apply(language, [18]));

// String.prototype.youAreAmazing = () => {
//   return "You are amazing";
// };

// const str = "This is awesome";
// console.log(str.youAreAmazing());

// for (let i = 1; i < 5; i++) {
//   if (i === 3) continue;

//   console.log(i);
// }

// const obj = { a: 1, b: 2, c: 3, d: 4, a: 5, b: 6 };
// console.log(obj);

// var num = 8;
// var num = 10;

// console.log(num);

// function getType(...args) {
//   console.log(typeof args);
// }

// getType(108, 108, 16);

// function checkAge(data) {
//   if (data === { age: 18 }) {
//     console.log("You are adult");
//   } else if (data == { age: 18 }) {
//     console.log("You are still in adult");
//   } else {
//     console.log("no age specified");
//   }
// }

// checkAge({ age: 18 });

// function getSummery(one, two, three, four) {
//   console.log(one);
//   console.log(two);
//   console.log(three);
//   console.log(four)
// }

// const firstName = "John";
// const age = 999;
// const country = "US";

// getSummery`${firstName}, age is ${age}, live in ${country}`;

// function add(a, b) {
//   return a + b;
// }
// console.log(add(10, '20'));

// function Human(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const MrX = new Human("Mr", "X");
// const Rock = Human("The", "Rock");

// console.log(MrX);
// console.log(Rock);

// function Human(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const member = new Human("Jonas", "Schmedtmann");
// Human.prototype.getFullName = function () {
//   return this.firstName + " " + this.lastName;
// };

// console.log(member.getFullName());

// console.log(member.getFullName());

// function increaseCounter() {
//   if (!increaseCounter.count) {
//     increaseCounter.count = 1;
//   } else {
//     increaseCounter.count++;
//   }
//   console.log(increaseCounter.count);
// }

// increaseCounter();
// increaseCounter();
// increaseCounter();

// function showModal() {
//   console.log(showModal.timeout);
// }

// showModal();
// showModal.timeout = 200;

// showModal.timeout = 100;
// showModal();

// let message;
// massage = { data: [24] };

// console.log(massage);

// const a = 108;
// const b = new Number(108);
// const c = 108;

// // console.log(typeof a);
// // console.log(typeof b);
// // console.log(typeof c);

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

// let a = { greeting: "Hi" };
// // let z = a;
// // let z = { ...a };
// // let z = Object.assign({}, a);

// // * for nested object structure
// let z = structuredClone(a);
// z.greeting = "Bye";

// console.log(a.greeting);

// const code = {
//   type: "web",
// };

// const reactJS = {
//   name: "js",
//   web: true,
// };

// console.log(reactJS[code.type]);

// console.log(+true);
// console.log(!"Javascript");

// const income = {
//   skills: 108,
//   monthly() {
//     return this.skills * 108;
//   },
//   yearly: () => 888 * this.skills,
// };

// console.log(income.monthly());
// console.log(income.yearly());

// for (var i = 0; i < 4; i++) {
//   setTimeout(() => console.log(i), 5);
// }

// for (let i = 0; i < 4; i++) {
//   setTimeout(() => console.log(i), 5);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// var a = 10;
// let b = 20;
// const c = 30;

// function showData() {
//   console.log("Variable name is", name);
//   console.log("Variable name is", age);

//   var name = "John";
//   let age = 999;
// }

// showData();

// const myObject = { a: 1 };
// console.log(myObject.toString());

// * using object as key

// const a = {},
//   b = { key: "b" },
//   c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

// (function () {
//   const a = (b = 3);
// })();

// console.log("a defined? " + typeof a);
// console.log("b defined? " + typeof b);

// let user = { name: "Leo Messi" };
// const userList = [user];
// user = null;

// console.log(user);
// console.log(userList);
