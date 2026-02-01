
function count_zero(numbers){
    let cont =0;
    for(const number of numbers){

        if(number==="0"){
            cont++;
        }
    }
 return cont;
}
console.log(count_zero("0101010101"))