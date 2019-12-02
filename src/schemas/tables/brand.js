module.exports = {
    CreateBrand: `
      mutation CreateBrand($mrc_codigo: Int!, $mrc_descricao: String!, $company: Int!) {
      createBrand(input:{
        mrc_codigo: $mrc_codigo 
        mrc_descricao: $mrc_descricao
        empresa:$company
      }){
        id
        }
      }`,
    BulkBrandCreate: ` mutation bulkBrandCreate(
        $input: [BrandCreateInput!] !
      ) {
        bulkBrandCreate(input: $input)
      }`,
    UpdateBrand: `
      mutation UpdateBrand($code: Int, $mrc_descricao: String!, $from: String, $company: Int) {
       updateBrand(
         code: $code,
         from: $from,
         company: $company,
         input:{
           mrc_descricao: $mrc_descricao 
         }
       ){
         id
       }
      }`,
    DeleteBrand:`mutation DeleteBrand(
        $code: Int,
        $from: String,
        $company: Int
      ) {
        deleteBrand(
          code: $code from: $from company: $company
        )
      }`,
    FetchBrand: `query Brand($code: Int, $company: Int!, $from: String) {
        brand(code:$code, company: $company, from: $from){
            mrc_codigo mrc_descricao
        }
      }`,
    AllBrands: `query Brands($company: Int!) {
        brands(company: $company){
          mrc_codigo
          mrc_descricao
        }
      }`,
};
