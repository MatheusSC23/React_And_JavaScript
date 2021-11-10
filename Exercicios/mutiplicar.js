function multiplicar(num1, num2) {
	result = 0
	while(num1 > 0){
		result += num2
		num1--
	}
	return result
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))