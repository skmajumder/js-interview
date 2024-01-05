const num = 7;

// * old version
const numWithZero = num < 10 ? `0${num}` : num;

// * new version
const numWithZeroNew = num.toString().padStart(2, "0");

console.log(numWithZero);
console.log(numWithZeroNew);
