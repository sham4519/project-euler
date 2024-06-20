let x = 12
//console.log(`${x} + 12 = ` + (x + 12))

let i;
for(i=1; i<11; i++) {
	console.log(`10 x ${i} = ` + i * 10)
}

console.time('binary')
let num = 786
let rem
let bin = []
while(num != 1) {
	rem = num % 2
	bin.push(rem)	
	num = Math.floor(num / 2)	
}
bin.push(num)
console.timeEnd('binary')
// 1100010010
console.log(bin.reverse().join(''))

num = 17

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