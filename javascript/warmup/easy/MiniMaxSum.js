'use strict'

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin
})

process.stdin.on('end', function () {
  inputString = inputString.split('\n')

  main()
})

function readLine() {
  return inputString[currentLine++]
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  let res = arr.reduce((acc, att) => att + acc)
  let arrRes = []
  let maior, menor, aux
  arr.forEach(value => arrRes.push(res - value))
  arrRes.forEach(value => {
    aux = value
    maior == null ? (maior = value) : ''
    menor == null ? (menor = value) : ''
    aux > maior ? (maior = aux) : aux < menor ? (menor = value) : ''
  })
  console.log(menor, maior)
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map(arrTemp => parseInt(arrTemp, 10))

  miniMaxSum(arr)
}
