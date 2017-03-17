function isEven (num) {
    if(num % 2 == 0){
        return true;
    }else {
        return false;
    }
}


function factor (num){
    if(num ==0){
        return 1;
    }else{
    return num * factor(num-1)
    }
}


function kebabToSnake(string){

    var newstring = string.replace(/-/g , "_")
    return newstring;
}


