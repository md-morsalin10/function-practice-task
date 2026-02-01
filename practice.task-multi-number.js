
function evenOrOdd(number){
    if(number%2===1){
        console.log("Multiple of the ODD Number")
        return number*2;
    }
    console.log("Divided of the even Number")
    return number/2;
    
}

const result = evenOrOdd(20)
console.log(result)