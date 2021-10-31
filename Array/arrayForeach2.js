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

aprovados.forEach( (e,i) =>{
	console.log(e,i)
})

const aprovados2 = ['Agatha', 'Aldo','Daniel','Raquel']

Object.defineProperty(aprovados2,'forEach2',{
	value: function(callback){
		for(indice in this){
			callback(this[indice],indice,this)
		}
	},
	enumerable: false
})

aprovados2.forEach2( (a,b,c) => {
	console.log(a,b,c)
})