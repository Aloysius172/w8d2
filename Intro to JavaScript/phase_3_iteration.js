Array.prototype.bubbleSort = function(){
    let sorted = false;
    while (!sorted){
        sorted = true;
        for(let i = 0; i < this.length; i++){
          if (this[i] > this[i + 1]){
            let a = this[i];
            let b = this[i + 1];
            this[i + 1] = a;
            this[i] = b;
            sorted = false;
          }
        }
    }
    return this;
}

// console.log([5, 3, 1, 6, 7, 2, 8, 4].bubbleSort())

String.prototype.substrings = function(){
  const retVal = [];
  let i = 0;
  while (i < this.length){
    let temp = "";
    for(let j = i; j < this.length; j++){
        temp += this[j];
        retVal.push(temp);
    }
    i++
  }
  return retVal;
}

// console.log("cat".substrings());