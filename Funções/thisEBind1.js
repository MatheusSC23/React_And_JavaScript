const pessoa= {
	saudacao: 'Bom dia',
	falar() {
		console.log(this.saudacao);
	}
}

const pessoaGrossa= {
	saudacao: 'Bom dia pra que?',
	falar() {
		console.log(this.saudacao);
	}
}


const falarDePessoa = pessoa.falar.bind(pessoaGrossa);

falarDePessoa();