const { numbers, months } = require('../common/constants')

const sum = (x, y) => x + y

const vetorConstructor = (begin, finish) => {
  var vetorNumber = []
  var i
  for(i=begin; i<=finish; i++){
    vetorNumber.push(i)
  }
  return vetorNumber
}

const sumVetor = (fn, begin, finish) => {
  const vetorNumber = fn(begin, finish)
  console.log(`\nSum Reduce - Vetor: ${vetorNumber.reduce(sum, 0)}`)
}

const monthsShorterner = (previous, current) => {
  if(previous === '') return current
  else return previous + '/' + current
}

function reduce(begin, finish){
  console.log('\nReduce')
  console.log(`\nSum Reduce: ${numbers.reduce(sum, 0)}`)
  sumVetor(vetorConstructor, begin, finish)
  console.log(`\nMonth Shortener Reduce: ${months.reduce(monthsShorterner, '')}`)
}

module.exports = {
  Reduce: reduce
}