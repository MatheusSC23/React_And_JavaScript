const fabricante = ["Mercedes","Audi","BMw"]

function imprimir(nome, indice){
	console.log(`${indice+1}. ${nome}`)
}

fabricante.forEach(imprimir)
fabricante.forEach((a) => console.log(a))