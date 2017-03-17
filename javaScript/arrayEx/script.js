function printReverse(array){
    var reversed = [];
    for(let i =; i < array.length; i++){
    reversed.push(array.pop());
    array.splice(i,1);
    }
    return reversed;
}

console.log(printReverse([1,2,3,4,5,6,7,9]));
