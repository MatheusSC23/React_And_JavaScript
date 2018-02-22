function makeHelloFuntion(){
	const message = 'Hello!'
	function sayHello(){
		console.log(message)
	}
	return sayHello
}
const sayHello = makeHelloFuntion()
console.log(message)
sayHello()