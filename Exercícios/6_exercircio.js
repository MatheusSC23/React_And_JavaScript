function montanteSimples(capInicial, taxaJuros, tempoAplicacao) {
	let juros =  capInicial * taxaJuros * tempoAplicacao
	return capInicial + juros
}

function montanteComposto(capInicial, taxaJuros, tempoAplicacao) {
	return capInicial * ((1+taxaJuros) ** tempoAplicacao)
}

console.log(`Montante juros simples ${montanteSimples(3000,0.03,2)}`)
console.log(`Montante juros simples ${montanteComposto(3000,0.03,2)}`)