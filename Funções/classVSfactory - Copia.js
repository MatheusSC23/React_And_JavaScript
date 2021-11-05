class Pessoa{
	constructor(nome){
		this.nome = nome
	}

	falar(){
		console.log(`Meu nome é ${this.nome}`)
	}
}

const p1 = new Pessoa('Matheus')
p1.falar()

const criarPessoa = nome => {
	return{
		falar: () => console.log(`My name is ${nome}`)
	}
}

const p2 = criarPessoa('Matheus')
p2.falar()