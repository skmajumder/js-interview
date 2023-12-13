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
