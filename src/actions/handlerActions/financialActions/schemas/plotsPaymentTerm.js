const createPlotsPaymentTerm = `
mutation CreatePlotsPaymentTerm(
  $input: [createPlotsPaymentTermInput! ] !
) {
createPlotsPaymentTerm(input:$input){id}}`;

const bulkCreatePlotsPaymentTerm = `
 mutation BulkPlotsPaymentTermCreate(
   $input: [createPlotsPaymentTermInput!] !
 ) {
   bulkPlotsPaymentTermCreate(input: $input)
 }`;

const updatePlotsPaymentTerm = `
mutation UpdatePlotsPaymentTerm(
  $from: String
  $code: Int
  $plot: Int
  $ppp_parcela: Int
  $ppp_dias: Int
  $ppp_receb_dia: Boolean
  $company: Int
  ) {
  updatePlotsPaymentTerm(
    from: $from
    code: $code,
    plot: $plot,
    company: $company,
    input:{
      ppp_parcela: $ppp_parcela
      ppp_dias:  $ppp_dias
      ppp_receb_dia: $ppp_receb_dia
}){ id }}`;

const deletePlotsPaymentTerm = `
mutation DeletePlotsPaymentTerm(
  $code: Int,
  $from: String,
  $plot: Int,
  $company:Int!
){
deletePlotsPaymentTerm(
  code: $code
  from: $from
  plot: $plot
  company:$company
)
}`;

module.exports = {
  createPlotsPaymentTerm,
  updatePlotsPaymentTerm,
  deletePlotsPaymentTerm,
  bulkCreatePlotsPaymentTerm,
};
