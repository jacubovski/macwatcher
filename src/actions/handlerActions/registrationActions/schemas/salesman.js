const createSalesman = `
mutation CreateSalesman(
  $vnd_codigo: Int!             
  $vnd_nome: String!            
  $vnd_tipo_calculo: Int              
  $vnd_situacao: Boolean        
  $vnd_cota: Float              
  $vnd_comissao_sem_cota: Float              
  $vnd_comissao_com_cota: Float        
  $vnd_telefone: String        
  $vnd_contato: String          
  $vnd_email: String 
  $company: Int!
  ){
  createSalesman(input:{
  vnd_codigo:$vnd_codigo
  vnd_nome: $vnd_nome
  vnd_tipo_calculo: $vnd_tipo_calculo
  vnd_situacao: $vnd_situacao
  vnd_cota: $vnd_cota
  vnd_comissao_sem_cota: $vnd_comissao_sem_cota
  vnd_comissao_com_cota: $vnd_comissao_com_cota
  vnd_telefone: $vnd_telefone
  vnd_contato: $vnd_contato
  vnd_email: $vnd_email
  empresa: $company
  }){id}}`;

const bulkCreateSalesman = `
 mutation BulkSalesmanCreate(
   $input: [SalesmanCreateInput!] !
 ) {
   bulkSalesmanCreate(input: $input)
 }
`;

const updateSalesman = `
mutation UpdateSalesman(
  $from: String
  $code: Int
  $vnd_nome: String           
  $vnd_tipo_calculo: Int              
  $vnd_situacao: Boolean        
  $vnd_cota: Float              
  $vnd_comissao_sem_cota: Float              
  $vnd_comissao_com_cota: Float        
  $vnd_telefone: String        
  $vnd_contato: String          
  $vnd_email: String 
  $company: Int
  ){
  updateSalesman(
    from: $from,
    code: $code, 
    company: $company
    input:{
    vnd_nome: $vnd_nome
    vnd_tipo_calculo: $vnd_tipo_calculo
    vnd_situacao: $vnd_situacao
    vnd_cota: $vnd_cota
    vnd_comissao_sem_cota: $vnd_comissao_sem_cota
    vnd_comissao_com_cota: $vnd_comissao_com_cota
    vnd_telefone: $vnd_telefone
    vnd_contato: $vnd_contato
    vnd_email: $vnd_email
  }){id}}`;


const deleteSalesman = `
  mutation DelteSalesman(
    $code: Int,
    $from: String,
    $company:Int!
  ){
  deleteSalesman(
    code: $code
    from: $from
    company:$company
  )
}`;

const fetchSalesman = `
query Salesman($code: Int!, $company: Int!) {
  salesman(code: $code, company: $company) {
    id
    vnd_codigo
    vnd_nome
    vnd_tipo_calculo
    vnd_situacao
    vnd_cota
    vnd_comissao_sem_cota
    vnd_comissao_com_cota
    vnd_telefone
    vnd_contato
    vnd_email
    vnd_endereco(company: $company) {
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
  }
}
`;

module.exports = {
  createSalesman,
  updateSalesman,
  deleteSalesman,
  bulkCreateSalesman,
  fetchSalesman,
};