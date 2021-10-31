const quaseArray = {0:'Rafael', 1:'Ana', 2:'Bia'}
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString',{
	value: function(){return Object.values(this)},
	enumerable: false,
})

Object.defineProperty(quaseArray, 'Math',{
	value: function(){return 'Calc'},
	enumerable: false,
})

console.log(quaseArray.Math())
console.log(quaseArray[0])
const meuArray = ['Rafael','Ana','Bia']
console.log(quaseArray.toString(), meuArray)