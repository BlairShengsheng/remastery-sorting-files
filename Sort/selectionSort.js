function selectionSort(arr){
  let res = [];
  while(arr.length){
    let minValue = Infinity;
    let minIndex = -1;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] < minValue){
        minValue = arr[i];
        minIndex = i;
      }
    }
    res.push(minValue);
    arr.splice(minIndex, 1);
  }
  return res;
}

const arr = [9, 2, 0, -1, 1, 4];
console.log(selectionSort(arr));

function selectionSortInPlace(arr){
  for(let i = 0; i < arr.length; i++){
    let minIndex = i;
    for(let j = i + 1; j < arr.length; j++){
      if(arr[j] < arr[minIndex]){
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
const arr2 = [9, 2, 0, -1, 1, 3, 8, 6];
console.log(selectionSortInPlace(arr2));

module.exports = {selectionSort, selectionSortInPlace};
