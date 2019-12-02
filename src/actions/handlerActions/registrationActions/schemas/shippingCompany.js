const createShippingCompany = `
mutation CreateShippingCompany(
  $trans_codigo: Int!              
  $trans_codinome: String!              
  $trans_razao_social: String!              
  $trans_cnpj: String        
  $trans_cpf: String        
  $trans_fone: String
  $trans_fax: String
  $trans_contato: String
  $trans_uf_placa: String
  $trans_placa: String
  $trans_tara: Int        
  $trans_rodado: Int
  $trans_carroceria: Int
  $trans_observacoes: String
  $company: Int!
){
  createShippingCompany(input:{
  trans_codigo: $trans_codigo              
  trans_codinome: $trans_codinome              
  trans_razao_social: $trans_razao_social              
  trans_cnpj: $trans_cnpj        
  trans_cpf: $trans_cpf        
  trans_fone: $trans_fone
  trans_fax: $trans_fax
  trans_contato: $trans_contato
  trans_uf_placa: $trans_uf_placa
  trans_placa: $trans_placa
  trans_tara: $trans_tara        
  trans_rodado: $trans_rodado
  trans_carroceria: $trans_carroceria
  trans_observacoes: $trans_observacoes
  empresa: $company
  }){id}}`;

const bulkCreateShippingCompany = `
  mutation BulkShippingCompanyCreate(
    $input: [ShippingCompanyCreateInput!] !
  ) {
    bulkShippingCompanyCreate(input: $input)
}`;

const updateShippingCompany = `
mutation UpdateShippingCompany(
  $from: String
  $code: Int
  $trans_codinome: String              
  $trans_razao_social: String              
  $trans_cnpj: String        
  $trans_cpf: String        
  $trans_fone: String
  $trans_fax: String
  $trans_contato: String
  $trans_uf_placa: String
  $trans_placa: String
  $trans_tara: Int        
  $trans_rodado: Int
  $trans_carroceria: Int
  $trans_observacoes: String
  $company: Int
){
  updateShippingCompany(
    from: $from,
    code: $code, 
    company: $company,
    input:{
      trans_codinome: $trans_codinome              
      trans_razao_social: $trans_razao_social              
      trans_cnpj: $trans_cnpj        
      trans_cpf: $trans_cpf        
      trans_fone: $trans_fone
      trans_fax: $trans_fax
      trans_contato: $trans_contato
      trans_uf_placa: $trans_uf_placa
      trans_placa: $trans_placa
      trans_tara: $trans_tara        
      trans_rodado: $trans_rodado
      trans_carroceria: $trans_carroceria
      trans_observacoes: $trans_observacoes
  }){id}}`;


const deleteShippingCompany = `
  mutation DelteShippingCompany(
    $code: Int,
    $from: String,
    $company:Int!
  ){
  deleteShippingCompany(
    code: $code
    from: $from
    company:$company
  )
}`;
const fetchShipping = `
query ShippingCompany($code: Int!, $company: Int!) {
  shippingCompany(code: $code, company: $company) {
    id
    trans_codigo
    trans_codinome
    trans_razao_social
    trans_cnpj
    trans_cpf
    trans_fone
    trans_fax
    trans_contato
    trans_uf_placa
    trans_placa
    trans_tara
    trans_rodado
    trans_carroceria
    trans_observacoes
    trans_endereco(company: $company) {
      id
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
    empresa {
      id
    }
  }
}`;

module.exports = {
  createShippingCompany,
  updateShippingCompany,
  deleteShippingCompany,
  bulkCreateShippingCompany,
  fetchShipping,
};