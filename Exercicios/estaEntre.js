function estaEntre(numero, maximo, minimo, inclusivo = false) {
	extremidades = inclusivo ? (minimo === numero  || numero === maximo) : false
	return (minimo < numero  && numero < maximo) || extremidades
}

console.log(estaEntre(60, 100, 50)) // retornará true 
console.log(estaEntre(16, 100, 160))  // retornará false 
console.log(estaEntre(3, 150, 3))  // retornará false 
console.log(estaEntre(3, 150, 3, true))  // retornará true