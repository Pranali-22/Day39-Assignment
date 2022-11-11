// Write a Program to generate a birth month of 50 individuals
// between the year 92 & 93. Find all the individuals having birthdays
// in the same month. Store it to finally print.

let monthMap = new Map()
for(let i=1; i<=12; i++)
    monthMap.set(i,0)

let month 
for(let i=0; i<50; i++){
    month = parseInt(Math.floor(Math.random()*12)+1)
    monthMap.set(month,monthMap.get(month)+1)
}

for(let [key,value] of monthMap) 
    console.log("Month Number "+key+" - Count of people "+value)