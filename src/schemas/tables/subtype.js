module.exports = {
    CreateSubType: `
      mutation CreateSubType($stp_codigo: Int!, $stp_descricao: String!, $company: Int!) {
      createSubType(input:{
        stp_codigo: $stp_codigo 
        stp_descricao: $stp_descricao
        empresa:$company
      }){
        id
        }
      }`,
    BulkSubTypeCreate: ` mutation bulkSubTypeCreate(
        $input: [SubTypeCreateInput!] !
      ) {
        bulkSubTypeCreate(input: $input)
      }`,
    UpdateSubType: `
      mutation UpdateSubType($code: Int, $stp_descricao: String!, $from: String, $company: Int) {
       updateSubType(
         code: $code,
         from: $from,
         company: $company,
         input:{
           stp_descricao: $stp_descricao 
         }
       ){
         id
       }
      }`,
    DeleteSubType:`mutation DeleteSubType(
        $code: Int,
        $from: String,
        $company: Int
      ) {
        deleteSubType(
          code: $code from: $from company: $company
        )
      }`,
    FetchSubType: `query SubType($code: Int, $company: Int!, $from: String) {
        subtype(code:$code, company: $company, from: $from){
            stp_codigo stp_descricao
        }
      }`,
    AllSubTypes: `query SubTypes($company: Int!) {
        subtypes(company: $company){
          stp_codigo
          stp_descricao
        }
      }`,
};
