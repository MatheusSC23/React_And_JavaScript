function planoSaude(idade) {
	let valorPagar = 100;
	if(idade < 10){
		valorPagar += 80
	} else if(10 <= idade && idade <= 30){
		valorPagar += 50
	} else if(30 < idade && idade <= 60 ){
		valorPagar += 95
	} else{
		valorPagar += 130
	}

	return valorPagar

}

console.log(`Valor a pagar do plano com a idade de 10 ${planoSaude(9)}`)
console.log(`Valor a pagar do plano com a idade de 30 ${planoSaude(30)}`)
console.log(`Valor a pagar do plano com a idade de 45 ${planoSaude(45)}`)
console.log(`Valor a pagar do plano com a idade de 61 ${planoSaude(61)}`)
