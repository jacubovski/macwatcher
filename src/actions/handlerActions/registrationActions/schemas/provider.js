const createProvider = `
  mutation CreateProvider(
    $frn_codigo: Int!             
    $frn_razao_social: String!            
    $frn_apelido: String!              
    $frn_tipo_forn: String        
    $frn_contato: String              
    $frn_cont_dia_mes_aniv: String              
    $frn_cnpj: String 
    $frn_cpf: String     
    $frn_inscricao: String        
    $frn_fone: String          
    $frn_tipo_inscr: String 
    $frn_email: String 
    $frn_pais: String 
    $frn_cod_pais: String 
    $frn_ref_banc_1: String 
    $frn_ref_banc_2: String 
    $frn_na_web: Boolean
    $frn_crt: Int 
    $company: Int!   
  ){ createProvider( input: {
      frn_codigo: $frn_codigo             
      frn_razao_social: $frn_razao_social            
      frn_apelido:$frn_apelido              
      frn_tipo_forn: $frn_tipo_forn        
      frn_contato: $frn_contato              
      frn_cont_dia_mes_aniv: $frn_cont_dia_mes_aniv              
      frn_cnpj: $frn_cnpj 
      frn_cpf: $frn_cpf     
      frn_inscricao: $frn_inscricao        
      frn_fone: $frn_fone          
      frn_tipo_inscr: $frn_tipo_inscr 
      frn_email: $frn_email 
      frn_pais: $frn_pais 
      frn_cod_pais: $frn_cod_pais 
      frn_ref_banc_1: $frn_ref_banc_1 
      frn_ref_banc_2: $frn_ref_banc_2 
      frn_na_web: $frn_na_web
      frn_crt: $frn_crt 
      empresa: $company         
    }){ id}}`;

const bulkCreateProvider = `
  mutation bulkProviderCreate(
    $input: [ProviderCreateInput!] !
  ) {
    bulkProviderCreate(input: $input)
}`;

const updateProvider = `
mutation UpdateProvider(
  $from: String
  $code: Int
  $frn_razao_social: String            
  $frn_apelido: String              
  $frn_tipo_forn: String        
  $frn_contato: String              
  $frn_cont_dia_mes_aniv: String              
  $frn_cnpj: String 
  $frn_cpf: String     
  $frn_inscricao: String        
  $frn_fone: String          
  $frn_tipo_inscr: String 
  $frn_email: String 
  $frn_pais: String 
  $frn_cod_pais: String 
  $frn_ref_banc_1: String 
  $frn_ref_banc_2: String 
  $frn_na_web: Boolean
  $frn_crt: Int
  $company: Int
){
  updateProvider(
    from: $from
    code: $code,
    company: $company
    input:{
      frn_razao_social: $frn_razao_social            
      frn_apelido:$frn_apelido              
      frn_tipo_forn: $frn_tipo_forn        
      frn_contato: $frn_contato              
      frn_cont_dia_mes_aniv: $frn_cont_dia_mes_aniv              
      frn_cnpj: $frn_cnpj 
      frn_cpf: $frn_cpf     
      frn_inscricao: $frn_inscricao        
      frn_fone: $frn_fone          
      frn_tipo_inscr: $frn_tipo_inscr 
      frn_email: $frn_email 
      frn_pais: $frn_pais 
      frn_cod_pais: $frn_cod_pais 
      frn_ref_banc_1: $frn_ref_banc_1 
      frn_ref_banc_2: $frn_ref_banc_2 
      frn_na_web: $frn_na_web
      frn_crt: $frn_crt
  }){id}}`;


const deleteProvider = `
  mutation DelteProvider(
    $code: Int,
    $from: String,
    $company:Int!
  ){
  deleteProvider(
    code: $code
    from: $from
    company:$company
  )
}`;

const fetchProvider = `
query Provider($code: Int!, $company: Int!) {
  provider(code: $code, company: $company) {
    id
    frn_codigo
    frn_razao_social
    frn_apelido
    frn_razao_social
    frn_tipo_forn
    frn_contato
    frn_cont_dia_mes_aniv
    frn_cnpj
    frn_cpf
    frn_inscricao
    frn_fone
    frn_tipo_inscr
    frn_email
    frn_pais
    frn_cod_pais
    frn_ref_banc_1
    frn_ref_banc_2
    frn_na_web
    frn_crt
    frn_endereco(company: $company) {
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
  createProvider,
  updateProvider,
  deleteProvider,
  bulkCreateProvider,
  fetchProvider,
};