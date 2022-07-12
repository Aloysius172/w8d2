Array.prototype.uniq = function(){
  const retVal = []; 
  for (let i = 0; i < this.length; i++){
    if (!retVal.includes(this[i])){
        retVal.push(this[i]);
    }
  }
  return retVal;
}

Array.prototype.twoSum = function(){
    const retVal = [];
    for (let i =0; i < this.length; i++){
        for (let j = 0; j < this.length; j++){
            if (i < j){
                if (this[i] + this[j] === 0){
                    retVal.push([i, j]);
                }
            }
        }
    }
    return retVal;
}

// [1,-1, 2, 0, 4, 5 ,-4, 0]

// Array.prototype.twoSum = function(){
//   const retVal = [];
//   let hash = {};
//   for (let i = 0; i < this.length; i++){
//     hash[this[i]] = (0 -this[i]);
//   }
// }

Array.prototype.transpose = function(){
    const retVal = [];
    for (let i = 0; i < this[i].length; i++){
        let temp = [];
        for (let j = 0; j < this.length; j++){
            temp.push(this[j][i]);
        }
        retVal.push(temp);
    }
    return retVal;
}

// const arr = [[1,2],[3,4],[5,6]]

// function idk(arr){
//     for (let i in arr){
//         console.log(i);
//     }
// }

// idk(arr)

// console.log(arr.transpose())
