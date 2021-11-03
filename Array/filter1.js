const produtos = [
	{nome: 'notebook', preco: 2499, fragil:true},
	{nome: 'iPad Pro', preco: 4199, fragil:false},
	{nome: 'Copo de Vidro', preco: 12.49, fragil:true},
	{nome: 'Copo de plástico', preco: 18.99, fragil:false},
]

const eFragil = p => p.fragil
const eCaro = p =>  p.preco >= 500
console.log(produtos.filter(eCaro).filter(eFragil))