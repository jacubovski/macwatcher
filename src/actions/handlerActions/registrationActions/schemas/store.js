const createStore = `
mutation CreateStore(
  $lj_codigo: Int!
  $lj_descricao: String!
  $lj_icms_simples: Float
  $lj_crt: Int!
  $lj_cnpj: String!
  $lj_inscricao: String
  $company: Int!
  ){
  createStore(input:{
    lj_codigo: $lj_codigo, 
    lj_descricao: $lj_descricao, 
    lj_icms_simples: $lj_icms_simples, 
    lj_crt: $lj_crt, 
    lj_cnpj: $lj_cnpj, 
    lj_inscricao: $lj_inscricao,
    empresa:$company
  }){id}}`;

const bulkCreateStore = `
 mutation BulkStoreCreate(
   $input: [StoreCreateInput!] !
 ) {
   bulkStoreCreate(input: $input)
 }
`;

const updateStore = `
mutation UpdateStore(
  $from: String
  $code: Int
  $lj_descricao: String
  $lj_icms_simples: Float
  $lj_crt: Int
  $lj_cnpj: String
  $lj_inscricao: String
  $company: Int
  ){
  updateStore(
    from: $from,
    code: $code, 
    company: $company,
    input:{
      lj_descricao: $lj_descricao
      lj_icms_simples: $lj_icms_simples
      lj_crt: $lj_crt
      lj_cnpj: $lj_cnpj
      lj_inscricao: $lj_inscricao
  }){id}}`;


const deleteStore = `
  mutation DelteStore(
    $code: Int,
    $from: String,
    $company:Int!
  ){
  deleteStore(
    code: $code
    from: $from
    company:$company
  )
}`;

const fetchStore = `
query Store($code: Int!, $company: Int!) {
  store(code: $code, company: $company) {
    lj_codigo
    lj_descricao
    lj_icms_simples
    lj_crt
    lj_cnpj
    lj_inscricao
    lj_endereco(company: $company) {
      end_origem
      end_codigo_origem
      end_tipo
      end_endereco
      end_numero
      end_complemento
      end_bairro
      end_cep
      end_uf
      end_cod_municipio
      end_municipio
    }
  }
}
`;

const AllStores = `
query Stores($company: Int!) {
  stores(company: $company) {
    lj_codigo
    lj_descricao
    lj_icms_simples
    lj_crt
    lj_cnpj
    lj_inscricao
    lj_endereco(company: $company) {
      end_origem
      end_codigo_origem
      end_tipo
      end_endereco
      end_numero
      end_complemento
      end_bairro
      end_cep
      end_uf
      end_cod_municipio
      end_municipio
    }
  }
}
`;

module.exports = {
  createStore,
  updateStore,
  deleteStore,
  bulkCreateStore,
  fetchStore,
  AllStores,
};
