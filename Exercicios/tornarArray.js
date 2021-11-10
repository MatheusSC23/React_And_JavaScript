function tornarArray(obj) {
	let chaves = Object.keys(obj)
	let array = []
	for (let i = 0; i < chaves.length; i++) {
		array.push(chaves[i],obj[chaves[i]])
	}
	return array
}