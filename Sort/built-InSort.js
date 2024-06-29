function compareNumbersDecending(a, b) {
  return  b - a;
}


function compareNumbersAscending(a, b){
  return a - b;
}

nums = [ 64, 128, 256, 512, 1024, 2, 4, 8, 16, 32];
console.log(nums.sort(compareNumbersDecending));

console.log(nums.sort(compareNumbersAscending));
