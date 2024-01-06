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

const arr = [[[[[[0], [1, [2, 5, 6, 1], [[[3, [4, [5]]]]]]]]]]];

console.log(arr.flat(Infinity));

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
