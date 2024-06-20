console.time('prime')
let num = 174440041
let isComposite = false
for(i=2; i<num ; i++) {
	if (num%i == 0){
		console.log(`${num} is not a prime Number` )
		isComposite = true
		break
	}
}

if(isComposite == false){
  console.log(`${num} is a Prime Number`)
}
console.timeEnd('prime')