/**
 * Map
 */

const { numbers, students, teachers } = require('../common/constants')

const square = x => x * x;

const byName = (obj) => obj.name;
const byNames = (list) => list.map(byName)

function map(){
  console.log(`\nSquare Numbers: ${numbers.map(square)}`)
  console.log(`\nGet Name Students: ${byNames(students)}`)
  console.log(`\nGet Name Teachers: ${byNames(teachers)}`)
}

module.exports = {
  FunctionMap : map
}