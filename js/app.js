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

