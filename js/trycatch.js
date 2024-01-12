function checkTryBlock() {
  try {
    // nothing in the block
  } catch (error) {
    return "catch block";
  }
}

console.log(checkTryBlock());

// function regularFn(a, a) {
//   console.log(a, a);
// }
// * Duplicate parameter name not allowed in this context
// const arrowFn = (b, b) => {};

// regularFn(10, 100);
// arrowFn(20, 200);
