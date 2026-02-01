function doubleOrThriple(number, doDouble){
    if(doDouble===true){
        return number*2;
    }
    else{
        return number*3
    }
}

const result = doubleOrThriple(20, true);
console.log(result)