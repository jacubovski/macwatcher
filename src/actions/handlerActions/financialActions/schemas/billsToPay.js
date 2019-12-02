const createBillsToPay = `
mutation CreateBillsToPay(
  $cpg_contador: Int
  $cpg_data_vencimento: String
  $cpg_data_pgto: String
  $cpg_mov_tipo: Int
  $cpg_mov_codigo: Int
  $cpg_serie_nf: String
  $cpg_numero_nf: Int
  $cpg_origem_credor: Int
  $cpg_valor_doc: Float
  $cpg_parcela: Int
  $cpg_tot_parc: Int
  $cpg_valor_pago: Float
  $cpg_observacoes: String
  $cpg_usuario: String
  $cpg_ano_compet: Int
  $cpg_mes_compet: Int
  $cpg_saldo: String
  $cpg_duplicata: String
  $cpg_dup_seq: Int
  $cpg_forma_pgto: Int
  $cpg_centro_custo: Int
  $cpg_historico: Int
  $cpg_loja: Int
  $cpg_credor: Int
  $cpg_nome_credor: String
  $company: Int
  ) {
  createBillsToPay(input:{
     cpg_contador: $cpg_contador
     cpg_data_vencimento: $cpg_data_vencimento
     cpg_data_pgto: $cpg_data_pgto
     cpg_mov_tipo: $cpg_mov_tipo
     cpg_mov_codigo: $cpg_mov_codigo
     cpg_serie_nf: $cpg_serie_nf
     cpg_numero_nf: $cpg_numero_nf
     cpg_origem_credor: $cpg_origem_credor
     cpg_valor_doc: $cpg_valor_doc
     cpg_parcela: $cpg_parcela
     cpg_tot_parc: $cpg_tot_parc
     cpg_valor_pago: $cpg_valor_pago
     cpg_observacoes: $cpg_observacoes
     cpg_usuario: $cpg_usuario
     cpg_ano_compet: $cpg_ano_compet
     cpg_mes_compet: $cpg_mes_compet
     cpg_saldo: $cpg_saldo
     cpg_duplicata: $cpg_duplicata
     cpg_dup_seq: $cpg_dup_seq
     cpg_forma_pgto: $cpg_forma_pgto
     cpg_centro_custo: $cpg_centro_custo
     cpg_historico: $cpg_historico
     cpg_loja: $cpg_loja
     cpg_credor: $cpg_credor
     cpg_nome_credor: $cpg_nome_credor
     empresa:$company
  }){id}}`;

  const bulkCreateBillsToPay = `
  mutation BulkBillsToPayCreate(
    $input: [BillsToPayCreateInput!]!
  ){
    bulkBillsToPayCreate(input:$input)
  }
`;

const updateBillsToPay = `
mutation UpdateBillsToPay(
    $from: String
    $code: Int
    $cpg_data_vencimento: String
    $cpg_data_pgto: String
    $cpg_mov_tipo: Int
    $cpg_mov_codigo: Int
    $cpg_serie_nf: String
    $cpg_numero_nf: Int
    $cpg_origem_credor: Int
    $cpg_valor_doc: Float
    $cpg_parcela: Int
    $cpg_tot_parc: Int
    $cpg_valor_pago: Float
    $cpg_observacoes: String
    $cpg_usuario: String
    $cpg_ano_compet: Int
    $cpg_mes_compet: Int
    $cpg_saldo: String
    $cpg_duplicata: String
    $cpg_dup_seq: Int
    $cpg_forma_pgto: Int
    $cpg_centro_custo: Int
    $cpg_historico: Int
    $cpg_loja: Int
    $cpg_credor: Int
    $cpg_nome_credor: String!
    $company: Int!
    ) {
 updateBillsToPay(
  from: $from
  code: $code,
  company: $company,
  input:{
    cpg_data_vencimento: $cpg_data_vencimento
    cpg_data_pgto: $cpg_data_pgto
    cpg_mov_tipo: $cpg_mov_tipo
    cpg_mov_codigo: $cpg_mov_codigo
    cpg_mov_seq: $cpg_mov_seq
    cpg_id_movimento: $cpg_id_movimento
    cpg_serie_nf: $cpg_serie_nf
    cpg_numero_nf: $cpg_numero_nf
    cpg_origem_credor: $cpg_origem_credor
    cpg_valor_doc: $cpg_valor_doc
    cpg_parcela: $cpg_parcela
    cpg_tot_parc: $cpg_tot_parc
    cpg_valor_pago: $cpg_valor_pago
    cpg_observacoes: $cpg_observacoes
    cpg_usuario: $cpg_usuario
    cpg_ano_compet: $cpg_ano_compet
    cpg_mes_compet: $cpg_mes_compet
    cpg_saldo: $cpg_saldo
    cpg_duplicata: $cpg_duplicata
    cpg_dup_seq: $cpg_dup_seq
    cpg_forma_pgto: $cpg_forma_pgto
    cpg_centro_custo: $cpg_centro_custo
    cpg_historico: $cpg_historico
    cpg_loja: $cpg_loja
    cpg_credor: $cpg_credor
    cpg_nome_credor: $cpg_nome_credor
  }){id}}`;


const deleteBillsToPay = `
mutation DelteBillsToPay(
   $code: Int!,
   $company: Int!,
   $from: String,
  ) { 
  deleteBillsToPay(
    from:$from,
    code: $code,
    company: $company
  )
}`;

module.exports = {
  createBillsToPay,
  updateBillsToPay,
  deleteBillsToPay,
  bulkCreateBillsToPay
};