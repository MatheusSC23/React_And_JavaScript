function intervalo(array) {
	let inIntervalo = 0
	let outIntervalo = 0
	for(i in array){
		let element = array[i]
		if(10 <= element && element <= 20){
			inIntervalo++
		} else {
			outIntervalo++
		}

	}

	return [inIntervalo,outIntervalo]
}

const result = intervalo([1,2,3,4,5,6,7,8,9,10,11,30,80,11,15,16])

console.log( `Em 1,2,3,4,5,6,7,8,9,10,11,30,80,11,15,16 ${result[0]} estão no intervalo [10,20] e ${result[1]} não estão`)