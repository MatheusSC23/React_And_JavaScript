const aprovados = {0:'Agatha', 1:'Aldo', 2:'Daniel', 3:'Raquel'}

Object.defineProperty(aprovados,'forEach',{
	value: function(func){
		for(indice in this){
			value = this[indice]
			array = Object.values(this)
			func(value,indice,array)
		}
	}
})

function defaultFunction(value,indice,array){
	console.log('Não mudado')
}

aprovados.forEach( (e,i) =>{
	console.log(e,i)
})