const createEmployee = `
mutation CreateEmployee(
  $func_codigo: Int
  $func_nome: String
  $func_fones: String
  $func_data_nasc: String
  $func_natural: String
  $func_nacional: String
  $func_instrucao: String
  $func_identidade: String
  $func_eleitor: String
  $func_reservista: String
  $func_pis: String
  $func_sexo: String
  $func_filiacao: String
  $func_estado_civil: Int
  $func_conjuge: String
  $func_tipo_sang: String
  $func_alergias: String
  $func_especialidades: String      
  $func_cargo: String      
  $func_data_admissao: String      
  $func_data_demissao: String      
  $func_motivo_demissao: String      
  $func_salario_inicial: Float      
  $func_salario_atual: Float      
  $func_ctps: String      
  $func_cpf: String      
  $func_dados_bancarios: String      
  $func_status: Boolean 
  $func_endereco: Int
  $company: Int
){
  createEmployee(input:{
    func_codigo: $func_codigo
    func_nome: $func_nome
    func_fones: $func_fones
    func_data_nasc: $func_data_nasc
    func_natural: $func_natural
    func_nacional: $func_nacional
    func_instrucao: $func_instrucao
    func_identidade: $func_identidade
    func_eleitor: $func_eleitor
    func_reservista: $func_reservista
    func_pis: $func_pis
    func_sexo: $func_sexo
    func_filiacao: $func_filiacao
    func_estado_civil: $func_estado_civil
    func_conjuge: $func_conjuge
    func_tipo_sang: $func_tipo_sang
    func_alergias: $func_alergias
    func_especialidades: $func_especialidades      
    func_cargo: $func_cargo      
    func_data_admissao: $func_data_admissao      
    func_data_demissao: $func_data_demissao      
    func_motivo_demissao: $func_motivo_demissao      
    func_salario_inicial: $func_salario_inicial      
    func_salario_atual: $func_salario_atual    
    func_ctps: $func_ctps      
    func_cpf: $func_cpf      
    func_dados_bancarios: $func_dados_bancarios      
    func_status: $func_status 
    func_endereco: $func_endereco
    empresa: $company
  }){id}}`;

const bulkCreateEmployee = `
  mutation bulkEmployeeCreate(
    $input: [EmployeesCreateInput!] !
  ) {
    bulkEmployeeCreate(input: $input)
}`;

const updateEmployee = `
mutation UpdateEmployee(
  $from: String
  $code: Int
  $func_nome: String
  $func_fones: String
  $func_data_nasc: String
  $func_natural: String
  $func_nacional: String
  $func_instrucao: String
  $func_identidade: String
  $func_eleitor: String
  $func_reservista: String
  $func_pis: String
  $func_sexo: String
  $func_filiacao: String
  $func_estado_civil: Int
  $func_conjuge: String
  $func_tipo_sang: String
  $func_alergias: String
  $func_especialidades: String      
  $func_cargo: String      
  $func_data_admissao: String      
  $func_data_demissao: String      
  $func_motivo_demissao: String      
  $func_salario_inicial: Float      
  $func_salario_atual: Float      
  $func_ctps: String      
  $func_cpf: String      
  $func_dados_bancarios: String      
  $func_status: Boolean
  $company: Int
  ){
  updateEmployee(
    from: $from,
    code: $code, 
    company: $company,
    input:{
      func_nome: $func_nome
      func_fones: $func_fones
      func_data_nasc: $func_data_nasc
      func_natural: $func_natural
      func_nacional: $func_nacional
      func_instrucao: $func_instrucao
      func_identidade: $func_identidade
      func_eleitor: $func_eleitor
      func_reservista: $func_reservista
      func_pis: $func_pis
      func_sexo: $func_sexo
      func_filiacao: $func_filiacao
      func_estado_civil: $func_estado_civil
      func_conjuge: $func_conjuge
      func_tipo_sang: $func_tipo_sang
      func_alergias: $func_alergias
      func_especialidades: $func_especialidades      
      func_cargo: $func_cargo      
      func_data_admissao: $func_data_admissao      
      func_data_demissao: $func_data_demissao      
      func_motivo_demissao: $func_motivo_demissao      
      func_salario_inicial: $func_salario_inicial      
      func_salario_atual: $func_salario_atual      
      func_ctps: $func_ctps      
      func_cpf: $func_cpf      
      func_dados_bancarios: $func_dados_bancarios      
      func_status: $func_status
  }){id}}`;


const deleteEmployee = `
  mutation DelteEmployee(
    $code: Int,
    $from: String,
    $company:Int!
  ){
  deleteEmployee(
    code: $code
    from: $from
    company:$company
  )
}`;
const fetchEmployee = `
query FetchEmployee($code: Int!, $company: Int!) {
  employee(code: $code, company: $company) {
    id
    func_codigo
    func_nome
    func_fones
    func_data_nasc
    func_natural
    func_nacional
    func_instrucao
    func_identidade
    func_eleitor
    func_reservista
    func_pis
    func_sexo
    func_filiacao
    func_estado_civil
    func_conjuge
    func_tipo_sang
    func_alergias
    func_especialidades
    func_cargo
    func_data_admissao
    func_data_demissao
    func_motivo_demissao
    func_salario_inicial
    func_salario_atual
    func_ctps
    func_cpf
    func_dados_bancarios
    func_status
    func_endereco(company: $company) {
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
  createEmployee,
  updateEmployee,
  deleteEmployee,
  bulkCreateEmployee,
  fetchEmployee,
};