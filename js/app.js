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

for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 5);
}

for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 5);
}
