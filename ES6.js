const vetorNumeros = [10, 20, 30, 40, 50]

console.log('Listando todos os elementos do vetor: ')
console.log(vetorNumeros)

console.log('\nMultiplicando cada elementos do vetor por 2: ')
const dobrados = vetorNumeros.map ( n => n * 2)
console.log(dobrados)

console.log('\nFiltrando elementos ímpares: ')
vetorNumeros.push(1)
vetorNumeros.push(3)
const impares = vetorNumeros.filter(n => n %2 == 1)
console.log(impares)

console.log('\nFiltrando elementos pares: ')
const pares = vetorNumeros.filter (n => n % 2 == 0)
console.log(pares)

console.log('\nFiltrando elementos negativos: ')

