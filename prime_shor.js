// write a program to find if a given number is prime
// using shor's algoritm:
// test factors from 2 to sqrt(n)
console.time('shams')
let num = 174440041
let sqrt = Math.sqrt(num)
let isComposite = false
// console.log(sqrt)

for(i=2; i <= sqrt; i++ ){
if(num%i == 0){
    console.log(`${num} is not a prime number`)
    isComposite = true
    break
}
}
if(isComposite == false){
console.log(`${num} is a prime number`)
}
console.timeEnd('shams')