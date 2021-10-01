const produto = new Object
produto.nome = "Cadeira"
produto["marca do produto"] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto["marca do produto"]

console.log(produto)

const carro = {
	modelo: 'A4',
	valor: 89000,
	proprietario:{
		nome: "Raul",
		idade: 56,
		endereco: {
			logradouro: 'Rua ABC',
			numero: 223
		}
	},
	condutores: [{
		nome:"Junior",
		idade:20,
	},{
		nome:'Ana',
		idade:42
	}
	]
}


carro.proprietario.endereco.numero = 1000
console.log(carro)

delete carro.proprietario

console.log(carro)