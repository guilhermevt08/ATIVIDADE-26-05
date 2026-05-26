const vetorNumeros = [10, 20, 30, 40, 50]

console.log('Exibindo todos os elementos : ')
console.log(vetorNumeros)

console.log('\nExibindo apenas o primeiro elemento: ')
console.log(vetorNumeros[0])

console.log('\nExibindo apenas o segundo elemento: ')
console.log(vetorNumeros[1])

console.log('\nExibindo apenas o terceiro elemento: ')
console.log(vetorNumeros[2])

console.log('\nExibindo apenas o quarto elemento: ')
console.log(vetorNumeros[3])

console.log('\nAdicionando um elemento no final do vetor: ')
vetorNumeros.push(60)
console.log(vetorNumeros)

console.log('Adicionando um elemento no inicio do vetor: ')
vetorNumeros.unshift(0)
console.log(vetorNumeros)

//  Remova apenas o ultimo elemento do vetor:
console.log('\nRemover um elemento no final do vetor: ')
vetorNumeros.pop()
console.log(vetorNumeros)

console.log('\nRemover um elemento no início do vetor: ')
vetorNumeros.shift()
console.log(vetorNumeros)