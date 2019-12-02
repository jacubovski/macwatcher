const createPaymentForm = `
mutation CreatePaymentForm(
  $fpg_codigo: Int!
  $fpg_descricao: String!
  $fpg_grupo_limite:Int
  $fpg_arq_destino:Int
  $fpg_desc_cartao: Float
  $fpg_cod_fpg_acbr: Int
  $fpg_cnpj_adm:String
  $fpg_bandeira:Int
  $company: Int!
  ){
  createPaymentForm(input:{
  fpg_codigo: $fpg_codigo
  fpg_descricao: $fpg_descricao
  fpg_grupo_limite:$fpg_grupo_limite
  fpg_arq_destino:$fpg_arq_destino
  fpg_desc_cartao: $fpg_desc_cartao
  fpg_cod_fpg_acbr: $fpg_cod_fpg_acbr
  fpg_cnpj_adm:$fpg_cnpj_adm
  fpg_bandeira:$fpg_bandeira
  empresa:$company
  }){id}}`;

const bulkCreatePaymentForm = `
 mutation BulkPaymentFormCreate(
   $input: [PaymentFormCreateInput!] !
 ) {
   bulkPaymentFormCreate(input: $input)
 }
`;

const updatePaymentForm = `
mutation UpdatePaymentForm(
  $from: String
  $code: Int
  $fpg_descricao: String!
  $fpg_grupo_limite: Int
  $fpg_arq_destino: Int          
  $fpg_desc_cartao: Float          
  $fpg_cod_fpg_acbr: Int
  $fpg_cnpj_adm: String
  $fpg_bandeira: Int  
  $company: Int!
  ) {
  updatePaymentForm(
    from: $from
    code: $code,
    company: $company,
    input:{
      fpg_descricao: $fpg_descricao
      fpg_grupo_limite: $fpg_grupo_limite
      fpg_arq_destino: $fpg_arq_destino          
      fpg_desc_cartao: $fpg_desc_cartao          
      fpg_cod_fpg_acbr: $fpg_cod_fpg_acbr
      fpg_cnpj_adm: $fpg_cnpj_adm
      fpg_bandeira: $fpg_bandeira  
  }){ id }}`;

const deletePaymentForm = `
mutation DeletePaymentForm(
  $code: Int,
  $from: String,
  $company:Int!
){
deletePaymentForm(
  code: $code
  from: $from
  company:$company
)
}`;

const FetchPaymentForm = `
query FetchPaymentForm($code: Int!, $company: Int!) {
  paymentForm(code: $code, company: $company) {
    fpg_codigo
    fpg_descricao
    fpg_grupo_limite
    fpg_arq_destino
    fpg_desc_cartao
    fpg_cod_fpg_acbr
    fpg_cnpj_adm
    fpg_bandeira
  }
}
`;
const AllPaymentForms = `
query FetchPaymentForms($company: Int!) {
  paymentForms(company: $company) {
    fpg_codigo
    fpg_descricao
    fpg_grupo_limite
    fpg_arq_destino
    fpg_desc_cartao
    fpg_cod_fpg_acbr
    fpg_cnpj_adm
    fpg_bandeira
  }
}
`;
module.exports = {
  createPaymentForm,
  updatePaymentForm,
  deletePaymentForm,
  bulkCreatePaymentForm,
  FetchPaymentForm,
  AllPaymentForms,
};