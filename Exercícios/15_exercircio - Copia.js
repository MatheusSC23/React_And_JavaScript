function escolherCarro(carro) {
	switch(carro){
		case "hatch": return "Compra efetuada com sucesso"
		case "sedan": return "Tem certeza que não prefere este modelo?"
		case "motocicleta": return "Tem certeza que não prefere este modelo?"
		case "caminhonete": return "Tem certeza que não prefere este modelo?"
		default: return "Não trabalhamos com este tipo de automóvel aqui"
	}
}

console.log(escolherCarro("hatch"))
console.log(escolherCarro("sedan"))
console.log(escolherCarro("motocicleta"))
console.log(escolherCarro("caminhonete"))
console.log(escolherCarro("fusca"))