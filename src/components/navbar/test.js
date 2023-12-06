
function normalFunction() {
  console.log("Hey! I am calling from a normal function.");
}

function higherOrderFunction(callbackFunc) {
  console.log("Hey! I am calling from a higher order function.");
  callbackFunc();
}

function anotherHigherOrderFunction() {
  console.log("Hey! I am calling from a higher order function.");

  function insideFunc() {
    console.log("Hey! I am calling from another function.");
  }

  return insideFunc;
}

// higherOrderFunction(normalFunction);

const anotherFunc = anotherHigherOrderFunction();

console.log(typeof anotherFunc);