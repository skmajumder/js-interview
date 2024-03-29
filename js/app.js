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

// console.log(fruit.slice(0, 1));
// fruit.splice(0, 2);
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

// myFunc(1, 2, 3);
// // myFunc({ x: 1, y: 2, z: 3 });

// const FOO = "FrontendMaster";

// console.log(typeof FOO == "object");
// console.log(typeof FOO == "string");

// console.log(!typeof FOO == "object");
// console.log(!typeof FOO == "string");

// console.log(!typeof FOO == "object");
// console.log(!typeof FOO == "string");

// function add(x) {
//   return function (y) {
//     return function (z) {
//       console.log(x, y, z);
//       return x + y + z;
//     };
//   };
// }

// const add = (x) => (y) => (z) => {
//   console.log(x, y, z);
//   return x + y + z;
// };

// console.log(add(10)(20)(30));

// const groceries = ["🍅", "🍇"];

// // console.log(groceries.indexOf("🍅"));

// if (groceries.indexOf("🍅")) {
//   console.log("We have 🍅");
// } else {
//   console.log("We don't have 🍅");
// }

// const obj = { name: "JS" };
// obj.itself = obj;

// // const str = JSON.stringify(obj);
// // console.log(str);

// var magic = 900;
// function magic() {
//   console.log("magic");
// }

// console.log(magic);

// function magic() {
//   console.log("magic");
// }

// var magic;
// magic = 900;

// console.log(magic);

// const array = [{ key: "J" }, "2", "X"];
// delete array[0];

// console.log(array.length);
// console.log(array);

// let z = (a = {});
// // a = {};
// // z = a;
// a.name = "JS";

// console.log(z.name);

// function task() {
//   return new Promise((res) => {
//     res("data");
//   });
// }

// task().then((res) => console.log(res));

// result.then((finalResult) => console.log(finalResult));

// console.log(1);

// new Promise((res) => console.log(2));

// console.log(3);

// const user = {
//   id: 1,
//   firstName: "Johnny",
//   lastName: "English",
//   email: "johnny@example.com",
//   password: "pegasus",
//   address: {
//     city: "California",
//   },
// };

// const { password, ...newUser } = user;

// console.log(newUser);

// const dataMap = new WeakMap();
// let person = { name: "JS" };

// dataMap.set(person, "TVA");

// console.log(dataMap.get(person));
// person = null;
// console.log(dataMap.get(person));

// var foo = function () {
//   console.log("inside test");
// };

// foo();

// againTest();
// test();

// var test = function () {
//   console.log("inside test");
// };

// function againTest() {
//   console.log("againTest");
// }

// const data1 = ["C", "B", "A"];
// const data2 = ["Z", "Y", "X"];

// data1.toSorted();
// data2.sort();
// // const newSorted = data1.toSorted();

// console.log({ data1 });
// console.log({ data2 });

// const num1 = [7, 5, 9, 1, 10, 5, 2];
// const num2 = [10, 5, [1, 1, 6, 2], [2, [10, 3, 5, [1, 2, [9, 3]]]]];

// const sortNum1 = num1.toSorted((a, b) => a - b);
// const sortNum2 = num2.flat(Infinity).toSorted((a, b) => a - b);

// console.log(sortNum1);
// console.log(sortNum2);

// function task() {
//   return new Promise((res) => {
//     res("Data");
//   });
// }

// const result = task();

// result.then((data) => console.log(data));

// console.time("async");

// console.log(1);
// new Promise(() => console.log(2));
// console.log(3);

// console.timeLog("async");

// const dataMap = new WeakMap();
// let person = { name: "John" };

// dataMap.set(person, "TVA");

// console.log(dataMap.get(person));
// person = null;
// console.log(dataMap.get(person));

// let foo = function test() {
//   console.log("Inside test");
// };

// foo();

// const test = function () {
//   console.log("Inside test");
// };

// function againTest() {
//   console.log("againTest test");
// }

// const data1 = ["C", "B", "A"];
// const data2 = ["Z", "X", "Y"];

// // * Don't mutate the original array (ECMAScript 23)
// const sortedData1 = data1.toSorted();

// // * Mutate the original array
// data2.sort();

// console.log({ sortedData1 });
// console.log({ data2 });

// const arr = [, , ,];

// console.log(arr.length);
// console.log(arr);

// const obj = {};

// Object.defineProperty(obj, "a", {
//   value: "a",
//   enumerable: true,
// });

// console.log(obj.a);
// obj.a = "new value for key a";
// console.log(obj.a);
// console.log(Object.keys(obj));

// const box = { x: 10, y: 20 };
// Object.freeze(box);

// const shape = box;

// shape.x = 100;
// shape.y = 200;
// shape.z = 300;

// console.log(shape);

// function addItem(item, list) {
//   return list.push(item);
// }

// const result = addItem("item3", ["item1", "item2"]);
// console.log(result);

// function* generatorFn(i) {
//   console.log("A");
//   yield i;

//   console.log("B");
//   yield i * 10;
// }

// const gen = generatorFn(10);

// console.log(gen.next().value);
// console.log(gen.next().value);

// async function getData() {
//   return await Promise.resolve("resolve");
// }

// const data = getData();
// data.then((result) => console.log(result));

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person("MRx");
// console.log(member.name);
// console.log(typeof member);

// let newList = [2, 3].push(4);
// console.log(newList);

// function nums(a, b) {
//   if (a > b) console.log("a is larger than b");
//   else console.log("b is larger than a");
// }

// console.log(nums(4, 2));
// console.log(nums(1, 2));

// function getItems(list, ...args) {
//   return [...list, ...args];
// }

// console.log(getItems(["berry", "apple"], "pear", "kiwi", "knock", "t20"));

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

// const person1 = new Person();
// console.log(person1.name);

// let userName = "Dev";

// function getName() {
//   console.log(userName);
//   let userName = "FrontendMaster";
// }

// getName();

// let userName;
// userName = "FrontendMaster";
// console.log(userName);

// const userName;
// userName = "FrontendMaster";
// console.log(userName);

// const one = false || {} || null; // {}
// const two = null || false || ""; // ""
// const three = [] || 0 || true; // []

// console.log(one);
// console.log(two);
// console.log(three);

// console.log(`${((x) => x)("I love")} JS`);

// let num = 1;
// const list = ["item1", "item2", "item3"];

// console.log(list[(num = num + 1)]);

// let randomValue = { userName: "Lynda" };
// randomValue = 23;

// if (!typeof randomValue === "string") {
//   console.log("Not string");
// } else {
//   console.log("It is a string");
// }

// const animals = {};

// const dog = { emoji: "🐶" };
// const cat = { emoji: "🐱" };

// animals[dog] = { ...dog, name: "Barkalot" };
// animals[cat] = { ...cat, name: "Mewsalot" };

// console.log(animals[dog]);

// const user = {
//   email: "user@example.com",
//   updateEmail: (newEmail) => {
//     this.email = newEmail;
//   },
// };

// user.updateEmail("update@example.com");
// console.log(user.email);

// console.log(window.email);

// const fruits = ["banana", "orange", "apple", "mango"];

// fruits.slice(0, 1);
// fruits.splice(0, 1);
// fruits.unshift("strawberry");

// console.log(fruits);

// const fruit2 = fruits.slice(0, 2);
// console.log(fruit2);

// const removedItems = fruits.splice(2);
// console.log(removedItems);
// console.log(fruits);

// // * The unshift() method, adds one or more elements to the beginning of an array and returns the new length of the array.
// const newLength = fruits.unshift("grape", "mango");
// console.log(newLength);
// console.log(fruits);

// // * The shift() method removes the first element from an array and returns that element.
// const removedItems = fruits.shift();
// console.log(removedItems);
// console.log(fruits);

// // * The push() method, adds one or more elements to the end of an array.
// const newLength = fruits.push("grape", "mango");
// console.log(fruits);
// console.log(newLength);

// // * The pop() method removes the last element from an array and returns that element.
// const removedItem = fruits.pop();

// console.log(removedItem);
// console.log(fruits);

// let count = 0;
// const nums = [0, 1, 2, 3];

// nums.forEach((num) => {
//   if (num) {
//     count += 1;
//   }
// });

// console.log(count);

// const person = {
//   personName: "FrontendMaster",
//   address: {
//     city: "MDNDocs",
//   },
// };
// Object.freeze(person);

// person.personName = null;
// person.address.city = null;

// console.log(person);

// const person = {
//   name: "FrontendMaster",
//   address: {
//     city: "CA",
//   },
// };
// Object.seal(person);

// person.name = "BackendMaster";
// person.skill = "JS";
// delete person.address.city;

// console.log(person);

// const handler = {
//   set: () => console.log("Added a new property!"),
//   get: () => console.log("Accessed a property!"),
// };

// const person = new Proxy({}, handler);
// person.name = "FrontendMaster";
// person.name;

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 99,
//   city: "Zurich",
// };

// const proxyPerson = new Proxy(person, {
//   get: function (target, property) {
//     console.log(`'${property}' property is being accessed`);

//     if (property === "allowToVote") return !!(target.age >= 18);
//     if (property === "fullName" || property === "fullname")
//       return target.firstName + " " + target.lastName;
//     if (!(property in target))
//       throw new ReferenceError("Unknown property: " + property);

//     return Reflect.get(target, property);
//   },
//   set: function (target, property, value) {
//     if (property === "age" && value >= 150)
//       throw new Error("Invalid age limit");

//     target[property] = value;

//     return Reflect.set(target, property, value);
//   },
// });

// console.log(proxyPerson.age);

// proxyPerson.age = 16;
// console.log(proxyPerson.allowToVote);
// console.log(proxyPerson.fullname);

// console.log((proxyPerson.age = 20));
// console.log(proxyPerson.age);

// const pets = ["dog", "cat"];
// ({ item: pets[2] } = { item: "panda" });

// console.log(pets);

// const myFunc = ({ x, y, z }) => {
//   console.log(x, y, z);
// };

// myFunc(1, 2, 3);

// const FOO = "FrontendMaster";

// console.log(!typeof FOO == "object");
// console.log(!typeof FOO == "string");

// const add = (x) => (y) => (z) => {
//   console.log(x, y, z);
//   return x + y + z;
// };

// console.log(add(10)(20)(30));

// const groceries = ["apple", "grape"];

// if (groceries.indexOf("apple")) {
//   console.log("We have apple");
// } else {
//   console.log("We don't have apple");
// }

// const obj = { name: "JS" };
// obj.ref = obj;

// const str = JSON.stringify(obj);
// console.log(str);

// var magic = 100;
// function magic() {
//   console.log("magic");
// }

// console.log(magic);

// const arr = [{ key: "j" }, "2", "x"];
// delete arr[0];

// console.log(arr.length);
// console.log(arr);

// let z = (a = {});

// a.name = "JS";
// console.log(z.name);

// function task() {
//   return new Promise((res) => {
//     res("data");
//   });
// }
// const result = task().then();

// console.log(result);

// console.log(1);

// function task() {
//   new Promise(function () {
//     console.log(2);
//   });
// }

// console.log(3);

// const dataMap = new WeakMap();
// let person = { name: "JS" };

// dataMap.set(person, "TVA");

// console.log(dataMap.get(person));
// person = null;
// console.log(dataMap.get(person));

// let foo = function test() {
//   console.log("inside test");
// };

// foo();

// const data1 = ["C", "B", "A"];
// const data2 = ["Z", "Y", "X"];

// const newData1 = data1.toSorted();
// data2.sort();

// console.log({ newData1 });
// console.log({ data2 });

// const num = [40, 100, 1, 5, 25, 10];
// num.sort((a, b) => a - b);
// // num.sort((a, b) => console.log(`a: ${a}, b: ${b}`));

// console.log(num);

// const arr = [, , ,];
// console.log(arr);
// console.log(arr.length);

// let x = 10;
// let y = "A";

// [x, y] = [y, x];

// console.log({ x, y });

// let x = [typeof x, typeof y];
// console.log(x);

// const [x, ...y] = [1, 2, 3, 4];

// console.log({ x, y });

// var age = 99;
// console.log(window.age);

// let name = "JS";
// name[0] = "R";
// name[1] = "X";

// console.log(name);

// let str = new String("JS");
// // let str = String("JS");

// console.log(str === "JS");
// console.log(str == "JS");

// const obj = {};
// obj[(obj["A"] = "B")] = "C";

// console.log(obj);

// // * 6 ways to create object in JavaScript

// // * 1. Object Literal
// const obj = { key: "value", key2: "value2" };
// console.log(obj);

// // * 2. Constructor Function
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const person = new Person("Jonas", 99);
// console.log(person);

// // * 3. Object.create() method:
// const obj2 = Object.create(null);
// obj2.name = "Jonas";
// console.log(obj2);

// // * 4. Using ES6 Classes
// class Car {
//   constructor(brand, model) {
//     this.brand = brand;
//     this.model = model;
//   }
// }
// const myCar = new Car("Bentley", "Flying Spur");
// console.log(myCar);

// // * 5. Using Factory Functions
// function createPerson(name, age) {
//   return { name, age };
// }

// const person2 = createPerson("MS Dhoni", 40);
// console.log(person2);

// // * Using the new Object() constructor
// const newObj = new Object();
// newObj.team = "CSK";

// console.log(newObj);

// const arr = [1, 2, 3];
// console.log(arr[5]);

// const obj = {};

// console.log(obj.key1);
// console.log(obj.key2);

// const arr = [1, 2, , , 5];
// console.log(arr);
// console.log(arr.length);

// function init(x, y, ...z) {}

// function end(a, b = 0, c) {}

// console.log(init.length);
// console.log(end.length);

// const arr = ["a", "b", "c", "d"];
// const obj = { ...arr };

// console.log(obj);

// const obj = { a: 1, b: 2, c: 3 };
// const { a, ...newObj } = obj;

// console.log(a);
// console.log(newObj);

// const Person = {
//   language: "JS",
//   show() {
//     console.log(`Hi, ${this.language}`);
//   },
// };

// const fn = Person.show;
// fn();

// console.log([] === []);
// console.log([] == []);

// console.log({} === {});
// console.log({} == {});

// if (function fn() {}) {
//   console.log(fn);
// }

// console.log((99)["toString"].length + 1);

// console.log(8 + +"8");

// let jsIsAwesome;
// console.log(typeof jsIsAwesome);

// const data = new Array(10);
// const len = data.length;

// for (let i = 0; i < len; i++) {
//   console.log(data[i]);
// }

// function sum() {
//   return 2 + 2;
// }

// function sq() {
//   return 4 * 4;
// }

// let a = (sum(), sq());
// console.log(a);

// const obj = { name: "X" };
// delete obj.name;
// obj.name ? (obj.name = "Y") : "";

// console.log(obj);

// let lifeSpan = {
//   99: "Impressive",
// };
// lifeSpan[100] = "🚀";

// console.log({ lifeSpan });

// const arr = ["ab", "cd", "ef"];
// const str = "abcdef";

// const strMatch = str.includes("a");
// const arrMatch = arr.includes("a");

// console.log({ strMatch, arrMatch });

// console.log(false == []);
// console.log(false == ![]);

// console.log([].toString());

// let text = "Hello World!";
// let result = text.valueOf();
// console.log(result);

// const obj = { l: 1 };
// console.log(obj.toString());

// console.log(new Number(12).toString());
// console.log(123 == new Number(12).toString());

// function test() {
//   return true;
// }
// console.log("true" == test);
// console.log(test.toString());

// console.log(typeof "123");

// console.log("2023-01-01" == new Date("2023-01-01").toString());

// console.log(new Date("2023-01-01").toString());

// function show() {
//   {
//     var x = 9;
//     var y = 10;
//   }
//   console.log(x, y);
// }

// function show() {
//   {
//     (() => {
//       var x = 9;
//       var y = 10;
//     })();
//   }
//   console.log(x, y);
// }

// show();

// console.log("A");
// (async function () {
//   const x = await 5;
//   console.log("C");
// })();
// console.log("B");

// console.log("1");
// async function test() {
//   const x = await 5;
//   console.log(x);
//   console.log("3");
// }
// test();
// console.log("2");

// console.log("X");

// console.log("Y");

// let a = 10;
// let b = 20;

// let c = 30 - (a = b + 10);

// console.log({ c });

// const arr = [1, 2, 3, 4, 5];
// // arr = [];
// // arr.length = 0;
// // arr.splice(0, arr.length);

// console.log(arr);

// function Superhero() {
//   this.hero = "Dr. Strange";

//   return { hero: "Thor" };
// }

// const hero = new Superhero();
// console.log(hero);

// const obj = {};
// Object.defineProperty(obj, "lang", { value: "JS", enumerable: true });

// console.log(obj);
// console.log(obj.lang);

// console.log(-0 == 0);
// console.log(-0 === 0);

// console.log(Object.is(-0, 0))

// const a = 10;
// const b = 20;
// const add = new Function("a", "b", "console.log(a+b)");

// add(a, b);

// const age = 99;
// const str = "JS";
// const isValid = true;

// console.log(age.toString());
// console.log(str.toLowerCase());
// console.log(isValid.toString());

// const key = "hasOwnProperty";
// const obj = {};

// if (Object.prototype.hasOwnProperty.call(obj, key)) {
//   console.log("Key found:", key);
// } else {
//   console.log("No key found");
// }

// if (key in obj) {
//   console.log("Key found:", key);
// } else {
//   console.log("No key found");
// }

// const str = "The quick brown fox jumps over the lazy dog";

// const countChar = {};

// for (const char of str) {
//   if (Object.prototype.hasOwnProperty.call(countChar, char)) {
//     countChar[char] += 1;
//   } else {
//     countChar[char] = 1;
//   }
// }
// console.log(countChar);

// const a = 99;

// switch (a) {
//   case "99":
//     console.log("==");
//     break;
//   case 99:
//     console.log("===");
//     break;
//   default:
//     console.log("unknown");
// }

// function check() {
//   throw new Error("Parameter is required");
// }

// function getUser(userName = check()) {
//   console.log(userName);
// }

// getUser();

// const value = NaN;

// switch (value) {
//   case NaN:
//     console.log("This is NaN");
//     break;

//   default:
//     console.log("Match failed: " + value);
// }

// const num1 = Number();
// const num2 = Number(undefined);

// console.log({ num1 });
// console.log({ num2 });

// const arr = ["B", "C", "D", "E", "H", "I", "J"];

// console.log(arr.at(-1));

// (function () {
//   console.log("JS is amazing!");
// })();

// let flag = 0;

// const id = setInterval(() => {
//   console.log("Inside setInterval");
//   console.log(flag++);

//   if (flag >= 5) clearInterval(id);
// }, 1000);

// function show() {
//   console.log("Inside show");
// }
// const fnName = "show";

// window[fnName]();

// let arr = ["a", "b", "c"];
// // arr.splice(0, 0, "z");
// arr = ["z", ...arr];

// console.log(arr);

// const PASS_MARK = 40;

// const students = [
//   { id: 1, marks: 40 },
//   { id: 2, marks: 65 },
//   { id: 3, marks: 80 },
//   { id: 4, marks: 79 },
//   { id: 5, marks: 92 },
// ];

// const allPass = students.every((student) => student.marks >= PASS_MARK);

// console.log({ allPass });

// console.log(+false);
// console.log(!"JS");

// let age = "51";
// let validAge = "51";

// age = age + 1;
// validAge++;

// console.log({ age });
// console.log({ validAge });

// let num = "JJ";
// num++;
// console.log(num);

// let i = 0;

// for (let i = 1; i <= 4; i++) {
//   console.log("I love programming");
// }

// console.log(i);

// let i = 0;

// setInterval(() => {
//   console.log(i++);
// }, 1000);

// function grateGrandParent() {
//   console.log("grateGrandParent");
//   grandParent();
// }

// function grandParent() {
//   console.log("grandParent");
//   parent();
//   console.trace()
// }

// function parent() {
//   console.log("parent");
//   child();
// }

// function child() {
//   console.log("child");
//   innerChild();
// }

// function innerChild() {
//   console.log("innerChild");
// }

// grateGrandParent();

//* key: 0,1,2,3
// const arr = [1, 2, 3, 4];

// console.log(0 in arr);
// console.log(2 in arr);
// console.log(4 in arr);
// console.log(5 in arr);

// const arr = [1, 2, 3, 4, 5];

// arr.reduce((acc, nextValue) => {
//   console.log({ acc });
//   console.log({ nextValue });
// });

// const sum = arr.reduce((prev, current) => {
//   return prev + current;
// });

// console.log(sum);

// const arr = ["A", "B", "C", "D", "E"];
// const arr = [1, 2, 3, 4, 5];
// const obj = {};

// arr.forEach((el, index) => {
//   obj[index] = el;
// });

// const obj = arr.reduce((accumulator, currentNumber, currentIndex) => {
//   accumulator[currentIndex] = currentNumber;

//   return accumulator;
// }, {});

// console.log(obj);

// console.log(`${{ Object }}`);

// const obj = {};
// obj.Object = () => {};
// console.log(obj.toString());

// const show = (b, b) => {};

// function test(a, a) {
//   console.log(a);
// }

// test(20);
// test(20, 10);
// test(20, 10, 30);

// const a = { fn: function () {} };
// const b = [function () {}];

// const strA = JSON.stringify(a);
// const strB = JSON.stringify(b);

// console.log(strA);
// console.log(strB);

// const list = "apple,samsung;google";
// const devices = list.split(/[,;]/);

// console.log(devices);
// console.log(list);

// const fileNames = [
//   "app.js",
//   "app.ts",
//   "index.php",
//   "query.sql",
//   "string.java",
//   "ml.py",
// ];
// const filteredFiles = [];

// fileNames.map((fileName) => {
//   const parts = fileName.split(/[.]/);
//   const fileExtension = parts[parts.length - 1];
//   if (fileExtension === "js" || fileExtension === "ts") {
//     filteredFiles.push(fileName);
//   }
// });

// console.log(filteredFiles);

// console.log("" == []);
// console.log(false == []);

// function test() {
//   console.log(typeof this);
// }
// test.call("");
// console.log(typeof this);

// function getFruit(input) {
//   switch (input) {
//     case "orange": {
//       const color = "orange";
//       console.log(color);
//       break;
//     }
//     case "mango": {
//       const color = "mango";
//       console.log(color);
//       break;
//     }
//     default:
//       console.log("no color");
//   }
// }

// getFruit("mango");

// const mySet = new Set([1, 2, 3, 1, 2, 3]);

// const way1 = [...mySet];
// const way2 = Array.from(mySet);
// const way3 = new Array(...mySet);

// console.log({ way1 });
// console.log({ way2 });
// console.log({ way3 });

// const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];

// const uniqueArr = [...new Set(numbers)];
// console.log(uniqueArr);

// const arr = Array.from([1, 2, 3, 4], (x) => x + x);
// console.log(arr);

// const Obj = {};

// const set1 = new Set();
// const set2 = new Set();

// set1.add(Obj);
// set1.add(Obj);

// set2.add({});
// set2.add({});

// console.log(set1.size);
// console.log(set2.size);

// let str = "JS";
// console.log(JSON.stringify(str) === str);

// function check(...args) {
//   for (const item of args) {
//     if (typeof item !== "number") {
//       throw new Error("Invalid number: " + item);
//     }
//   }
// }

// function add(n1, n2) {
//   check(n1, n2);
//   return n1 + n2;
// }

// console.log(add(60, 20));
// console.log(add("a", 20));
// console.log(add(null, 20));
// console.log(add(undefined, 20));
// console.log(add(true, 20));
// console.log(add({}, 20));
// console.log(add([], 20));

// console.log([...[..."..."]].length);
// console.log([...[".", ".", "."]].length);

// console.log(1 + undefined);
// console.log(1 + typeof c);

// let num = -9;

// // if (num < 0) {
// //   num = num * -1;
// // }

// num = Math.abs(num);

// console.log(num);

// function test() {
//   rrr();

//   function rrr() {
//     console.log("a");
//   }

//   rrr();
//   function rrr() {
//     console.log("b");
//   }

//   rrr();
// }

// test();

// console.log(2 + "2");
// console.log(2 - "2");
// console.log(2 * "2");
// console.log(2 / "2");
// console.log(2 % "2");

// console.log(0o1);

// console.log(01);
// console.log(String(01));

// let num = 2;

// // console.log(num--);
// // console.log(num)
// // // console.log(num--);

// let foo = !--num;
// let bar = !--num;

// console.log({ foo });
// console.log({ bar });

// (function () {
//   console.log("IIFE");
// })();

// +(function () {
//   console.log("IIFE");
// })();

// !(function () {
//   console.log("IIFE");
// })();

// const arr = Array.from(["f", "o", "0"], (x) => x);
// const arr = Array.from("foo", (x) => x);
// console.log(arr);

// const mySet = new Set(["foo", "bar", "baz", "foo"]);
// // const newArr = [...mySet];
// const newArr = Array.from(mySet, (x) => x);

// console.log(newArr);

// Array.from({ length: 5 }, (_, i) => console.log(i));
// const arrayLike = { a: "1", b: "2", length: 2 };
// const newArr = Array.from(arrayLike);

// console.log(newArr);

// const newArr = Array.from({ length: 5 }, () => input);
// const newArr = Array(5).fill(input).join("");

// console.log("JS".repeat(5));

// let text = "Helloworld!";
// let result = text.repeat(4);

// console.log(result);

// function show() {
//   console.log("JS");
// }

// new show();

// const test = new Function("", "console.log('ExampleJS')");
// new test

// const magicObject = {
//   value: 1,
//   get a() {
//     return this.value++;
//   },
// };

// console.log(magicObject.a);
// console.log(magicObject.a);
// console.log(magicObject.a);

// const obj = {
//   _name: "",

//   get name() {
//     return this._name;
//   },

//   set name(input) {
//     this._name = input;
//   },
// };

// obj.name = "Jonathan";
// console.log(obj._name);
// console.log(obj.name);

// const { a, ...rest } = { a: 1, b: 2, c: 3, d: 4, e: 5 };

// const {
//   a = "default",
//   b = "default",
//   c = "default",
//   d = "default",
//   e = "default",
// } = {
//   a: null,
//   b: undefined,
//   c: false,
//   d: 0,
// };

// console.log({ a, b, c, d, e });

// const array1 = [1, 30, 39, null, undefined, true, 29, 10, 13];
// const array1 = [1, 30, 39, , , , 29, 10, 13];
// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every((x) => x >= 1));

// const survey = [
//   { name: "Steve", answer: "Yes" },
//   { name: "Jessica", answer: "Yes" },
//   { name: "Peter", answer: "No" },
//   { name: "Elaine", answer: "Yes" },
// ];

// const result = survey.every((element, index, array) => {
//   if (index === 0) return true;
//   else {
//     return element.answer === array[index - 1].answer;
//   }
// });

// console.log(result);

// console.log(Object.keys(survey));

// const result = survey.every((el) => el.answer === "Yes");

// console.log(result);

// console.log(Person);
// class Person {}

// notHoisted()

// class Rectangle {
//   #area = 0;

//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   calcArea() {
//     return this.height * this.width;
//   }
// }

// const ret1 = new Rectangle(10, 20);
// console.log(ret1.calcArea());

// console.log(null == undefined);
// console.log(NaN != 0);

// console.log(null > 0);
// console.log(null >= 0);

// console.log(null < 0);
// console.log(null <= 0);

// const var1 = 1,
//   var2 = 2;

// const var3 = var4 = 1;

// console.log(var1);
// console.log(var2);

// console.log("-----");

// console.log(var3);
// console.log(var4);

// const obj = {
//   show: function () {
//     console.log("JS");
//   },
// };

// const obj = {
//   get show() {
//     return "JS";
//   },
// };

// // obj.show``
// // new obj.show;
// console.log(obj.show);

// console.log(typeof new String(""));
// console.log(typeof String(""));

// function stringFn(value) {
//   if (new.target) return new String(value);
//   else return String(value);
// }

// console.log(typeof new stringFn(""));
// console.log(typeof stringFn(""));

// localStorage.setItem("password", false);

// const password = JSON.parse(localStorage.getItem("password"));

// if (password) {
//   console.log("Password is set");
// } else {
//   console.log("Password is not set");
// }

// const ageArr = [
//   { name: "A", age: 10 },
//   { name: "B", age: 60 },
//   { name: "C", age: 50 },
//   { name: "D", age: 70 },
//   { name: "E", age: 20 },
// ];

// ageArr.sort((a, b) => a.age - b.age);
// console.log(ageArr);

// ageArr.sort((a, b) => {
//   if (a.age < b.age) {
//     return -1;
//   } else if (a.age > b.age) {
//     return 0;
//   }

//   return 0;
// });

// const numArr = [2, 6, 3, 5, 1, 0, 9, 22, 54, 55];

// console.log(numArr.filter((x) => x % 2 === 0).map((x) => Math.pow(x, 2)));

// // * Flat Map (Filter() + map())
// console.log(numArr.flatMap((x) => (x % 2 === 0 ? Math.pow(x, 2) : [])));

// const obj = { name: "JS", lib: "Reacct" };
// const numArr = [2, 6, 3, 5, 1, 0, 9, 22, 54, 55];

// const keys = Object.keys(numArr);
// console.log(keys);

// for (const [key, value] of numArr.entries()) {
//   console.log({ key });
//   console.log({ value });
// }

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// for (const [key, value] of Object.entries(game)) {
//   if (Object.hasOwnProperty.call(game, key)) {
//     console.log({key});
//     console.log({value});
//   }
// }

// let isValid = false;
// console.log(isValid.randomkey);

// function sum(num1) {
//   return (num2) => {
//     if (num2 === undefined) return num1;
//     else return sum(num1 + num2);
//   };
// }

// const result = sum(3)();

// console.log(result);

// console.log((1).awesome);
// console.log((1).awesome);

// const num = 2;
// console.log(num.awesome);

// if ([]) {
//   console.log("Tea");
// }

// if ([] == false) {
//   console.log("biscuit");
// } else {
//   console.log("Pizza");
// }

// function test() {
//   return foo;
//   console.log("YO");
//   foo = 10;
//     function foo() {}
//   var foo = 11;
// }

// console.log(test());
// console.log(typeof test());

// const name = "JS";
// const lib = "React";

// function show(a, b, c) {
//   console.log("a=", a);
//   console.log("b=", b);
//   console.log("c=", c);
// }

// show`Hey ${name}, welcome. Hello ${lib} are you.`;

// const obj = { key: "value" };

// // const { key, key: var1 } = obj;
// const { key: var1, key: var2 } = obj;

// console.log(var1);
// console.log(var2);

// console.log((10, 20, 30, 40, 50));

// function isPass() {
//   console.log("inside pass");
//   return "pass";
// }

// function isTopper() {
//   console.log("inside topper");
//   return "topper";
// }

// const result = isPass() || isTopper();
// console.log(result);

// console.log([43, 31] > [2]);
// console.log([3] > [720]);

// console.log([43, 31].toString());

// const num = 21;

// console.log(num.toString());
// console.log(num.toString(2));
// console.log(num.toString(8));
// console.log(num.toString(10));
// console.log(num.toString(16));

// const obj = Object.create(null);
// const obj = new Object();
// console.log(obj);

// function testFn() {
//   console.log("inside testFn");
// }

// console.log(testFn.name);
// arandomVariable = "JS is 💓";
// console.log(arandomVariable);

const str = "Hey JS! You R AMAZING";
const vowels = ["a", "e", "i", "o", "u"];

function countVowel(text) {
  const strArr = text.toLowerCase().split("");
  let flag = 0;

  strArr.forEach((char) => {
    vowels.includes(char) && flag++;
  });
  return flag;
}

const numOfVowels = countVowel(str);
console.log(numOfVowels);
