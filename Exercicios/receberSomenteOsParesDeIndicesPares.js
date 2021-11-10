const numeroParDeIndicePar = (elemento,indice) => elemento % 2 === 0 && indice % 2 === 0



function receberSomenteOsParesDeIndicesPares(array) {
	return array.filter(numeroParDeIndicePar)
}


console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))
