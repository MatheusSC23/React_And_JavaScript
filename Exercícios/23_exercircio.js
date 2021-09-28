function calcNota(codigo,n1,n2,n3) {
	let media = ((4 * n1 + 3 * n2 + 3 * n3) / (4 + 3 + 3))
	let result = "Aprovado"

	if(media < 5){
		result = "Reprovado"
	}
	return `Código do aluno: ${codigo} \nNotas: ${n1},${n2},${n3} \nMedia: ${media} \nResultado: ${result}`
}

console.log(calcNota("C0400",1.9,9,5))