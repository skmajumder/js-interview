// * Closures

function getPassingStatus(mark) {
  const examMark = mark;
  return () => examMark >= 40;
}

const passingStatus = getPassingStatus(80);
console.log(passingStatus());

// function grandParent() {
//   let p = 0;
//   function parent() {
//     const x = 9;
//     const y = 10;

//     function children() {
//       console.log(x, p);
//     }
//     console.dir(children);

//     children();
//   }
//   parent();
// }

// grandParent();

// function parent() {
//   const x = 9;
//   const y = 10;

//   function children() {
//     console.log(x, y);
//   }
//   console.dir(children);

//   children();
// }

// parent();

// function counter() {
//   let count = 0;
//   return () => ++count;
// }

// const newCounter = counter();

// console.log(newCounter());
// console.log(newCounter());
// console.log(newCounter());

// console.log(globalThis)
// console.log(window)
