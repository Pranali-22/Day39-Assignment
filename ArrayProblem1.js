// Write a program in the following steps
// a. Generates 10 Random 3 Digit number. 
// b. Store this random numbers into a array. 
// c. Then find the 2nd largest and the 2nd smallest element without sorting the array.

let numArray = new Array(10)
let max1, max2, min1, min2

for(let i =0 ; i< 10; i++){
    numArray[i] = Math.floor(Math.random()*900)+100
}

if(numArray[0] > numArray[1]){
    max1 = numArray[0]
    max2 = numArray[1]
    min1 = numArray[1]
    min2 = numArray[0]
}
else{
    max1 = numArray[1]
    max2 = numArray[0]
    min1 = numArray[0]
    min2 = numArray[1]
}

for(let i=2 ; i<numArray.length; i++){
    if(numArray[i] > max1){
        max2 = max1
        max1 = numArray[i]
        
    }
    else if(numArray[i] > max2){
        max2 = numArray[i]
    }

    if(numArray[i] < min1){
        min2 = min1
        min1 = numArray[i]
        
    }
    else if(numArray[i] < min2){
        min2 = numArray[i]
    }
}

console.log(numArray)

console.log(`Second Maximum numeber : ${max2} \nSecond Minimum number : ${min2}`)

