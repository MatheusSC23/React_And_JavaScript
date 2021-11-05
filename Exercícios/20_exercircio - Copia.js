function troco(valor) {
	let notasUm = valor
	if(valor > 0){
		let notasCem = Math.floor(notasUm/100) * 100
		notasUm -= notasCem
		let notasCinquenta = Math.floor(notasUm/50) * 50
		notasUm -= notasCinquenta
		let notasDez = Math.floor(notasUm/10) * 10
		notasUm -= notasDez
		let notasCinco = Math.floor(notasUm/5) * 5
		notasUm -= notasCinco
		return {100:notasCem/100, 50:notasCinquenta/50, 10:notasDez/10, 5:notasCinco/5, 1:notasUm}

	}
	
	return 0
}

console.log(troco(333))