const pessoa = {
	nome:'Rebeca',
	idade: 2,
	peso: 13,

}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach( ([key,value]) => {
	console.log(`${key}:${value}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{
	enumerable:true,
	writable:false,
	value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)

const dest = {a:1}
const o1 = {b:3}
const o2 = {a:4,c:5}
const o3 = {a:6,c:0}


Object.assign(dest,o1,o2,o3)
console.log(dest)