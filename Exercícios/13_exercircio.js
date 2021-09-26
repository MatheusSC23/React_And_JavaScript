function diaUtil(ano,mes,dia) {
	let data = new Date(ano,mes,dia)
	switch(data.getDay()){
		case 0: return "Final de Semana"
		case 1: return "Dia útil"
		case 2: return "Dia útil"
		case 3: return "Dia útil"
		case 4: return "Dia útil"
		case 5: return "Dia útil"
		case 6: return "Final de Semana"
		default: return "Erro"
	}

	return "Data inválida"
}

console.log(diaUtil(2021,9,26))
console.log(diaUtil(2021,9,27))
console.log(diaUtil(2021,9,28))
console.log(diaUtil(2021,9,29))
console.log(diaUtil(2021,9,30))
