/**
 * Funções Higher Order
 */

const insertTataraneto = (tataraneto) => {
    console.log('\ninsertTataraneto')
    console.log(`Nome: ${tataraneto.nome}`)
    console.log(`Sobrenome: ${tataraneto.sobrenome}`)
  }
  
  const insertBisneto = (bisneto, fn, tataraneto) => {
    console.log('\ninsertBisneto')
    console.log(`Nome: ${bisneto.nome}`)
    console.log(`Sobrenome: ${bisneto.sobrenome}`)
    fn(tataraneto)
  }
  
  const insertNeto = (neto, fn, bisneto, tataraneto) => {
    console.log('\ninsertNeto')
    console.log(`Nome: ${neto.nome}`)
    console.log(`Sobrenome: ${neto.sobrenome}`)
    fn(bisneto, insertTataraneto, tataraneto)
  }
  
  const insertFilho = (filho, fn, neto, bisneto, tataraneto) => {
    console.log('\ninsertFilho')
    console.log(`Nome: ${filho.nome}`)
    console.log(`Sobrenome: ${filho.sobrenome}`)
    fn(neto, insertBisneto, bisneto, tataraneto)
  }
  
  const insertPai = (pai, fn, filho, neto, bisneto, tataraneto) => {
    console.log('\ninsertPai')
    console.log(`Nome: ${pai.nome}`)
    console.log(`Sobrenome: ${pai.sobrenome}`)
    fn(filho, insertNeto, neto, bisneto, tataraneto)
  }
  
  function auditingParent(pai, filho, neto, bisneto, tataraneto) {
    console.log('\n')
    console.log('Funções de Higher Order.')
    console.log('insertFamilia')
    insertPai(pai, insertFilho, filho, neto, bisneto, tataraneto)
  }
  
  module.exports = {
    AuditingParent: auditingParent
  }