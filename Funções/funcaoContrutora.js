function Carro(velocidadeMaxima = 200, delta = 5){
	//atributo privado
	let velocidadeAtual = 0

	//método publico
	this.acelerar =  function () {
		if(velocidadeAtual + delta <= velocidadeMaxima){
			velocidadeAtual += delta
		} else{
			velocidadeAtual = velocidadeMaxima
		}
	}

	//método publico
	this.getVelocidadeAtual = _ => velocidadeAtual;
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

ferrari = new Carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)