
// Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, 
// etc and store them in an array

let numArray = new Array(), index =0 

for(let num = 1 ; num <= 100; num++){
    if(num%11 == 0){
        numArray[index] = num
        index++
    }
}

console.log(numArray)