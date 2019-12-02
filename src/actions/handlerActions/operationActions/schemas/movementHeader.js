const createMovementHeader = `
mutation CreateMovementHeader(
  $hdmov_codigo: Int!
  $hdmov_tipo: Int!
  $hdmov_data: String!
  $hdmov_desc_perc: Float
  $hdmov_desc_valor: Float
  $hdmov_valor_frete: Float
  $hdmov_total_produtos: Float!
  $hdmov_valor_final: Float!
  $hdmov_valor_liquido: Float
  $hdmov_tipo_desc: String
  $hdmov_for_cli:Int!
  $hdmov_loja:Int!
  $hdmov_tipo_preco: Int!
  $hdmov_prazo_pgto: Int!
  $hdmov_vendedor: Int!
  $hdmov_serie_nf_e: Int
  $hdmov_numero_nf_e: Int
  $hdmov_serie_nfc_e: Int
  $hdmov_numero_nfc_e: Int
  $company: Int!
) {
  createMovementHeader(input:{
    hdmov_codigo: $hdmov_codigo
    hdmov_tipo: $hdmov_tipo
    hdmov_data: $hdmov_data
    hdmov_desc_perc: $hdmov_desc_perc
    hdmov_desc_valor: $hdmov_desc_valor
    hdmov_valor_final: $hdmov_valor_final
    hdmov_valor_frete: $hdmov_valor_frete
    hdmov_total_produtos: $hdmov_total_produtos
    hdmov_valor_liquido: $hdmov_valor_liquido
    hdmov_tipo_desc: $hdmov_tipo_desc
    hdmov_for_cli:$hdmov_for_cli
    hdmov_loja:$hdmov_loja
    hdmov_tipo_preco: $hdmov_tipo_preco
    hdmov_prazo_pgto: $hdmov_prazo_pgto
    hdmov_vendedor: $hdmov_vendedor
    hdmov_serie_nf_e: $hdmov_serie_nf_e
    hdmov_numero_nf_e: $hdmov_numero_nf_e
    hdmov_serie_nfc_e: $hdmov_serie_nfc_e
    hdmov_numero_nfc_e: $hdmov_numero_nfc_e
    empresa: $company
  }){ id }
}
`;
  
const updateMovementHeader = `
mutation UpdateMovementHeader(
  $from: String
  $code: Int
  $hdmov_data: String!
  $hdmov_desc_perc: Float
  $hdmov_desc_valor: Float
  $hdmov_valor_frete: Float
  $hdmov_total_produtos: Float!
  $hdmov_valor_final: Float!
  $hdmov_valor_liquido: Float!
  $hdmov_for_cli:Int!
  $hdmov_loja:Int!
  $hdmov_tipo_preco: Int!
  $hdmov_prazo_pgto: Int!
  $hdmov_vendedor: Int!
  $company: Int!
  ) {
  updateMovementHeader(
    from: $from
    code: $code,
    company: $company,
    input:{
      hdmov_data: $hdmov_data
      hdmov_desc_perc: $hdmov_desc_perc
      hdmov_desc_valor: $hdmov_desc_valor
      hdmov_valor_frete: $hdmov_valor_frete
      hdmov_total_produtos: $hdmov_total_produtos
      hdmov_valor_final: $hdmov_valor_final
      hdmov_valor_liquido: $hdmov_valor_liquido
      hdmov_for_cli:$hdmov_for_cli
      hdmov_loja:$hdmov_loja
      hdmov_tipo_preco: $hdmov_tipo_preco
      hdmov_prazo_pgto: $hdmov_prazo_pgto
      hdmov_vendedor: $hdmov_vendedor
  }){ id }}`;

const deleteMovementHeader = `
mutation DeleteMovementHeader(
  $code: Int,
  $from: String,
  $type:Int!,
  $company:Int!
){
deleteMovementHeader(
  code: $code
  from: $from
  company:$company
  type:$type
)
}`;

module.exports = {
  createMovementHeader,
  updateMovementHeader,
  deleteMovementHeader
}