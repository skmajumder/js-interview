function checkTryBlock() {
  try {
    throw new Error("This is a error");
  } catch (error) {
    return "Error from catch block";
  } finally {
    return "finally block";
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
