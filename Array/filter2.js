Array.prototype.filter2 = function(callback) {
	newAray = []
	for (let i = 0; i < this.length; i++) {
		if(callback(this[i],i,this)){
			newAray.push(this[i])
		}
	}
	return newAray
}

const produtos = [
	{nome: 'notebook', preco: 2499, fragil:true},
	{nome: 'iPad Pro', preco: 4199, fragil:true},
	{nome: 'Copo de Vidro', preco: 12.49, fragil:true},
	{nome: 'Copo de plástico', preco: 18.99, fragil:false},
]

const eFragil = p => p.fragil
const eCaro = p =>  p.preco >= 500
console.log(produtos.filter2(eCaro).filter2(eFragil))