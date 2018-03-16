// Array#bubbleSort
Array.prototype.bubbleSort = function() {
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < (this.length - 1); i++) {
      if (this[i] > this[i+1]) {
        [this[i], this[i+1]] = [this[i+1], this[i]];
        sorted = false;
      }
    }
  }

  return this;
};

console.log([12, 2, 36, 8, 1, 28, 3, 0].bubbleSort());

// String#substrings
String.prototype.substrings = function() {
  let subsArray = [];
  let stringArray = this.split("");

  for (let i = 0; i < stringArray.length; i++) {
    for (let j = i + 1; j <= stringArray.length; j++) {
      subsArray.push(stringArray.slice(i, j).join(""));
    }
  }

  return subsArray;
};

console.log("abc".substrings());
