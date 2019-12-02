module.exports = {
    CreateTypePrice: `
      mutation CreateTypePrice(
        $prc_codigo: Int!, 
        $prc_descricao: String!, 
        $prc_descontotabela:Boolean!, 
        $company: Int!
      ){
        createTypePrice( input:{
          prc_codigo: $prc_codigo 
          prc_descricao: $prc_descricao 
          prc_descontotabela: $prc_descontotabela 
          empresa:$company
      }){id}}`,
    BulkTypePriceCreate: ` mutation bulkTypePriceCreate(
        $input: [TypePriceCreateInput!]!
      ){
        bulkTypePriceCreate(input:$input)
      }`,
    UpdateTypePrice: `
      mutation UpdateTypePrice(
        $code: Int,
        $from: String,
        $company: Int,
        $prc_descricao: String!,
        $prc_descontotabela: Boolean!
      ) {
        updateTypePrice(
          code: $code, from: $from, company: $company, input: {
            prc_descricao: $prc_descricao
            prc_descontotabela: $prc_descontotabela
          }) {
          id
        }
      }`,
    DeleteTypePrice: `mutation DeleteTypePrice(
          $code: Int,
          $from: String,
          $company: Int
        ) {
          deleteTypePrice(
            code: $code from: $from company: $company
          )
        }`,
    FetchTypePrice: `query TypePrice($code: Int, $company: Int!, $from: String) {
      typeprice(code:$code, company: $company, from: $from){
          prc_codigo prc_descricao prc_descontotabela
      }}`,
    AllTypePrices: `query TypePrices($company: Int!) {
        typeprices(company: $company){
          prc_codigo prc_descricao prc_descontotabela
      }}`,
};
