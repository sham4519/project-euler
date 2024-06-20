
function isPrime(n) {
    let sqrt = Math.sqrt(n)

    for(j=2; j <= sqrt; j++ ){
        if(n%j == 0){
            return false
        }
    }
    // if it reaches here that means
    // it is not a composite because
    // the return stmt inside loop hasnt been
    // executed.
    return true
}

let pFact = 1
let num = 600851475143
let sqrtNum = Math.sqrt(num)
for(let i = 2; i <= sqrtNum; i++){
    if(isPrime(i)) {
        if(num % i == 0) {
            pFact = i
            console.log('pFact = ', pFact)
        }
    }
}
console.log(`largest prime factor: ${pFact}`)

module.exports = {
    isPrime,
}