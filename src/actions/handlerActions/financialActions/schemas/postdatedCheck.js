const createPostdatedCheck = `
mutation CreatePostdatedCheck(
  $chq_contador: Int
  $chq_data_vencimento: String
  $chq_tipo: Int
  $chq_data_recebimento: String
  $chq_cli_forn: Int
  $chq_mcr_mcp_auto: Int
  $chq_mrc_mcp_seq: Int
  $chq_origem_destino: Int
  $chq_banco: String
  $chq_agencia: String
  $chq_numero_cheque: String
  $chq_correntista: String
  $chq_caixa: Int
  $chq_loja: Int
  $chq_valor: Float
  $chq_situacao: Int
  $chq_vendedor: Int
  $chq_observacoes: String
  $chq_data_pgto_comissao: String
  $chq_data_deposito: String
  $chq_banco_deposito: Int
  $company: Int!
  ) {
  createPostdatedCheck(input:{
    chq_contador: $chq_contador
    chq_data_vencimento: $chq_data_vencimento
    chq_tipo: $chq_tipo
    chq_data_recebimento: $chq_data_recebimento
    chq_cli_forn: $chq_cli_forn
    chq_mcr_mcp_auto: $chq_mcr_mcp_auto
    chq_mrc_mcp_seq: $chq_mrc_mcp_seq
    chq_origem_destino: $chq_origem_destino
    chq_banco: $chq_banco
    chq_agencia: $chq_agencia
    chq_numero_cheque: $chq_numero_cheque
    chq_correntista: $chq_correntista
    chq_caixa: $chq_caixa
    chq_loja: $chq_loja
    chq_valor: $chq_valor
    chq_situacao: $chq_situacao
    chq_vendedor: $chq_vendedor
    chq_observacoes: $chq_observacoes
    chq_data_pgto_comissao: $chq_data_pgto_comissao
    chq_data_deposito: $chq_data_deposito
    chq_banco_deposito: $chq_banco_deposito
    empresa: $company
  }){id}}`;
  
const updatePostdatedCheck = `
mutation UpdatePostdatedCheck(
  $from: String
  $code: Int
  $chq_data_vencimento: String
  $chq_tipo: Int
  $chq_data_recebimento: String
  $chq_cli_forn: Int
  $chq_mcr_mcp_auto: Int
  $chq_mrc_mcp_seq: Int
  $chq_origem_destino: Int
  $chq_banco: String
  $chq_agencia: String
  $chq_numero_cheque: String
  $chq_correntista: String
  $chq_caixa: Int
  $chq_loja: Int
  $chq_valor: Float
  $chq_situacao: Int
  $chq_vendedor: Int
  $chq_observacoes: String
  $chq_data_pgto_comissao: String
  $chq_data_deposito: String
  $chq_banco_deposito: Int
  $company: Int!
  ) {
  updatePostdatedCheck(
    from: $from
    code: $code,
    company: $company,
    input:{
      chq_data_vencimento: $chq_data_vencimento
      chq_tipo: $chq_tipo
      chq_data_recebimento: $chq_data_recebimento
      chq_cli_forn: $chq_cli_forn
      chq_mcr_mcp_auto: $chq_mcr_mcp_auto
      chq_mrc_mcp_seq: $chq_mrc_mcp_seq
      chq_origem_destino: $chq_origem_destino
      chq_banco: $chq_banco
      chq_agencia: $chq_agencia
      chq_numero_cheque: $chq_numero_cheque
      chq_correntista: $chq_correntista
      chq_caixa: $chq_caixa
      chq_loja: $chq_loja
      chq_valor: $chq_valor
      chq_situacao: $chq_situacao
      chq_vendedor: $chq_vendedor
      chq_observacoes: $chq_observacoes
      chq_data_pgto_comissao: $chq_data_pgto_comissao
      chq_data_deposito: $chq_data_deposito
      chq_banco_deposito: $chq_banco_deposito
  }){ id }}`;

const deletePostdatedCheck = `
mutation DeltePostdatedCheck(
  $code: Int,
  $from: String,
  $company:Int!
){
deletePostdatedCheck(
  code: $code
  from: $from
  company:$company
)
}`;

module.exports = {
  createPostdatedCheck,
  updatePostdatedCheck,
  deletePostdatedCheck
}