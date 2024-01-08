// * Hoisting

// const arrowFn = () => console.log("Inside arrow function");
// arrowFn();

// function show() {
//   // * Temporal Dead Zone (TDZ) start for "bestFood"
//   console.log(bestFood); // * Temporal Dead Zone (TDZ) for "bestFood"
//   let bestFood = "Vegetable Fried Rice"; // * Temporal Dead Zone (TDZ) end for "bestFood"
//   // * Temporal Dead Zone (TDZ) not exist for "bestFood"
// }

// show();

// test = 9;

// function test() {
//   console.log("inside test function");
// }

// console.log(test);

// const person = {
//   name: "John",
//   greet: function () {
//     setTimeout(() => {
//       console.log(`Greeting ${this.name}`);
//     }, 1000);
//   },
// };

// person.greet();

// function createCounter() {
//   // * count is captured by the closure, but not yet declared
//   var count;

//   return function () {
//     if (!count) {
//       count = 0;
//     }
//     return ++count;
//   };
// }

// const counter = createCounter();

// // * This will print 1, even though count was not declared yet
// console.log(counter());

// function callMe() {
//   console.log("called!");
// }

// // * This seems to work, but it's actually an error
// callMe();

// // * Because callMe is hoisted, but the actual definition is below

// const callMe = function () {
//   console.log("called again!");
// };

// testHoisting();

// function testHoisting() {
//   console.log("Testing Hoisting. You can call be before the initialization");
// }

// function testHoisting() {
//   console.log(personName);
//   var personName = "Leo Messi";
// }

// testHoisting();
