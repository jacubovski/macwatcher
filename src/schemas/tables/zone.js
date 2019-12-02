module.exports = {
    CreateZone: `mutation CreateZone(
      $area_codigo: Int!, 
      $area_descricao: String!,
      $area_bairros:String!, 
      $company: Int!
      ){
        createZone(input:{
          area_codigo: $area_codigo,
          area_descricao: $area_descricao,
          area_bairros:$area_bairros, 
          empresa:$company
        }){id}}`,
    BulkZoneCreate: `mutation bulkZoneCreate(
        $input: [ZoneCreateInput!]!
      ){
        bulkZoneCreate(input:$input)
      }`,
    UpdateZone: `mutation UpdateZone(
      $code: Int,
      $from: String,
      $company: Int,
      $area_descricao: String,
      $area_bairros: String, 
      ) {
      updateZone(code: $code, from: $from, company: $company, input:{
        area_descricao: $area_descricao,
        area_bairros:$area_bairros,  
      }){ id }
      }`,
    DeleteZone: `mutation DeleteZone(
        $code: Int,
        $from: String,
        $company: Int
      ) {
      deleteZone(
        code: $code
        from: $from
        company: $company
      )}`,
    FetchZone: `query Zone($code: Int, $company: Int!, $from: String) {
        zone(code:$code, company: $company, from: $from){
          area_codigo
          area_descricao
          area_bairros
        }
      }`,
    AllZones: `query Zones($company: Int!) {
        zones(company: $company){
          area_codigo
          area_descricao
          area_bairros
        }
      }`,
};
