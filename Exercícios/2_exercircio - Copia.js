function classifyTriangle(c1,c2,c3){
	if (c1 === c2 && c2 === c3) {
		return "Equilátero"
	} else if (c1 != c2 && c2 != c3){
		return "Escaleno"
	} else {
		return "Isóceles"
	}
}

console.log(classifyTriangle(1,2,3))
console.log(classifyTriangle(4,4,4))
console.log(classifyTriangle(4,4,2))