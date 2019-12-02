module.exports = {
    CreateType: `
      mutation CreateType($tp_codigo: Int!, $tp_descricao: String!, $company: Int!) {
      createType(input:{
        tp_codigo: $tp_codigo 
        tp_descricao: $tp_descricao
        empresa:$company
      }){
        id
        }
      }`,
    BulkTypeCreate: ` mutation bulkTypeCreate(
        $input: [TypeCreateInput!] !
      ) {
        bulkTypeCreate(input: $input)
      }`,
    UpdateType: `
      mutation UpdateType($code: Int, $tp_descricao: String!, $from: String, $company: Int) {
       updateType(
         code: $code,
         from: $from,
         company: $company,
         input:{
           tp_descricao: $tp_descricao 
         }
       ){
         id
       }
      }`,
    DeleteType:`mutation DeleteType(
        $code: Int,
        $from: String,
        $company: Int
      ) {
        deleteType(
          code: $code from: $from company: $company
        )
      }`,
    FetchType: `query Type($code: Int, $company: Int!, $from: String) {
        type(code:$code, company: $company, from: $from){
            tp_codigo tp_descricao
        }
      }`,
    AllTypes: `query Types($company: Int!) {
        types(company: $company){
          tp_codigo
          tp_descricao
        }
      }`,
};
