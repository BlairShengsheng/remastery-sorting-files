function quickSort(arr){
  if(arr.length <= 1) return arr;

  const pivot = arr[0];
  const smaller = [];
  const bigger = [];

  for(let i = 1; i < arr.length; i++){
    let curr = arr[i];
    if(curr < pivot){
      smaller.push(curr);
    }else{
      bigger.push(curr);
    }
  }
  return [...quickSort(smaller), pivot, ...quickSort(bigger)];
}

arr = [9, -1, 2, 3, 6, -4, 8, -10];
console.log(quickSort(arr));

module.exports = quickSort;
