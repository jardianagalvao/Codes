function quickSort(arrr) {
  if (arrr.length <= 1) {
    return arrr;
  }

  const pivotIndex = Math.floor(Math.random() * arrr.length);
  const pivot = arrr.splice(pivotIndex, 1)[0];

  const left = [];
  const right = [];

  for (let i = 0; i < arrr.length; i++) {
    if (arrr[i] < pivot) {
      left.push(arrr[i]);
    } else {
      right.push(arrr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arrr = [4, 2, 1, 5, 3, 10, 89, 54, 87, 98, 6, 12, 11];
const sortedArr = quickSort(arrr);

console.log("Array ordenado: ",sortedArr);