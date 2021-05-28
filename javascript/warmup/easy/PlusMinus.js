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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  let pos = 0
  let neg = 0
  let zero = 0

  arr.forEach(value => {
    value == 0 ? zero++ : value > 0 ? pos++ : neg++
  })
  console.log((pos / arr.length).toPrecision(6))
  console.log((neg / arr.length).toPrecision(6))
  console.log((zero / arr.length).toPrecision(6))
}

function main() {
  const n = parseInt(readLine().trim(), 10)

  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map(arrTemp => parseInt(arrTemp, 10))

  plusMinus(arr)
}
