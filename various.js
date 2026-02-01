function evenSize(str){
    const size = str.length;
    console.log(str,size)
    if(size % 2 ===0){
        console.log("Even")
    }
    else{
        console.log("Odd")
    }
}

evenSize("programming")