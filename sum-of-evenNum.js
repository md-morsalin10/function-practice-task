function sumOfEvenNum(numbers){
    let sum =0;
    for(const number of numbers){
        if(number % 2 ===0){
            sum = sum+number;
        }
    }
    return sum;
}

const array = [25,56,74,64,21,31,10]
const sum = sumOfEvenNum(array)
console.log("Sum of Even Number :", sum)