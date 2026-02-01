function isEeven(number){
   if(number % 2 === 0){
    return true;
   }
   else{
    return false;
   }
}

const checkEven = isEeven(20);
console.log(checkEven)

function isOdd(number){
    if(number % 2 ===1){
        return true;
    }
    return false;
}

console.log(isOdd(20));
