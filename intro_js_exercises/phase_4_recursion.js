// range(start, end)
function range(start, end) {
  if (start === end) {
    return [];
  }

  let r = range(start, end-1);
  r.push(end-1);

  return r;
}

console.log(range(1, 4));

// sumRec(arr)
function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let lastNumber = arr[arr.length-1];
  sumRec(arr[1..arr.length-1]);
}
