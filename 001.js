
const lista = [
    {nome: 'Paulo', idade: 12, dinheiro: 1200},
    {nome: 'Larissa', idade: 21, dinheiro: 9400},
    {nome: 'Zeca', idade: 18, dinheiro: 1300.45},
    {nome: 'Angela', idade: 42, dinheiro: 5300.67}
]

console.log(lista)

lista.map((cada) => {
    if (cada.nome === 'Zeca') {
        cada.dinheiro = 18000
    }
})

console.log(lista)

console.log('--------------------------------------')

let objeto1 = {produto: 'Biscoito', preco: 2.5, ano: 2019}
let objeto2 = {produto: 'Biscoito', preco: 2.5, ano: 2019, produto: 'uva'}

console.log(objeto1)
console.log(objeto2)

console.log('--------------------------------------')

const matriz1 = [1, 2, 3]
const matriz2 = [6, 7, 8]

const matriz3 = [...matriz1, ...matriz2]
const matriz4 = [matriz1, matriz2]

console.log(matriz1)
console.log(matriz2)
console.log(matriz3)
console.log(matriz4)









console.log('--------------------------------------')



