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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
  let arr = []
  let size = n
  for (let i = 0; i <= n; i++) {
    arr.push(`${spaces(size)}${hashtags(i)}`)
    size--
  }
  arr.shift()
  arr.forEach(value => console.log(value))
}

function spaces(n) {
  let arr = []
  for (let i = 0; i < n; i++) {
    arr.push(' ')
  }
  let k
  n == 0 ? (k = '') : (k = arr.reduce((acc, att) => att + acc))
  return k
}

function hashtags(n) {
  let arr = []
  for (let i = 0; i < n; i++) {
    arr.push('#')
  }
  let k
  n == 0 ? (k = '') : (k = arr.reduce((acc, att) => att + acc))
  return k
}

function main() {
  const n = parseInt(readLine().trim(), 10)

  staircase(n)
}
