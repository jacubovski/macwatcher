module.exports = {
  CreateHistoric: `
    mutation CreateHistoric(
      $hst_codigo: Int!,
      $hst_descricao: String!,
      $hst_fixovariavel: String!,
      $hst_previsao: Float,
      $company: Int!
    ) {
      createHistoric(input: {
        hst_codigo: $hst_codigo
        hst_descricao: $hst_descricao
        hst_fixovariavel: $hst_fixovariavel
        hst_previsao: $hst_previsao
        empresa: $company
      }) {
        id
      }
    }`,
  BulkHistoricCreater: `mutation bulkHistoricCreate(
    $input: [HistoricCreateInput!]!
  ){
    bulkHistoricCreate(input:$input)
  }`,
  UpdateHistoric: `
   mutation UpdateHistoric(
     $code: Int,
     $from: String,
     $company: Int $hst_descricao: String!,
     $hst_fixovariavel: String!,
     $hst_previsao: Float
   ) {
     updateHistoric(
       code: $code, from: $from, company: $company,
       input: {
         hst_descricao: $hst_descricao,
         hst_fixovariavel: $hst_fixovariavel,
         hst_previsao: $hst_previsao
       }
     ) {
       id
     }
   }`,
  DeleteHistoric: `
    mutation DeleteHistoric(
      $code: Int,
      $from: String,
      $company: Int
    ) {
      deleteHistoric(
        code: $code from: $from company: $company
      )
    }`,
  FetchHistoric: `query Historic($code: Int, $company: Int!, $from: String) {
    historic(code: $code, company: $company, from: $from) {
       hst_codigo
       hst_descricao
       hst_fixovariavel
       hst_previsao
    }}`,
  AllHistorics: `query Historics($company: Int!) {
    historics(company: $company) {
       hst_codigo
       hst_descricao
       hst_fixovariavel
       hst_previsao
    }}`,
};
