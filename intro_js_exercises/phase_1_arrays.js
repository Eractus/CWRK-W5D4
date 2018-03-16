// Array#uniq
Array.prototype.uniq = function() {
  let uniqArray = [];

  this.forEach(function(el) {
    if (!uniqArray.includes(el)) {
      uniqArray.push(el);
    }
  });

return uniqArray;
};

console.log([1, 1, 2, 2, 3, 3, 4, 4, 5, 5].uniq());

// Array#twoSum
Array.prototype.twoSum = function() {
  let sumArray = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = (i + 1); j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        sumArray.push([i, j]);
      }
    }
  }

return sumArray;
};

console.log([0, -1, 1, -2, 2, -3, 3, 0].twoSum());

// Array#transpose
Array.prototype.transpose = function() {
  const transposeArray = Array.from(
    { length: this[0].length }, () => Array.from(
      { length: this.length })
  );

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++ ) {
      transposeArray[j][i] = this[i][j];
    }
  }

return transposeArray;
};

console.log([[1, 2, 3], [4, 5, 6], [7, 8, 9]].transpose());
