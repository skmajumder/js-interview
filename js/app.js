// 'use strict'

// const num = 70;

// // * old version
// const numWithZero = num < 10 ? `0${num}` : num;

// // * new version
// const numWithZeroNew = Number(num.toString().padStart(2, 0));

// console.log(numWithZero);
// console.log(numWithZeroNew);

// const stringArr = ["HTML", "CSS", "Javascript", "Node js"];

// console.log(stringArr.includes("script"));
// console.log("Javascript".includes("script"));

// const num = 100;

// console.log(num.toString());
// console.log((100).toString());

// let num = "20";
// let num = 20;

// console.log(num + "20");
// console.log(++num);

// function magic() {
//   return (cosmic = 1000);
// }

// console.log(magic());
// console.log(cosmic);

// let person = { name: "John" };
// const member = [person];

// person = null;

// console.log(member);

// const isNumberEual = 108 == ["108"];
// console.log(isNumberEual);

// const num = ["108"].toString();
// console.log(Number(num));

// console.log([1, 10, 3, 20].sort((a, b) => a - b));

// const arr = [[[[[[0], [1, [2, 5, 6, 1], [[[3, [4, [5]]]]]]]]]]];

// console.log(arr.flat(Infinity));

// function customArrayFlatten(arr) {
//   let resultArray = [];

//   function flatterHelper(arr) {
//     const arrLength = arr.length;
//     console.log(arrLength);

//     for (let i = 0; i < arrLength; i++) {
//       if (Array.isArray(arr[i])) {
//         flatterHelper(arr[i]);
//       } else {
//         resultArray.push(arr[i]);
//       }
//     }
//   }

//   flatterHelper(arr);

//   return resultArray;
// }
// const flatArr = customArrayFlatten(arr);

// console.log(flatArr);

// console.log(parseInt("108"));
// console.log(parseInt("108*16"));
// console.log(parseInt("108Wonders"));
// console.log(parseInt("*108*16"));
// console.log(parseInt("Wonders108"));

// console.log("JS" == "Js");
// console.log(-0 == 0);

// let a = 100;
// let b = 200;

// [a, b] = [b, a];

// console.log(a, b);

// const SALARY = 1_2_0000;
// console.log(SALARY);

// function myFunc({ x, y, z }) {
//   console.log(x, y, z);
// }

// myFunc(1, 2, 3);
// myFunc({ x: 1, y: 2, z: 3 });

// const userName = "Jonas Smith";
// age = 999;

// console.log(userName);
// console.log(age);

// console.log(window);

// // console.log(delete userName);
// // console.log(delete age);

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// for (var i = 0; i < 10; i++) {
//   (function (counter) {
//     console.log(counter);
//   })(i);
// }

// const num = [10, 20, 30, 40];
// const newVar = { ...num };

// console.log(newVar);

// const obj = { 0: 10, 1: 20, 2: 30, 3: 40 };
// const newArr = [...obj];

// console.log(newArr);

// (function () {
//   var a = (b = 3);
// })();

// console.log(typeof a);
// console.log(typeof b);

// const a = {},
//   b = { key: "b" },
//   c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);
// console.log(a);

// function showData() {
//   console.log("variable name is " + name);
//   console.log("variable name is " + age);

//   var name = "Jonas Smith";
//   let age = 999;
// }

// showData();

// for (var i = 0; i < 4; i++) {
//   setTimeout(() => console.log(i), 5)
// }

// for (let i = 0; i < 4; i++) {
//   setTimeout(() => console.log(i), 5)
// }

// const income = {
//   skills: 108,
//   monthly () {
//     return this.skills * 108
//   },
//   yearly: () => 888 * this.skills
// }

// console.log(income.monthly())
// console.log(income.yearly())

// const code = {
//   type: 'web'
// }

// const reactJS = {
//   name: 'JS',
//   web: true
// }

// console.log(reactJS[code.type])
// console.log(reactJS[reactJS['type']])

// const a = { greetings: 'Hi' }
// const z = a

// z.greetings = 'Hello'
// console.log(a.greetings)

// let message
// masage = { data: [24] }
// console.log(masage)

// function showModal() {
//   console.log(showModal.timeout)
// }

// showModal()
// showModal.timeout = 200

// showModal.timeout = 100
// showModal()

// function Human(firstName, lastName) {
//   this.firstName = firstName
//   this.lastName = lastName
// }

// const member = new Human('Frontend', 'Master')

// Human.prototype.getFullName = function () {
//   return this.firstName + ' ' + this.lastName
// }

// console.log(member.getFullName())

// function Human(firstName, lastName) {
//   this.firstName = firstName
//   this.lastName = lastName
// }

// const MrX = new Human('Mr.', 'X')
// const Rock = Human('The', 'Rock')

// console.log(MrX)
// console.log(Rock)

// function mul(a, b) {
//   return a * b
// }

// console.log(mul(10, '10'))

// function getSummary(one, two, three) {
//   console.log(one)
//   console.log(two)
//   console.log(three)
// }

// const fname = 'Vasuki'
// const age = 878

// getSummary`Hi ${fname} age is ${age} and live in BD`

// function getType (...args) {
//   console.log(...args)
//   console.log(typeof args)
// }

// getType(108)

// var num = 8
// var num = 10

// console.log(num)

// const obj = { 1: 'a', 2: 'b', 3: 'c', 4: 'd' }
// const sets = new Set([1, 2, 3, 4])

// console.log(Object.prototype.hasOwnProperty.call(obj, '1'))
// console.log(Object.prototype.hasOwnProperty.call(obj, 1))

// console.log(sets.has('1'))
// console.log(sets.has(1))

// let obj = { a: "1", b: "2", c: "3", a: "4" };

// console.log(obj);

// for (let i = 0; i < 8; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.makeSound = function () {
//   console.log("Generic Animal Sound");
// };

// const dog = new Animal("Buddy");

// dog.fetchBuddy = function () {
//   console.log(`${this.name} is fetching`);
// };

// dog.fetchBuddy();

// const lang = { name: "React JS" };

// function getLib(ver) {
//   return `${this.name} version ${ver}`;
// }

// const bindVer = getLib.bind(lang, 18);

// console.log(getLib.call(lang, 18));
// console.log(getLib.apply(lang, [18]));
// console.log(bindVer());

// function sayHi() {
//   return (() => 0)();
// }

// console.log(typeof sayHi());

// console.log(typeof typeof 1);

// let numbers = [1, 2, 3];
// numbers[10] = 11;

// console.log(numbers);

// (() => {
//   let x, y;

//   try {
//     throw new Error();
//   } catch (x) {
//     (x = 1), (y = 2);
//     console.log(x);
//   }

//   console.log(x);
//   console.log(y);
// })();

// let x = "global";
// function example() {
//   let x = "local";
//   console.log(x);
// }

// example();
// console.log(x);

// console.log([..."Apple"]);
// console.log(20 + 30 + "10");

// function getMessage() {
//   throw "Hello world";
// }

// function sayHello() {
//   try {
//     const data = getMessage();
//     console.log("worked!", data);
//   } catch (e) {
//     console.log("an error occurred:", e);
//   }
// }

// sayHello();

// console.log(parseInt("10+2"));
// console.log(parseInt("7AM"));

// const arr = [1, 2, 3, 4];

// const newArr = arr.map((num) => {
//   if (num > 0) return;

//   return num * 2;
// });

// console.log(newArr);

// function getInfo(member, year) {
//   member.name = "FrontendMaster";
//   year = "2024";
// }

// const person = { name: "Dev" };
// const birthYear = "9999";

// getInfo(person, birthYear);

// console.log(person);
// console.log(birthYear);

// const Hero = function () {
//   this.make = "Bhagat Singh";
//   return { make: "Vivekanand" };
// };

// const myHero = new Hero();
// console.log(myHero.make);

// function OuterFunction() {
//   this.outerValue = 10;

//   // Regular function
//   this.regularFunction = function () {
//     setTimeout(function () {
//       console.log("Regular Function:", this.outerValue);
//     }, 1000);
//   };

//   // Arrow function
//   this.arrowFunction = () => {
//     setTimeout(() => {
//       console.log("Arrow Function:", this.outerValue); // Outputs: 10
//     }, 1000);
//   };
// }

// const outerObj = new OuterFunction();

// outerObj.regularFunction();
// outerObj.arrowFunction();

// (() => {
//   let x = (y = 10);
// })();

// console.log(typeof x);
// console.log(typeof y);

// const obj = { a: "Mr.X", b: 99 };
// const dat = { c: true, ...obj };

// console.log(dat);

// const obj = { b: "new" };

// Object.defineProperty(obj, "a", { value: "char" });
// // Object.defineProperty(obj, "a", { value: "char", enumerable: true });

// console.log(obj.a);
// console.log(Object.keys(obj));

// const box = { x: 10, y: 20 };
// Object.freeze(box);

// const shape = box;
// shape.x = 100;
// shape.y = 20;

// console.log(shape);

// function addItem(item, list) {
//   return list.push(item);
// }

// const result = addItem("cat", ["bird", "cow"]);
// console.log(result);

// const userName = "Mr.X";
// age = 20;

// console.log(delete userName);
// console.log(delete age);

// function* generatorFn(i) {
//   console.log("A");
//   yield i;
//   console.log("B");
//   yield i * 2;
// }

// const gen = generatorFn(10);

// console.log(gen.next().value);
// console.log(gen.next().value);

// async function getData() {
//   return await Promise.resolve("💎");
// }

// const data = getData();
// data.then((result) => console.log({ result }));

// const { fName: feDEV } = { fName: "Mr.X" };
// console.log(feDEV);

// function sum(n1, n2 = n1) {
//   console.log(n1 + n2);
// }

// sum(10);

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person("Mr.X");
// console.log(typeof member);

// const newList = [2, 3].push(4);
// console.log(newList);

// function numbers(a, b) {
//   if (a > b) console.log("a is greater");
//   else console.log("b is greater");
//   return;
//   a + b;
// }

// console.log(numbers(5, 2));
// console.log(numbers(4, 5));

// function getItems(list, moreItem, ...args) {
//   return [...list, ...args, moreItem];
// }

// console.log(getItems(["berry", "apple"], "pear", "kiwi"));

// class Person {
//   constructor() {
//     this.name = "Frontend";
//   }
// }

// Person = class AnotherPerson {
//   constructor() {
//     this.name = "Master";
//   }
// };

// const member = new Person();
// console.log(member.name);

// const personName = "Happy Day";
// console.log(personName());

// let personName = "Dev";

// function getName() {
//   console.log(personName);
//   let personName = "FrontendMaster";
// }

// getName();

// * The '||' (logical OR) operator returns the first truthy value or the last falsy value.
// const one = false || {} || null;
// const two = null || false || "";
// const three = [] || 0 || true;

// console.log(one);
// console.log(two);
// console.log(three);

// const x = `${((x) => x)("I love")} JS`;
// console.log(x);

// let num = 1;
// const list = ["😁", "😎", "🤗"];

// console.log(list[(num += 1)]);

// let randomValue = { name: "Lydia" };
// randomValue = 23;

// // console.log(typeof typeof randomValue);

// if (!typeof randomValue === "string") {
//   console.log("It is not a string");
// } else {
//   console.log("It is a string");
// }

// const animals = {};
// let dog = { emoji: "🐶" };
// let cat = { emoji: "🐈" };

// animals[dog] = { ...dog, name: "Dug" };
// animals[cat] = { ...cat, name: "Bux" };

// console.log(animals[dog]);

// const user = {
//   email: "user@example.com",
//   updateEmail: (email) => (this.email = email),
//   // updateEmail(email) {
//   //   this.email = email;
//   // },
// };

// user.updateEmail("admin@mydomain.com");
// console.log(user.email);

// const fruit = ["🍌", "🍊", "🍎"];

// fruit.slice(0, 1);
// fruit.splice(0, 1);
// fruit.unshift("🍇");

// console.log(fruit);

// let count = 0;
// const nums = [0, 1, 2, 3];

// nums.forEach((num) => {
//   if (num) {
//     count += 1;
//   }
// });

// console.log(count);

// nums.map((num) => {
//   num % 2 === 0 && console.log("Even number", num);
// });

// const newMapArr = nums.map((num) => {
//   return num;
// });
// console.log(newMapArr);

// nums.forEach((num) => console.log(num));

// const myObject = { a: 1, b: 2, c: 3 };

// Object.entries(myObject).forEach(([key, value]) => {
//   console.log(key, value);
// });

// Object.entries(myObject).map(([key, value]) => {
//   console.log(key, value);
// });

// Object.keys(myObject).forEach((key) => {
//   console.log(key, myObject[key]);
// });

// Object.keys(myObject).map((key) => {
//   console.log(key, myObject[key]);
// });

// const person = {
//   name: "FrontendMaster",
//   address: {
//     city: "MDNDocs",
//   },
// };
// Object.freeze(person);

// person.name = null;
// person.address.city = null;

// console.log(person);

// const person = {
//   name: "FrontendMaster",
//   address: {
//     city: "MDNDocs",
//   },
// };
// Object.seal(person);

// person.name = "BackendMaster";
// person.skill = "JS";

// delete person.name;
// delete person.address.city;

// console.log(person);

// const normalObject = {
//   property1: "value1",
//   property2: "value2",
// };

// const securityGuard = new Proxy(normalObject, {
//   get: function (target, property) {
//     console.log(`Accessing ${property}`);
//     return target[property];
//   },
// });

// console.log(securityGuard.property2);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 100,
//   city: "Zurich",
// };

// // console.log(person);
// // console.log(person.firstName);

// // person.age = 900;
// // console.log(person);

// // console.log("--------");

// const proxyPerson = new Proxy(person, {
//   set: function (target, property, value) {
//     if (property === "age" && value > 100)
//       throw new Error("Age can't be greater than 100");
//     target[property] = value;

//     // return true;
//     return Reflect.set(target, property, value);
//   },

//   get: function (target, property, receiver) {
//     console.log(property, "is being accessed");

//     if (property === "allowedToVate") return !!(target.age >= 18);
//     if (property === "fullName")
//       return target.firstName + " " + target.lastName;

//     if (!(property in target))
//       throw new ReferenceError("Unknown property: " + property);

//     // return target[property];
//     return Reflect.get(target, property, receiver);
//   },
// });

// // console.log(proxyPerson.hello);

// // proxyPerson.age = 82;
// // console.log(proxyPerson.allowedToVate);
// // console.log(proxyPerson.fullName);

// proxyPerson.age = 82;
// console.log(proxyPerson);
// console.log(proxyPerson.firstName);
// console.log(proxyPerson.city);

// const handler = {
//   set: () => console.log("Added a new property!"),
//   get: () => console.log("Accessed a property!"),
// };
// const person = new Proxy({}, handler);

// person.name = "FrontendMaster";
// person.name;

// const MESSAGE = 108;

// function getInfo() {
//   console.log(MESSAGE);
//   const MESSAGE = "Sadgamaya";
// }

// getInfo();

// const pets = ["🐶", "🐱"];
// ({ item: pets[2] } = { item: "🐼" });

// console.log(pets);

// const myFunc = ({ x, y, z }) => {
//   // const { x, y, z } = 1;
//   console.log(x, y, z);
// };

// // myFunc(1, 2, 3);
// myFunc({ x: 1, y: 2, z: 3 });

// const FOO = "FrontendMaster";

// console.log(typeof FOO == "object");
// console.log(typeof FOO == "string");

// console.log(!typeof FOO == "object");
// console.log(!typeof FOO == "string");

// console.log(!typeof FOO == "object");
// console.log(!typeof FOO == "string");
