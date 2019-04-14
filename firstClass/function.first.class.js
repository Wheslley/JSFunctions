/**
 * Funcoes de Primeira Classe
 */

const sum = (x, y) => {
    return x + y
  }
  
  const subtract = (x, y) => {
    return x - y
  }
  
  const multiply = (x, y) => {
    return x * y
  }
  
  const divide = (x, y) => {
    if(y > 0) return x / y
    else return -1
  }
  
  const execute = (fn, x, y) => {
    return fn(x, y)
  }
  
  function calcule(){
    console.log('Funções de Primeira Classe.')
    console.log(`Sum: ${execute(sum, 4, 2)}`)
    console.log(`Subtract: ${execute(subtract, 4, 2)}`)
    console.log(`Multiply: ${execute(multiply, 4, 2)}`)
    console.log(`Divide: ${execute(divide, 4, 2)}`)
  }
  
  module.exports = {
    Calcule : calcule
  }