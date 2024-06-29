function insertionSort(arr){
  for(let i = 1; i < arr.length; i++){
    for(let j = i ; j > 0; j--){

      if(arr[j - 1] > arr[j]){
        [arr[j - 1 ], arr[j]] = [arr[j], arr[j - 1]];

      }else{
        break;
      }
    }
  }
  return arr;
}

const arr = [9, 2, 0, -1, 1, 3, 8, 6];
console.log(insertionSort(arr));

module.exports = insertionSort;
