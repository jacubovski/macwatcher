const createAddress = `
mutation CreateAddress(
  $end_origem: String!
  $end_codigo_origem: Int!
  $end_tipo: String!
  $end_endereco: String!
  $end_numero: Int
  $end_complemento: String
  $end_bairro: String!
  $end_cep: Int!
  $end_uf: String!
  $end_cod_municipio: Int!
  $end_municipio: String!
  $company: Int!
){
  createAddress(input:{
      end_origem: $end_origem
      end_codigo_origem: $end_codigo_origem
      end_tipo: $end_tipo
      end_endereco: $end_endereco
      end_numero: $end_numero
      end_complemento: $end_complemento
      end_bairro: $end_bairro
      end_cep: $end_cep
      end_uf: $end_uf
      end_cod_municipio: $end_cod_municipio
      end_municipio: $end_municipio
      empresa:$company
  })
  {id } }`;

const bulkCreateAddress = `
  mutation bulkAddressCreate(
    $input: [AddressCreateInput!] !
  ) {
    bulkAddressCreate(input: $input)
}`;

const updateAddress = `
mutation UpdateAddress(
  $from: String
  $code: Int,
  $type: String!,
  $origin: String!,
  $end_origem: String
  $end_codigo_origem: Int
  $end_tipo: String
  $end_endereco: String
  $end_numero: Int
  $end_complemento: String
  $end_bairro: String
  $end_cep: Int
  $end_uf: String
  $end_cod_municipio: Int
  $end_municipio: String
  $company: Int!
){
  updateAddress(
    from: $from
    code: $code,
    origin: $origin,
    company: $company,
    type: $type,
    input:{
      end_origem: $end_origem
      end_codigo_origem: $end_codigo_origem
      end_tipo: $end_tipo
      end_endereco: $end_endereco
      end_numero: $end_numero
      end_complemento: $end_complemento
      end_bairro: $end_bairro
      end_cep: $end_cep
      end_uf: $end_uf
      end_cod_municipio: $end_cod_municipio
      end_municipio: $end_municipio
  })
  {id}}`;


const deleteAddress = `
mutation DelteAddress(
   $origin: String!,
   $codeOrigin: Int!,
   $company: Int!,
   $from: String,
   $type: String
  ) { 
  deleteAddress(
    from:$from,
    type:$type,
    origin:$origin,
    codeOrigin: $codeOrigin,
    company: $company
  )
}`;

module.exports = {
  createAddress,
  updateAddress,
  deleteAddress,
  bulkCreateAddress,
};