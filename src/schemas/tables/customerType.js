module.exports = {
  CreateCustomerType: `
    mutation CreateCustomerType($tpc_codigo: Int!, $tpc_descricao: String!, $company: Int!) {
      createCustomerType(input: {
        tpc_codigo: $tpc_codigo
        tpc_descricao: $tpc_descricao
        empresa: $company
      }) {
        id
      }
    }`,
  BulkCustomerTypeCreater: `mutation bulkCustomerTypeCreate(
    $input: [CustomerTypeCreateInput!]!
    ){
      bulkCustomerTypeCreate(input:$input)
    }`,
  UpdateCustomerType: `
    mutation UpdateCustomerType(
      $code: Int, $tpc_descricao: String!, $from: String, $company: Int
    ) {
      updateCustomerType(code: $code, from: $from, company: $company, input: {
        tpc_descricao: $tpc_descricao
      }) {
        id
      }
    }`,
  DeleteCustomerType: `
    mutation DeleteCustomerType(
      $code: Int,
      $from: String,
      $company: Int
    ) {
      deleteCustomerType(
        code: $code from: $from company: $company
      )
    }`,
  FetchCustomerType: `query CustomerType($code: Int, $company: Int!, $from: String) {
    customerType(code: $code, company: $company, from: $from) {
      tpc_codigo 
      tpc_descricao
    }}`,
  AllCustomerTypes: `query CustomerTypes($company: Int!) {
    customerTypes(company: $company){
      tpc_codigo 
      tpc_descricao
    }}`,
};
