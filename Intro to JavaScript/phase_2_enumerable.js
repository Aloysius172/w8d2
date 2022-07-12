Array.prototype.myEach = function(callback){
    for (let i = 0; i < this.length; i++){
        callback(this[i]);
    }
}

// const variable = function(num){
//     console.log(num * num);
// }

// const arr = [1,2,3];

// console.log(arr.myEach(variable));

Array.prototype.myMap = function(callback) {
    for (let i = 0; i < this.length; i++) {
        this[i] = callback(this[i]);
    }
    return this;
}

// arr.myMap(variable);

Array.prototype.myReduce = function(callback, accum) {
    let i = 0;
    if (!accum){
        accum = this[0];
        i++;
    }
    for (i ; i < this.length; i++){
      accum = callback(accum, this[i]);
    }
    return accum;
}

// console.log([1, 2, 3].myReduce(function(acc, el) { return acc + el;}));
// console.log([1, 2, 3].myReduce(function(acc, el) {return acc + el;}, 25));