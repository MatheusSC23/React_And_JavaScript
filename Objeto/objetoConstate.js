const pessoa = { nome: "joão", idade: 23, endereco:{rua:'Titan', numero:778}}
pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa)
pessoa.nome = 'José'
pessoa.endereco.rua = 'Oliveira'
console.log(pessoa)