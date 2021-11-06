function qualMes(mes) {
	meses = {
		1: 'janeiro',
		2: 'fevereiro',
		3: 'março',
		4: 'abril',
		5: 'maio',
		6: 'junho',
		7: 'julho',
		8: 'agosto',
		9: 'setembro',
		10: 'outubro',
		11: 'novembro',
		12: 'dezembro',
	}
	return meses[mes]

}

console.log(qualMes(1))
console.log(qualMes(12))
console.log(qualMes(5))