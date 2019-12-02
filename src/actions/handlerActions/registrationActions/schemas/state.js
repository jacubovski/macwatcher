
const createState = `
mutation CreateState(
  $uf_codigo: Int!,
  $uf_sigla: String!,
  $uf_estado: String!,
  $uf_icms_cons_final: Float,
  $uf_icms_interestadual: Float,
  $uf_icms_cesta_basica: Float,
  $uf_fcp: Float,
  $uf_icms_reducao: Float,
  $uf_icms_partilha: Float,
  $uf_inscr_est_st: String,
  $uf_incentivos: Boolean,
  $uf_convenio: String,
  $company: Int!
){ createState( input:{
  uf_codigo: $uf_codigo
  uf_sigla: $uf_sigla
  uf_estado: $uf_estado
  uf_icms_cons_final: $uf_icms_cons_final
  uf_icms_interestadual: $uf_icms_interestadual
  uf_icms_cesta_basica: $uf_icms_cesta_basica
  uf_fcp: $uf_fcp
  uf_icms_reducao: $uf_icms_reducao
  uf_icms_partilha: $uf_icms_partilha
  uf_inscr_est_st: $uf_inscr_est_st
  uf_incentivos: $uf_incentivos
  uf_convenio: $uf_convenio
  empresa:$company
  }){id}}`;

const bulkCreateState = `
 mutation BulkStateCreate(
   $input: [StateCreateInput!] !
 ) {
   bulkStateCreate(input: $input)
 }`;

const updateState = `
mutation UpdateState(
  $from: String
  $code: Int
  $uf_icms_cons_final: Float
  $uf_icms_interestadual: Float
  $uf_icms_cesta_basica: Float
  $uf_fcp: Float
  $uf_icms_reducao: Float
  $uf_icms_partilha: Float
  $uf_inscr_est_st: String
  $uf_incentivos: Boolean
  $uf_convenio: String
  $company: Int
  ){
  updateState(
    from: $from,
    code: $code, 
    company: $company,
    input:{
      uf_icms_cons_final: $uf_icms_cons_final
      uf_icms_interestadual: $uf_icms_interestadual
      uf_icms_cesta_basica: $uf_icms_cesta_basica
      uf_fcp: $uf_fcp
      uf_icms_reducao: $uf_icms_reducao
      uf_icms_partilha: $uf_icms_partilha
      uf_inscr_est_st: $uf_inscr_est_st
      uf_incentivos: $uf_incentivos
      uf_convenio: $uf_convenio
  }){id}}`;


const deleteState = `
  mutation DelteState(
    $code: Int,
    $from: String,
    $company:Int!
  ){
  deleteState(
    code: $code
    from: $from
    company:$company
  )
}`;

module.exports = {
  createState,
  updateState,
  deleteState,
  bulkCreateState,
};