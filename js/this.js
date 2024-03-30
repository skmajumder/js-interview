// const flight = "LM234";
// const jonas = {
//   name: "Jonas Schmedtmann",
//   passport: 24739479284,
//   DOB: "3/25/90",
//   city: "Lisbon",
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "1234";
//   passenger.name = "Mr. " + passenger.name;

//   if (passenger.passport === 24739479284) console.log("Check in");
//   else console.log("Wrong Passport");
// };

// checkIn(flight, jonas);

// console.log(flight);
// console.log(jonas);

// * implicit binding
// const player = {
//   name: "Messi",
//   age: 35,
//   printPlayerName() {
//     console.log(this.name);
//   },
// };

// player.printPlayerName();

// const printPlayerNameFn = function (obj) {
//   obj.printPlayerName = function () {
//     console.log(this.name);
//   };
// };

// const sakib = {
//   name: "Sakib",
//   age: 35,
// };

// const tamim = {
//   name: "Tamin",
//   age: 35,
// };

// printPlayerNameFn(sakib);
// printPlayerNameFn(tamim);

// sakib.printPlayerName();
// tamim.printPlayerName();

// function Person(personName, age) {
//   return {
//     personName,
//     age,
//     printName() {
//       console.log(this.personName);
//     },
//     father: {
//       fName: "Mr. XXX",
//       printName() {
//         console.log(this.fName);
//       },
//     },
//   };
// }

// const sakib = Person("Sakib", 36);

// sakib.printName();
// sakib.father.printName();

// * https://www.youtube.com/watch?v=-owpuf4lbyU

// * Call

// function SetUsername(userName) {
//   // * Complex DB call
//   this.userName = userName;
//   console.log("Fn called");
// }

// function CreateUser(userName, email, password) {
//   SetUsername.call(this, userName);

//   this.email = email;
//   this.password = password;
// }

// const chai = new CreateUser("chai", "chai@gmail.com", "123");
// console.log(chai);

// * https://www.youtube.com/watch?v=75dMiOY_4ac

// * Bind
