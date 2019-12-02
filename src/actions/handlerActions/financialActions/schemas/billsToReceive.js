const createBillsToReceive = `
mutation CreateBillsToReceive(
  $crc_contador: Int
  $crc_data_venc: String
  $crc_data_pgto: String
  $crc_mov_tipo: Int
  $crc_mov_loja: Int
  $crc_mov_cod: Int
  $crc_parcela: Int
  $crc_dup_numero: Int
  $crc_dup_ano: Int
  $crc_dup_seq: Int
  $crc_serie: String
  $crc_numero: Int
  $crc_loja: Int
  $crc_cliente: Int
  $crc_prazo_pgto: Int
  $crc_valor_doc: Float
  $crc_vendedor: Int
  $crc_historico: Int
  $crc_total_parcela: Int
  $crc_importado: Boolean
  $crc_valor_pago: Float
  $crc_centro_custo: Int
  $crc_forma_pgto: Int
  $crc_observacoes: String
  $crc_bco_boleto: Int
  $crc_saldo: Boolean
  $crc_perc_multa: Float
  $crc_vlr_multa: Float
  $crc_juros_dia: Float
  $crc_cartao_pago: Boolean
  $crc_valor_juros: Float
  $crc_boleta: Int
  $crc_caixa: Int
  $crc_status_parcela: String
  $company: Int!
  ) {
  createBillsToReceive(input:{
    crc_contador: $crc_contador
    crc_data_venc: $crc_data_venc
    crc_data_pgto: $crc_data_pgto
    crc_mov_tipo: $crc_mov_tipo
    crc_mov_loja: $crc_mov_loja
    crc_mov_cod: $crc_mov_cod
    crc_mov_seq: $crc_parcela
    crc_dup_numero: $crc_dup_numero
    crc_dup_ano: $crc_dup_ano
    crc_dup_seq: $crc_dup_seq
    crc_serie: $crc_serie
    crc_numero: $crc_numero
    crc_loja: $crc_loja
    crc_cliente: $crc_cliente
    crc_prazo_pgto: $crc_prazo_pgto
    crc_valor_doc: $crc_valor_doc
    crc_vendedor: $crc_vendedor
    crc_historico: $crc_historico
    crc_total_parcela: $crc_total_parcela
    crc_importado: $crc_importado
    crc_valor_pago: $crc_valor_pago
    crc_centro_custo: $crc_centro_custo
    crc_forma_pgto: $crc_forma_pgto
    crc_observacoes: $crc_observacoes
    crc_bco_boleto: $crc_bco_boleto
    crc_saldo: $crc_saldo
    crc_perc_multa: $crc_perc_multa
    crc_vlr_multa: $crc_vlr_multa
    crc_juros_dia: $crc_juros_dia
    crc_cartao_pago: $crc_cartao_pago
    crc_valor_juros: $crc_valor_juros
    crc_boleta: $crc_boleta
    crc_caixa: $crc_caixa
    crc_status_parcela: $crc_status_parcela
    empresa: $company
  }){id}}`;

const bulkCreateBillsToReceive = `
  mutation BulkBillsToReceiveCreate(
    $input: [BillsToReceiveCreateInput!]!
  ){
    bulkBillsToReceiveCreate(input:$input)
  }
`;

const updateBillsToReceive = `
mutation UpdateBillsToReceive(
  $from: String
  $code: Int
  $crc_data_venc: String
  $crc_data_pgto: String
  $crc_mov_tipo: Int
  $crc_mov_loja: Int
  $crc_mov_cod: Int
  $crc_parcela: Int
  $crc_dup_numero: Int
  $crc_dup_ano: Int
  $crc_dup_seq: Int
  $crc_serie: String
  $crc_numero: Int
  $crc_loja: Int
  $crc_cliente: Int
  $crc_prazo_pgto: Int
  $crc_valor_doc: Float
  $crc_vendedor: Int
  $crc_historico: Int
  $crc_total_parcela: Int
  $crc_importado: Boolean
  $crc_valor_pago: Float
  $crc_centro_custo: Int
  $crc_forma_pgto: Int
  $crc_observacoes: String
  $crc_bco_boleto: Int
  $crc_saldo: Boolean
  $crc_perc_multa: Float
  $crc_vlr_multa: Float
  $crc_juros_dia: Float
  $crc_cartao_pago: Boolean
  $crc_valor_juros: Float
  $crc_boleta: Int
  $crc_caixa: Int
  $crc_status_parcela: String
  $company: Int!
  ) {
  updateBillsToReceive(
    from: $from
    code: $code,
    company: $company,
    input:{
    crc_data_venc: $crc_data_venc
    crc_data_pgto: $crc_data_pgto
    crc_mov_tipo: $crc_mov_tipo
    crc_mov_loja: $crc_mov_loja
    crc_mov_cod: $crc_mov_cod
    crc_parcela: $crc_parcela
    crc_dup_numero: $crc_dup_numero
    crc_dup_ano: $crc_dup_ano
    crc_dup_seq: $crc_dup_seq
    crc_serie: $crc_serie
    crc_numero: $crc_numero
    crc_loja: $crc_loja
    crc_cliente: $crc_cliente
    crc_prazo_pgto: $crc_prazo_pgto
    crc_valor_doc: $crc_valor_doc
    crc_vendedor: $crc_vendedor
    crc_historico: $crc_historico
    crc_total_parcela: $crc_total_parcela
    crc_importado: $crc_importado
    crc_valor_pago: $crc_valor_pago
    crc_centro_custo: $crc_centro_custo
    crc_forma_pgto: $crc_forma_pgto
    crc_observacoes: $crc_observacoes
    crc_bco_boleto: $crc_bco_boleto
    crc_saldo: $crc_saldo
    crc_perc_multa: $crc_perc_multa
    crc_vlr_multa: $crc_vlr_multa
    crc_juros_dia: $crc_juros_dia
    crc_cartao_pago: $crc_cartao_pago
    crc_valor_juros: $crc_valor_juros
    crc_boleta: $crc_boleta
    crc_caixa: $crc_caixa
    crc_status_parcela: $crc_status_parcela
  }){ id }}`;

const deleteBillsToReceive = `
mutation DelteBillsToReceive(
  $code: Int,
  $from: String,
  $company:Int!
){
deleteBillsToReceive(
  code: $code
  from: $from
  company:$company
)
}`;

module.exports = {
  createBillsToReceive,
  updateBillsToReceive,
  deleteBillsToReceive,
  bulkCreateBillsToReceive
}