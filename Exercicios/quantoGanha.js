function salariaMensal(horasTrabalhadas, ganhaPorhora) {
	return `Salário igual a R$ ${parseFloat(horasTrabalhadas * ganhaPorhora)}`
}

console.log(salariaMensal(120,10))