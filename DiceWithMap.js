// Write a program in the following steps
// a. Roll a die and find the number between 1 to 6
// b. Repeat the Die roll and find the result each time
// c. Store the result in a dictionary
// d. Repeat till any one of the number has reached 10 times
// e. Find the number that reached maximum times and the one that was for 
// minimum time

let diceMap = new Map()
for(let i=1;i<=6;i++)
    diceMap.set(i,0)

let flag = true
let diceValue, diceKey

while(flag){
    diceKey = parseInt(Math.floor(Math.random()*6)) + 1
    //console.log("Key: "+diceKey)
    diceValue = diceMap.get(diceKey)+1
    diceMap.set(diceKey,diceValue)

    for(let value of diceMap.values()){
        if(value == 10)
        {
            flag = false
            break
        }
    }
}

for(let [key,value] of diceMap) console.log(key + " = "+value)