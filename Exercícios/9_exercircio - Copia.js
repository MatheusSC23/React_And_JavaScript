function validarNota(nota) {
	if(nota <= 38){
		return "Reprovado"
	} else {
		let nota = arredondaNota(this.nota)
		if(nota < 40){
			return "Reprovado"
		} else {
			return "Aprovado"
		}
	}
}

function arredondaNota(nota) {
	//calcula o próximo multiplo de 5
	let proximoMul = (Math.floor(nota/5) + 1) * 5
	if(proximoMul - nota < 3){
		return proximoMul
	} else {
		return nota
	}

}

console.log(validarNota(38))