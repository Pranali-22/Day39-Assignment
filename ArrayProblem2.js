// Extend the above program to sort the array and then find the 2nd largest 
// and the 2nd smallest element

let numArray = new Array(10)

for(let i =0 ; i< 10; i++){
    numArray[i] = Math.floor(Math.random()*900)+100
}

console.log(numArray)

numArray.sort()

console.log(numArray)

console.log(`Second Maximum numeber : ${numArray[1]} \nSecond Minimum number : ${numArray[8]}`)