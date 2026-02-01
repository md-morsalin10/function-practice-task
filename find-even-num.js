function evenNumbers(numbers){
    // console.log(numbers)
    const evens=[];
    for(const number of numbers){
        // console.log(number)
        if(number % 2===0){
            evens.push(number);
        }
    }
    return evens;
}

const array =[14,25,36,15,14,26];
const evens = evenNumbers(array);
console.log(evens)
