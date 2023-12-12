// * using object as key

const a = {},
  b = { key: "b" },
  c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

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
