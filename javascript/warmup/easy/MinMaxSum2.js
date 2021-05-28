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
  const sums = arr.map((_, im) =>
    arr.reduce((a, c, ir) => (im === ir ? a + 0 : a + c), 0)
  )

  console.log(Math.min(...sums), Math.max(...sums))
}

function main() {
  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map(arrTemp => parseInt(arrTemp, 10))

  miniMaxSum(arr)
}
