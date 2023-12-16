// * Currying

function blendColors(color1, color2, opacity) {
  return `Color ${color1}, ${color2} mixed together and opacity is ${opacity}`;
}

function preBlendColor(color1) {
  return function (color2, opacity) {
    return blendColors(color1, color2, opacity);
  };
}

const redBlendFunction = preBlendColor("red");

const pinkBlend = redBlendFunction("pink", 0.5);
const orangeBlend = redBlendFunction("orange", 1);

console.log(pinkBlend);
console.log(orangeBlend);
