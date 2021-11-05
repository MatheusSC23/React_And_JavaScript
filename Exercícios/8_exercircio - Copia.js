function desempenhoJogos(pontuacoes) {
	let arrayPontuacoes = pontuacoes.split(" ")
	let menorPontuacao = parseInt(arrayPontuacoes[0])
	let partidaMenorPontuacao = 1
	let contador = 1
	arrayPontuacoes.forEach( pontuacao => {
		pontuacao = parseInt(pontuacao)
		if(pontuacao < menorPontuacao){
			menorPontuacao = pontuacao;
			partidaMenorPontuacao = contador;
		} 
		contador ++
		
	})
	return [menorPontuacao, partidaMenorPontuacao] 
}

console.log(`Para as seguintes pontuações 2 20 20 8 25 3 10 30 1 temos que ${desempenhoJogos("2 20 20 8 25 3 10 30 10")}`)