function isPalindrome(num){
    let digit = 0
    let reversed = 0
    let r = num;
    while (r > 0){
        digit = r % 10
        reversed = (reversed * 10) + digit
        r = r / 10
    }
    // console.log('num', num)
    // console.log('rev', reversed)
    if(num == reversed) {
        return true
    }
    return false
}



let product 
let pald = 0
let max = 0
for(let i= 100; i<= 999; i++){
    for(let j = 100; j <= 999 ; j++){
        product = i*j
        if(isPalindrome(product)){
            // console.log('product', product)
            if(product > max) {
                max = product
            }
            
        
        
        }
    }
} 
console.log(`largest palindrome = ${max}`)