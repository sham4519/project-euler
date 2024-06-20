
let a = 1
let b, c , product

for(a =1 ; a< 1000 ; a++){
    for( b = a + 1 ; b< 1000; b++){
         c = 1000 - a - b
        
            if (a*a + b*b == c*c){
                product = a*b*c
            
        }
    }
}
console.log(`product = ${product}`)