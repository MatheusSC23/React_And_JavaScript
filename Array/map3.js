Array.prototype.map2 = function(callback) {
	res = []
	for (let i = 0; i < this.length; i++) {
		res.push(callback(this[i],i,this))
	}
	return res
}

const carrinho = [
	'{"nome":"Borracha","preco":3.45}',
	'{"nome":"Caderno","preco":13.90}',
	'{"nome":"Kit de Lapis","preco":41.22}',
	'{"nome":"Caneta","preco":7.50}',
]

const parse = data => JSON.parse(data)
const justPrice = produto => produto.preco
let precos = carrinho.map2(parse).map2(justPrice)
console.log(precos)