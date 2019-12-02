const createCustomer = `
  mutation CreateCustomer(
    $cli_codigo: Int! 
    $cli_apelido: String! 
    $cli_razao_social: String!
    $cli_cnpj: String
    $cli_inscricao: String 
    $cli_fone_nfe: String 
    $cli_fone_principal: String
    $cli_area: Int
    $cli_tipo_preco: Int 
    $cli_limite_credito: Float
    $cli_data_cadastro: String!
    $cli_loja: Int
    $cli_data_ultima_compra: String
    $cli_obs: String
    $cli_entr_sab: Boolean
    $cli_vendedor: Int 
    $cli_cpf: String 
    $cli_transportadora: Int
    $cli_cons_final: Boolean 
    $cli_ativo: Boolean 
    $cli_tipo_cliente: Int
    $cli_email_1: String
    $cli_email_2: String
    $cli_email_3: String
    $cli_email_4: String
    $cli_email_5: String
    $company: Int!
  ){
  createCustomer(input:{
    cli_codigo: $cli_codigo
    cli_apelido: $cli_apelido 
    cli_razao_social: $cli_razao_social
    cli_cnpj: $cli_cnpj
    cli_inscricao: $cli_inscricao 
    cli_fone_nfe: $cli_fone_nfe 
    cli_fone_principal: $cli_fone_principal
    cli_area: $cli_area
    cli_tipo_preco: $cli_tipo_preco 
    cli_limite_credito: $cli_limite_credito
    cli_data_cadastro: $cli_data_cadastro
    cli_loja: $cli_loja
    cli_data_ultima_compra: $cli_data_ultima_compra
    cli_obs: $cli_obs
    cli_entr_sab: $cli_entr_sab
    cli_vendedor: $cli_vendedor 
    cli_cpf: $cli_cpf 
    cli_transportadora: $cli_transportadora
    cli_cons_final: $cli_cons_final 
    cli_ativo: $cli_ativo 
    cli_tipo_cliente: $cli_tipo_cliente
    cli_email_1: $cli_email_1
    cli_email_2: $cli_email_2
    cli_email_3: $cli_email_3
    cli_email_4: $cli_email_4
    cli_email_5: $cli_email_5
    empresa: $company
  }){ id}}`;

const bulkCreateCustomer = `
  mutation bulkCustomerCreate(
    $input: [CustomerCreateInput!] !
  ) {
    bulkCustomerCreate(input: $input)
}`;

const updateCustomer = `
mutation UpdateCustomer(
  $from: String
  $code: Int
  $cli_apelido: String! 
  $cli_razao_social: String!
  $cli_cnpj: String
  $cli_inscricao: String 
  $cli_fone_nfe: String 
  $cli_fone_principal: String
  $cli_area: Int
  $cli_tipo_preco: Int 
  $cli_limite_credito: Float
  $cli_data_cadastro: String
  $cli_loja: Int
  $cli_data_ultima_compra: String
  $cli_obs: String
  $cli_entr_sab: Boolean
  $cli_vendedor: Int 
  $cli_cpf: String 
  $cli_transportadora: Int
  $cli_cons_final: Boolean 
  $cli_ativo: Boolean 
  $cli_tipo_cliente: Int
  $cli_email_1: String
  $cli_email_2: String
  $cli_email_3: String
  $cli_email_4: String
  $cli_email_5: String
  $company: Int
  ){
  updateCustomer(
    from: $from
    code: $code,
    company: $company,
    input:{
      cli_apelido: $cli_apelido 
      cli_razao_social: $cli_razao_social
      cli_cnpj: $cli_cnpj
      cli_inscricao: $cli_inscricao 
      cli_fone_nfe: $cli_fone_nfe 
      cli_fone_principal: $cli_fone_principal
      cli_area: $cli_area
      cli_tipo_preco: $cli_tipo_preco 
      cli_limite_credito: $cli_limite_credito
      cli_data_cadastro: $cli_data_cadastro
      cli_loja: $cli_loja
      cli_data_ultima_compra: $cli_data_ultima_compra
      cli_obs: $cli_obs
      cli_entr_sab: $cli_entr_sab
      cli_vendedor: $cli_vendedor 
      cli_cpf: $cli_cpf 
      cli_transportadora: $cli_transportadora
      cli_cons_final: $cli_cons_final 
      cli_ativo: $cli_ativo 
      cli_tipo_cliente: $cli_tipo_cliente
      cli_email_1: $cli_email_1
      cli_email_2: $cli_email_2
      cli_email_3: $cli_email_3
      cli_email_4: $cli_email_4
      cli_email_5: $cli_email_5
  }){id}}`;


const deleteCustomer = `
mutation DelteCustomer(
    $code: Int,
    $from: String,
    $company:Int!
  ){
  deleteCustomer(
    code: $code
    from: $from
    company:$company
  )
}`;

const fetchCustomer = `
query FetchCustomer($company: Int!, $code: Int!) {
  customer(company: $company, code: $code) {
    id
    cli_codigo
    cli_apelido
    cli_razao_social
    cli_cnpj
    cli_inscricao
    cli_fone_nfe
    cli_area {
      id
      area_codigo
    }
    cli_tipo_preco {
      id
      prc_codigo
    }
    cli_limite_credito
    cli_data_cadastro
    cli_loja {
      id
      lj_codigo
    }
    cli_data_ultima_compra
    cli_obs
    cli_entr_sab
    cli_vendedor {
      id
      vnd_codigo
    }
    cli_cpf
    cli_transportadora {
      id
      trans_codigo
    }
    cli_cons_final
    cli_ativo
    cli_tipo_cliente {
      id
      tpc_codigo
    }
    cli_email_1
    cli_email_2
    cli_email_3
    cli_email_4
    cli_email_5
    cli_endereco(company: $company) {
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
  createCustomer,
  updateCustomer,
  deleteCustomer,
  bulkCreateCustomer,
  fetchCustomer
};