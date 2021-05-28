'use strict'

const fs = require('fs')

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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  let hour = s.split('', 2).join('')
  const timeSpan = s.slice(s.length - 2, s.length)
  if (hour !== '12' && timeSpan === 'PM') {
    hour = Number(hour) + 12
  } else if (hour === '12' && timeSpan === 'AM') {
    hour = '00'
  }

  let oldHour = s.split('', 2).join('')
  let newHour = `${hour}`
  s = s.replace(oldHour, newHour).replace(timeSpan, '')
  return s
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

  const s = readLine()

  const result = timeConversion(s)

  ws.write(result + '\n')

  ws.end()
}
