const createPaymentTerm = `
mutation CreatePaymentTerm(
  $ppg_codigo: Int
  $ppg_descricao: String
  $ppg_mostrar:Int
  $ppg_prazo_nfe:Int
  $ppg_grupo_limite:Int
  $ppg_boleto_carteira:String
  $company:Int
) {
createPaymentTerm(input:{
  ppg_codigo: $ppg_codigo 
  ppg_descricao: $ppg_descricao 
  ppg_mostrar:$ppg_mostrar
  ppg_prazo_nfe:$ppg_prazo_nfe
  ppg_grupo_limite:$ppg_grupo_limite
  ppg_boleto_carteira:$ppg_boleto_carteira
  empresa:$company
}){id}}`;
  
const bulkCreatePaymentTerm = `
 mutation BulkPaymentTermCreate(
   $input: [PaymentTermCreateInput!] !
 ) {
   bulkPaymentTermCreate(input: $input)
 }
`;

const updatePaymentTerm = `
mutation UpdatePaymentTerm(
  $from: String,
  $code: Int,
  $ppg_descricao: String,
  $ppg_mostrar: Int,          
  $ppg_grupo_limite: Int,          
  $ppg_prazo_nfe: Int,
  $ppg_boleto_carteira: String,
  $company: Int
  ) {
  updatePaymentTerm(
    from: $from
    code: $code,
    company: $company,
    input:{
      ppg_descricao: $ppg_descricao
      ppg_mostrar:  $ppg_mostrar         
      ppg_grupo_limite:  $ppg_grupo_limite         
      ppg_prazo_nfe:$ppg_prazo_nfe
      ppg_boleto_carteira: $ppg_boleto_carteira
}){ id }}`;

const deletePaymentTerm = `
mutation DeletePaymentTerm(
  $code: Int,
  $from: String,
  $company:Int!
){
deletePaymentTerm(
  code: $code
  from: $from
  company:$company
)
}`;
const FetchPaymentTerm = `
  query PaymentTerm($code: Int!, $company: Int!) {
    paymentTerm(code: $code, company: $company) {
      ppg_codigo
      ppg_descricao
      ppg_mostrar
      ppg_prazo_nfe
      ppg_grupo_limite
      ppg_boleto_carteira
      plots {
        ppp_parcela
        ppp_dias
        ppp_receb_dia
      }
    }
  }`;
const AllPaymentTerms = `
query PaymentTerms($company: Int!) {
  paymentTerms(company: $company) {
    ppg_codigo
    ppg_descricao
    ppg_mostrar
    ppg_prazo_nfe
    ppg_grupo_limite
    ppg_boleto_carteira
    plots {
      ppp_parcela
      ppp_dias
      ppp_receb_dia
    }
  }
}`;

module.exports = {
  createPaymentTerm,
  updatePaymentTerm,
  deletePaymentTerm,
  bulkCreatePaymentTerm,
  FetchPaymentTerm,
  AllPaymentTerms,
};