let number = 0
let found = false

while(!found){
    number += 1

    for (let i = 1 ; i<= 20 ; i++){
        if(number % i != 0){
            break;
        } 
        else if (i== 20){
            found = true
        }
    }
}
console.log(`Smallest Multiple = ${number}`)