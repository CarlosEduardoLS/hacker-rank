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
  const ePosMeioDia = s.includes('PM')
  const listTime = s.replace(/PM|AM/g, '').split(':')
  if (listTime[0] != '12' && ePosMeioDia) {
    listTime[0] = `${Number(listTime[0]) + 12}`
  } else if (listTime[0] == '12' && !ePosMeioDia) {
    listTime[0] = '00'
  }
  return listTime.join(':')
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

  const s = readLine()

  const result = timeConversion(s)

  ws.write(result + '\n')

  ws.end()
}
