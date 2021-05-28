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

const createString = (_, idx, arr) =>
  ''.padStart(idx + 1, '#').padStart(arr.length, ' ')

function staircase(n) {
  console.log([...Array(n)].map(createString).join('\n'))
}

function main() {
  const n = parseInt(readLine().trim(), 10)

  staircase(n)
}
