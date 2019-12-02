module.exports = {
  CreateCfop: `
      mutation CreateCfop($cfop_codigo: Int!, $cfop_descricao: String!, $company: Int!) {
        createCfop(input: {
          cfop_codigo: $cfop_codigo
          cfop_descricao: $cfop_descricao
          empresa: $company
        }) {
          id
        }
      }
      `,
  BulkCfopCreate: `  mutation bulkCfopCreate(
      $input: [CfopCreateInput!]!
    ){
      bulkCfopCreate(input:$input)
    }`,
  UpdateCfop: `
     mutation UpdateCfop(
       $code: Int, $cfop_descricao: String!, $from: String, $company: Int) {
       updateCfop(code: $code, from: $from, company: $company, input: {
         cfop_descricao: $cfop_descricao
       }) {
         id
       }
     }
     `,
  DeleteCfop: `
    mutation DeleteCfop( $code: Int, $from: String, $company: Int ) {
      deleteCfop(
        code: $code
        from: $from
        company: $company
      )
    }`,
  FetchCfop: `query Cfop($code: Int, $company: Int!, $from: String) {
      cfop(code:$code, company: $company, from: $from){
          cfop_codigo cfop_descricao
      }
    }`,
  AllCfops: `query Cfops($company: Int!) {
      cfops(company: $company){
        cfop_codigo
        cfop_descricao
      }
    }`,
};
