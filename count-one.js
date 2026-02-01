
function countOne(numbers){
    let count = 0;
    for(const number of numbers){
        if(number==="1"){
            count++;
        }
    }
    return count;
}

const num ="01010121210"
const count = countOne(num);
console.log("Number Of 1 :", count)
