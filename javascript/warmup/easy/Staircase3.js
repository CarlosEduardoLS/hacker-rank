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

function staircase(n) {
  let arr = []
  for (let i = 0; i <= n; i++) {
    const v = [...Array(n - i).fill(' '), ...Array(i).fill('#')].join('')
    arr.push(v)
  }
  arr.shift()
  arr.forEach(value => console.log(value))
}

function main() {
  const n = parseInt(readLine().trim(), 10)
  staircase(n)
}
