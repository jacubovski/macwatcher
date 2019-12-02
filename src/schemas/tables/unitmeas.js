module.exports = {
  CreateUnitMeas: `
    mutation CreateUnitMeas(
      $med_codigo: Int!,
      $med_descricao: String!,
      $med_abreviado: String!,
      $med_tipocalculo: Int!,
      $company: Int!
    ) {
      createUnitMeas(input: {
        med_codigo: $med_codigo
        med_descricao: $med_descricao
        med_abreviado: $med_abreviado
        med_tipocalculo: $med_tipocalculo
        empresa: $company
      }) {
        id
      }
    }`,
  BulkUnitMeasCreate: `mutation bulkUnitMeasCreate(
      $input: [UnitMeasCreateInput!]!){
      bulkUnitMeasCreate(input:$input)
    }`,
  UpdateUnitMeas: `
    mutation UpdateUnitMeas(
      $code: Int,
      $from: String,
      $company: Int,
      $med_descricao: String!,
      $med_abreviado: String!,
      $med_tipocalculo: Int!
    ) {
      updateUnitMeas(
        code: $code, from: $from, company: $company, input: {
          med_descricao: $med_descricao
          med_abreviado: $med_abreviado
          med_tipocalculo: $med_tipocalculo
        }) {
        id
      }
    }`,
  DeleteUnitMeas: `mutation DeleteUnitMeas(
    $code: Int,
    $from: String,
    $company: Int) {
      deleteUnitMeas(
        code: $code
        from: $from
        company: $company
      )
    }`,
  FetchUnitMeas: `query UnitMeas($code: Int, $company: Int!, $from: String) {
      unitmeas(code:$code, company: $company from: $from){
        med_codigo 
        med_descricao 
        med_abreviado 
        med_tipocalculo
      }
    }`,
  AllUnitMeass: ` query UnitMeass($company: Int!) {
    unitmeass(company: $company){
        med_codigo 
        med_descricao 
        med_abreviado 
        med_tipocalculo
    }}`,
};
