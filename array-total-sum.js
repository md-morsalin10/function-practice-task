
function sumOfNumbers(numbers){
    // console.log(number)
    let sum = 0;
    for(const number of numbers){
        // console.log(number)
        sum = sum + number;
    }
    return sum;
}

const array = [12,13,14,15];
const sum = sumOfNumbers(array)
console.log("SUM OF THE ARRAY :", sum)