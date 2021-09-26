function calc(n1,operacao,n2) {
	switch(operacao){
		case '+': return n1 + n2
		case '-': return n1 - n2
		case '*': return n1 * n2
		case '/': return n1 / n2
		default: return "Operação Inválida"
	}
}

console.log(calc(16,"+",4))
console.log(calc(16,"-",4))
console.log(calc(16,"*",4))
console.log(calc(16,"/",4))