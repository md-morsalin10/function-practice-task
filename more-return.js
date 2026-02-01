function add (price1, price2){
    const result = price1+price2;
    return result;
}

const bill = add(25,63)
console.log("Bill ;", bill)

function add2(price1, price2){
    return price1+price2;
}
const bill2 = add2(40,20)
console.log("Second Bill :", bill2)


function doMath(num1, num2){
    const sum = num1+num2;
    const difference = num1 - num2;
    const multiply = sum*difference;
    return multiply;
}

const multiResult = doMath(35,30)
console.log("Multiply Result:", multiResult)