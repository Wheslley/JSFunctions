const { numbers } = require('../common/constants')

const isBiggerThanFive = value => value > 5;

function filter(){
  console.log(`Is Bigger Than Five: ${numbers.filter(isBiggerThanFive)}`)
  console.log(`Is Bigger Than Seven: ${numbers.filter((number) => number < 7)}`)
}

module.exports = {
  Filter : filter
}