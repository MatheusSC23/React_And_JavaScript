const produtos = [
	{nome: 'notebook', preco: 2499, fragil:true},
	{nome: 'iPad Pro', preco: 4199, fragil:true},
	{nome: 'Copo de Vidro', preco: 12.49, fragil:true},
	{nome: 'Copo de plástico', preco: 18.99, fragil:false},
]

const eFragil = p => {return p.fragil}
const eCaro = p => {return p.preco > 2000}
console.log(produtos.filter(eFragil).filter(eCaro))