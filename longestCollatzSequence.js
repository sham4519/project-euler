function chainLengthFor(num){
    let count = 1
    while(num > 1) {
        if(num % 2 == 0){
            num = num / 2
        } else {
            num = 3 * num + 1
        } 
        count++
    }
    
    return count
}

let max = 0
let ourNum = 0
for(let num= 0; num < 1000000; num++){
    let ct = chainLengthFor(num)
    if(ct > max){
        max = ct
        ourNum = num
    }
}
console.log(ourNum)