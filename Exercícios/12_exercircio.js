function fatorial(numero) {
	if(numero === 0){
		return 1
	} else {
		return numero * fatorial(numero - 1)
	}
}

console.log(fatorial(1))
console.log(fatorial(2))
console.log(fatorial(3))
console.log(fatorial(4))