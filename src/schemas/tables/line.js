module.exports = {
    CreateLine: `
      mutation CreateLine($lin_codigo: Int!, $lin_descricao: String!, $company: Int!) {
      createLine(input:{
        lin_codigo: $lin_codigo 
        lin_descricao: $lin_descricao
        empresa:$company
      }){
        id
        }
      }`,
    BulkLineCreate: ` mutation bulkLineCreate(
        $input: [LineCreateInput!] !
      ) {
        bulkLineCreate(input: $input)
      }`,
    UpdateLine: `
      mutation UpdateLine($code: Int, $lin_descricao: String!, $from: String, $company: Int) {
       updateLine(
         code: $code,
         from: $from,
         company: $company,
         input:{
           lin_descricao: $lin_descricao 
         }
       ){
         id
       }
      }`,
    DeleteLine:`mutation DeleteLine(
        $code: Int,
        $from: String,
        $company: Int
      ) {
        deleteLine(
          code: $code from: $from company: $company
        )
      }`,
    FetchLine: `query Line($code: Int, $company: Int!, $from: String) {
        line(code:$code, company: $company, from: $from){
            lin_codigo lin_descricao
        }
      }`,
    AllLines: `query Lines($company: Int!) {
        lines(company: $company){
          lin_codigo
          lin_descricao
        }
      }`,
};
