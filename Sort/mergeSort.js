function mergeSort(arr){
  if(arr.length <= 1) return arr;

  let mid = Math.floor(arr.length/2);
  let leftSide = arr.slice(0, mid);
  let rightSide = arr.slice(mid);

  return merge(mergeSort(leftSide), mergeSort(rightSide));
}



function merge(arr1, arr2){
  const res = [];
  let index1 = 0;
  let index2 = 0;

  while(index1 < arr1.length || index2 < arr2.length){

    if(index1 === arr1.length){
      res.push(arr2[index2]);
      index2++;

    }else if(index2 === arr2.length){
      res.push(arr1[index1]);
      index1++;

    }else if (arr1[index1] < arr2[index2]){
      res.push(arr1[index1]);
      index1++;

    }else{
      res.push(arr2[index2]);
      index2++;
    }
  }

  return res;
}
arr = [9, -1, 2, 3, 6, -4, 8, -10];
console.log(mergeSort(arr));



module.exports = { mergeSort, merge };
