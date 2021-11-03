const alunos =[
	{nome: 'João', nota: 7.3, bolsista: false},
	{nome: 'Maria', nota: 9.2, bolsista: false},
	{nome: 'Pedro', nota: 9.8, bolsista: false},
	{nome: 'Ana', nota: 8.7, bolsista: false},
]

const booleanList = aluno => aluno.bolsista
const todosBolsistas = (acumulador,atual) => acumulador && atual
const temBolsistas = (acumulador,atual) => acumulador || atual

const perg1 = alunos.map(booleanList).reduce(todosBolsistas)
console.log(perg1)
const perg2 = alunos.map(booleanList).reduce(temBolsistas)
console.log(perg2)