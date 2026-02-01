




function averageNum(numbers){
    // console.log(numbers)
    let sum =0;
    let average = 0;
    for( const number of numbers){
        // console.log(number)
        sum = sum+number;  
    }
    return sum / numbers.length;
}

const array = [20,25,82,69,56]
const average = averageNum(array)
console.log("Average :", average);