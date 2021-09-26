function resolverdorBaskara(a,b,c) {
	let delta = (b ** 2) - 4 * a * c 
	if( delta < 0){
		return "Delta negativo"
	} else {
		let raiz1  = (-b + Math.sqrt(delta)) / 2 * a 
		let raiz2  = (-b - Math.sqrt(delta)) / 2 * a
		return [raiz1,raiz2]
	}
}

console.log(`As raizes de 3x2+x-12 são ${resolverdorBaskara(3,1,-12)}`)
console.log(`As raizes de 3x2+x+50 são ${resolverdorBaskara(3,1,50)}`)
console.log(`As raizes de x2+2x-1 são ${resolverdorBaskara(1,2,1)}`)

