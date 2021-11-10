function repetir(elemento, vezes) {
	let result = []
	for (let i = 0; i < vezes; i++) {
		result.push(elemento)
	}

	return result
}

console.log(repetir("código", 2))
console.log(repetir(7, 3))