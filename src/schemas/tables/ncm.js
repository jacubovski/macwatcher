module.exports = {
    CreateNcm: `
      mutation CreateNcm(
        $ncm_codigo: Int!,
        $ncm_ncm: String!,
        $ncm_cest: String,
        $ncm_descricao_interna: String!,
        $ncm_descricao_tipi: String $ncm_mva_interna: Float,
        $ncm_mva_externa: Float,
        $ncm_ltf_nacional: Float,
        $ncm_ltf_importada: Float $ncm_pis: Float,
        $ncm_cofins: Float,
        $ncm_ipi: Float,
        $ncm_origem: Int,
        $company: Int!
      ) {
        createNcm(input: {
          ncm_codigo: $ncm_codigo,
          ncm_ncm: $ncm_ncm,
          ncm_cest: $ncm_cest,
          ncm_descricao_interna: $ncm_descricao_interna,
          ncm_descricao_tipi: $ncm_descricao_tipi
          ncm_mva_interna: $ncm_mva_interna,
          ncm_mva_externa: $ncm_mva_externa,
          ncm_ltf_nacional: $ncm_ltf_nacional,
          ncm_ltf_importada: $ncm_ltf_importada
          ncm_pis: $ncm_pis,
          ncm_cofins: $ncm_cofins,
          ncm_ipi: $ncm_ipi,
          ncm_origem: $ncm_origem
          empresa: $company
        }) {
          id
        }
      }`,
    BulkNcmCreate: `mutation bulkNcmCreate(
      $input: [NcmCreateInput!] !
    ){
      bulkNcmCreate(input: $input)
    }`,
    UpdateNcm: `
     mutation UpdateNcm(
      $code: Int,
      $from: String,
      $company: Int $ncm_ncm: String!,
      $ncm_cest: String,
      $ncm_descricao_interna: String!,
      $ncm_descricao_tipi: String $ncm_mva_interna: Float,
      $ncm_mva_externa: Float,
      $ncm_ltf_nacional: Float,
      $ncm_ltf_importada: Float $ncm_pis: Float,
      $ncm_cofins: Float,
      $ncm_ipi: Float,
      $ncm_origem: Int
      ){
      updateNcm(code: $code, from: $from, company: $company, input: {
        ncm_ncm: $ncm_ncm,
        ncm_cest: $ncm_cest,
        ncm_descricao_interna: $ncm_descricao_interna,
        ncm_descricao_tipi: $ncm_descricao_tipi
        ncm_mva_interna: $ncm_mva_interna,
        ncm_mva_externa: $ncm_mva_externa,
        ncm_ltf_nacional: $ncm_ltf_nacional,
        ncm_ltf_importada: $ncm_ltf_importada
        ncm_pis: $ncm_pis,
        ncm_cofins: $ncm_cofins,
        ncm_ipi: $ncm_ipi,
        ncm_origem: $ncm_origem
      }) {
        id
      }}`,
    DeleteNcm: `mutation DelteNcm(
        $code: Int,
        $from: String,
        $company: Int
      ) { 
      deleteNcm(
        code: $code
        from: $from
        company: $company
      )}`,
    FetchNcm: `query Ncm($code: Int, $company: Int!, $from: String) {
      ncm(code: $code, company: $company, from: $from) {
        ncm_codigo
        ncm_ncm
        ncm_cest
        ncm_descricao_interna
        ncm_descricao_tipi
        ncm_mva_interna
        ncm_mva_externa
        ncm_ltf_nacional
        ncm_ltf_importada
        ncm_pis
        ncm_cofins
        ncm_ipi ncm_origem
      }}`,
    AllNcms: `query Ncms($company: Int!){
      ncms(company: $company) {
        ncm_codigo 
        ncm_ncm 
        ncm_cest 
        ncm_descricao_interna 
        ncm_descricao_tipi
        ncm_mva_interna 
        ncm_mva_externa 
        ncm_ltf_nacional 
        ncm_ltf_importada 
        ncm_pis
        ncm_cofins 
        ncm_ipi ncm_origem 
      }}`,
};
