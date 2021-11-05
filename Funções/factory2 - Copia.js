function criarProduto(nome,preco) {
	return{
		nome,
		preco,
		desconto: .1,
	}
}

console.log(criarProduto('biscoito',3))