const NUMS = [1, 2, 3, 4, 5];

// Array#myEach(callback)
Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

NUMS.myEach((num) => {
  console.log(num + num);
});

// Array#myMap(callback)
Array.prototype.myMap = function(callback) {
  let mapArray = [];

  this.myEach( el => mapArray.push(callback(el)) );

  return mapArray;
};

console.log(NUMS.myMap( num => num + num ));

// Array#myReduce(callback[, initialValue])
Array.prototype.myReduce = function(callback, initialValue) {
  let array = this;
  if (!initialValue) {
    initialValue = array[0];
    array = array.slice(1);
  }

  let accumulator = initialValue;

  array.myEach( el => accumulator = callback(accumulator, el) );

  return accumulator;
};

console.log(NUMS.myReduce( (num, initialValue) => num + initialValue));
