// Extend the Prime Factorization Program to store all the Prime Factors of a 
// number n into an array and finally display the output. 

const prompt = require("prompt-sync")()

let number = Number(prompt("Enter number to find prime factors: "))
console.log(checkPrimeFactors(number))

function checkPrimeFactors(number) {
    let  index =0, is_prime
    let primeArray = new Array()
    for(let num=2; num <=number ; num++){
        if(number%num == 0){
            is_prime = 0
            for(let i=2;i<=num/2; i++){
                if(num%i == 0){
                    is_prime = 1
                    break
                }
            }

            if(is_prime == 0){
                primeArray[index] = num
                index++
            }
        }
    }

    return primeArray
}