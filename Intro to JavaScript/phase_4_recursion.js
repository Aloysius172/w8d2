// function range(start, end){
//     if (start === end){
//         return start;
//     }
//     return [start, range(start + 1, end)];
// }

// console.log(range(0, 3));

function sumRec(arr){
    if (arr.length === 0){
        return 0;
    }
    return arr.pop() + sumRec(arr);
}

// console.log(sumRec([0, 1, 2, 3]))

function exponent(base, exp){
  if (exp === 0){
    return 1;
  }
  return base * exponent(base, exp - 1)
}

// console.log(exponent(4,3));

function fibonacci(n){

}