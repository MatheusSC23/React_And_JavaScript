const carrinho = [
	'{"nome":"Borracha","preco":3.45}',
	'{"nome":"Caderno","preco":13.90}',
	'{"nome":"Kit de Lapis","preco":41.22}',
	'{"nome":"Caneta","preco":7.50}',
]

const parse = data => JSON.parse(data)["preco"]
let precos = carrinho.map(parse)
console.log(precos)