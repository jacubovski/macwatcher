module.exports = {
  CreateCostCenter: `
    mutation CreateCostCenter(
      $cc_codigo: Int!,
      $cc_descricao: String!,
      $cc_receitadespesa: String!,
      $cc_relatoriocc: Boolean!,
      $cc_relatorioadm: Boolean!,
      $company: Int!
    ) {
      createCostCenter(input: {
        cc_codigo: $cc_codigo,
        cc_descricao: $cc_descricao,
        cc_receitadespesa: $cc_receitadespesa,
        cc_relatoriocc: $cc_relatoriocc,
        cc_relatorioadm: $cc_relatorioadm,
        empresa: $company
      }) {
        id
        cc_codigo
        cc_descricao
        cc_receitadespesa
        cc_relatoriocc
        cc_relatorioadm
        empresa {
          id
        }
      }
    }`,
  BulCostCenteCreater: `mutation bulkCostCenterCreate(
      $input: [CostCenterCreateInput!]!
    ){
      bulkCostCenterCreate(input:$input)
    }`,
  UpdateCostCenter: `
    mutation UpdateCostCenter(
      $code: Int,
      $from: String,
      $company: Int,
      $cc_descricao: String!,
      $cc_receitadespesa: String!,
      $cc_relatoriocc: Boolean!,
      $cc_relatorioadm: Boolean!
    ) {
      updateCostCenter(code: $code, from: $from, company: $company, input: {
        cc_descricao: $cc_descricao,
        cc_receitadespesa: $cc_receitadespesa,
        cc_relatoriocc: $cc_relatoriocc,
        cc_relatorioadm: $cc_relatorioadm
      }) {
        id
      }
    }`,
  DeleteCostCenter: `
    mutation DeleteCostCenter(
      $code: Int,
      $from: String,
      $company: Int
    ) {
      deleteCostCenter(
        code: $code from: $from company: $company
      )
    }`,
  FetchCostCenter: `query CostCenter($code: Int, $company: Int!, $from: String) { 
    costCenter(code:$code, company: $company, from: $from) { 
      cc_codigo 
      cc_descricao 
      cc_receitadespesa 
      cc_relatoriocc 
      cc_relatorioadm
    }}`,
  AllCostCenters: `query CostCenters($company: Int!) { 
    costCenters(company: $company) { 
      cc_codigo 
      cc_descricao 
      cc_receitadespesa 
      cc_relatoriocc 
      cc_relatorioadm
    }}`,
};
