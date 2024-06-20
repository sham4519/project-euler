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
