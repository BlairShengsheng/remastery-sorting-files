function bubbleSort(arr){
  let hasSwapped = true;

  while(hasSwapped){
    hasSwapped = false;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] > arr[i + 1]){
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        hasSwapped = true;
      }
    }
  }
  return arr;

}

const arr = [3, 2, 0, 4, 1];
console.log(bubbleSort(arr));
module.exports = bubbleSort;
