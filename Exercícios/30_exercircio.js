function maiorMenor(array) {
	let maior = array[0]
	let menor = array[0]

	array.forEach( number => {
		if(number > maior){
			maior = number
		}

		if(number < menor){
			menor = number
		}
	})

	return [maior,menor]
}

const extremos = maiorMenor([1,2,3,4,5,6,0,10])

console.log(`O maior é ${extremos[0]} e o menor é ${extremos[1]}`)