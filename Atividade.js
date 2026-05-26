notas = [25, 10, 15]

console.log('Calculando a média aritmética do vetor: ')
const media = notas.reduce((soma, atual) => soma + atual, 0) / 3
console.log(media)

