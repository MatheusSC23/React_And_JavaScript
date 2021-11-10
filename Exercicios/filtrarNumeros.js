function filtrarNumeros(array) {
	newArray = []
	for (let i = 0; i < array.length; i++) {
		if(typeof array[i] === 'number'){
			newArray.push(array[i])
		}
	}
	return newArray
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20])) // retornará [1, 20] 
console.log(filtrarNumeros(["a", "c"])) // retornará []