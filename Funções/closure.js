// Closure é o escopo criado quando a função é declarada 
const x = 'Global'

function fora() {
	const x = 'Local'
	function dentro() {
		return x
	}
	return dentro
}


const minhaFuncao = fora()
console.log(minhaFuncao())