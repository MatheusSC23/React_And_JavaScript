// Usando a notação literal

const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)


function Produto(nome,preco,desc){
	this.nome = nome
	this.getPrecoComDesconto = () => preco * desc
}

const produto = new Produto('cama', 5000, 0.5)
console.log(produto.getPrecoComDesconto())

// Função factory

function criarFuncionario(nome,salario,faltas){
	return{
		nome,
		salario,
		faltas,
		getSalario(){
			return (salario/30) * (30 - faltas)
		}
	}
}

const f1 = criarFuncionario('João', 7000, 15)
const f2 = criarFuncionario('Maria', 3000, 0)

console.log(f1.getSalario(),f2.getSalario())

// Object.create

const filha = Object.create(null)

filha.nome = 'Ana'
console.log(filha)

const fromJSON =  JSON.parse('{"info":"Sou um Json"}')
console.log(fromJSON)