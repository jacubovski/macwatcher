const createRelationPUP = `
mutation CreateRelationPUP(
  $produto: Int!
  $unidade_medida: Int!
  $tipo_preco: Int!
  $tipo_medida: Int!
  $valor: Float!
  $relacao_primaria: Float
  $custo: Float
  $margem: Float
  $company: Int!
){ createRelationPUP( input:{
  produto: $produto
  unidade_medida: $unidade_medida
  tipo_preco: $tipo_preco
  tipo_medida: $tipo_medida
  valor: $valor
  relacao_primaria: $relacao_primaria
  custo: $custo
  margem: $margem
  empresa:$company
  }){id}}`;
const updateRelationPUP = `
mutation UpdateRelationPUP(
  $from: String
  $code: Int
  $unidade_medida: Int
  $tipo_preco: Int
  $tipo_medida: Int!
  $valor: Float
  $relacao_primaria: Float
  $custo: Float
  $margem: Float
  $company: Int
  ){
  updateRelationPUP(
    from: $from,
    code: $code, 
    company: $company
    input:{
      unidade_medida: $unidade_medida
      tipo_preco: $tipo_preco
      tipo_medida: $tipo_medida
      valor: $valor
      relacao_primaria: $relacao_primaria
      custo: $custo
      margem: $margem
  }){id}}`;


const deleteRelationPUP = `
  mutation DelteRelationPUP(
    $code: Int,
    $from: String,
    $value: Float,
    $company:Int!
  ){
  deleteRelationPUP(
    code: $code
    from: $from
    value: $value
    company:$company
  )
}`;

module.exports = {
  createRelationPUP,
  updateRelationPUP,
  deleteRelationPUP
}