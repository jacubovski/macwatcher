// tirar aliq_st e prd_subst_trib

const createProduct = `
mutation CreateProduct(
  $prd_codigo: Int!
  $prd_codigo_dv: Int!
  $prd_descricao: String!     
  $prd_tipo: Int          
  $prd_marca: Int         
  $prd_ctrl_lote: Boolean     
  $prd_na_web: Boolean        
  $prd_linha: Int         
  $prd_aliq_st: Float       
  $prd_codigo_baixa: Int!    
  $prd_codigo_baixa_dv: Int! 
  $prd_unidade_principal: Int     
  $prd_unidade_estoque: Int     
  $prd_unidade_venda: Int     
  $prd_estoque_maximo: Float
  $prd_estoque_minimo: Float
  $prd_icms_ecf: Float      
  $prd_sub_tipo: Int      
  $prd_tipo_mat: String      
  $prd_reducao_icms: Boolean       
  $prd_qtd_minima: Float    
  $prd_status: Boolean        
  $prd_vd_sdo_negat: Boolean  
  $prd_cod_barra: String     
  $prd_qtd_reserv: Float    
  $prd_qtd_mostr\: Float     
  $prd_qtd_entregar: Float  
  $prd_qtd_danif: Float     
  $prd_volume: Float        
  $prd_linear: Float        
  $prd_posicao: Int
  $prd_multiplic: Float     
  $prd_ncm: Int 
  $prd_meta_vds: Float      
  $prd_cesta_basica: Boolean  
  $prd_peso: Float          
  $prd_prod_cubado: Boolean   
  $prd_localiz: String       
  $prd_cst: String     
  $prd_subst_trib: String    
  $prd_qtd_inicial_1: Float
  $prd_qtd_inicial_2: Float
  $prd_qtd_atual_1: Float      
  $prd_qtd_atual_2: Float  
  $company: Int!
) {
  createProduct(input:{
    prd_codigo: $prd_codigo
    prd_codigo_dv: $prd_codigo_dv
    prd_descricao: $prd_descricao     
    prd_tipo: $prd_tipo          
    prd_marca: $prd_marca         
    prd_ctrl_lote: $prd_ctrl_lote     
    prd_na_web: $prd_na_web        
    prd_linha: $prd_linha         
    prd_aliq_st: $prd_aliq_st       
    prd_codigo_baixa: $prd_codigo_baixa    
    prd_codigo_baixa_dv: $prd_codigo_baixa_dv 
    prd_unidade_principal: $prd_unidade_principal     
    prd_unidade_estoque: $prd_unidade_estoque     
    prd_unidade_venda: $prd_unidade_venda     
    prd_estoque_maximo: $prd_estoque_maximo
    prd_estoque_minimo: $prd_estoque_minimo
    prd_icms_ecf: $prd_icms_ecf      
    prd_sub_tipo: $prd_sub_tipo      
    prd_tipo_mat: $prd_tipo_mat      
    prd_reducao_icms: $prd_reducao_icms       
    prd_qtd_minima: $prd_qtd_minima    
    prd_status: $prd_status        
    prd_vd_sdo_negat: $prd_vd_sdo_negat 
    prd_cod_barra: $prd_cod_barra     
    prd_qtd_reserv: $prd_qtd_reserv    
    prd_qtd_mostr: $prd_qtd_mostr     
    prd_qtd_entregar: $prd_qtd_entregar  
    prd_qtd_danif: $prd_qtd_danif     
    prd_volume: $prd_volume        
    prd_linear: $prd_linear        
    prd_posicao: $prd_posicao
    prd_multiplic: $prd_multiplic     
    prd_ncm: $prd_ncm 
    prd_meta_vds: $prd_meta_vds      
    prd_cesta_basica: $prd_cesta_basica  
    prd_peso: $prd_peso          
    prd_prod_cubado: $prd_prod_cubado   
    prd_localiz: $prd_localiz       
    prd_cst: $prd_cst     
    prd_subst_trib: $prd_subst_trib    
    prd_qtd_inicial_1: $prd_qtd_inicial_1
    prd_qtd_inicial_2: $prd_qtd_inicial_2
    prd_qtd_atual_1: $prd_qtd_atual_1      
    prd_qtd_atual_2: $prd_qtd_atual_2 
    empresa: $company
  }){id}}
`;
const updateProduct = `
mutation UpdateProduct(
  $from: String
  $code: Int
  $prd_descricao: String     
  $prd_tipo: Int          
  $prd_marca: Int         
  $prd_ctrl_lote: Boolean     
  $prd_na_web: Boolean        
  $prd_linha: Int         
  $prd_aliq_st: Float       
  $prd_codigo_baixa: Int    
  $prd_codigo_baixa_dv: Int 
  $prd_unidade_principal: Int     
  $prd_unidade_estoque: Int     
  $prd_unidade_venda: Int     
  $prd_estoque_maximo: Float
  $prd_estoque_minimo: Float
  $prd_icms_ecf: Float      
  $prd_sub_tipo: Int      
  $prd_tipo_mat: String      
  $prd_reducao_icms: Boolean       
  $prd_qtd_minima: Float    
  $prd_status: Boolean        
  $prd_vd_sdo_negat: Boolean  
  $prd_cod_barra: String     
  $prd_qtd_reserv: Float    
  $prd_qtd_mostr: Float     
  $prd_qtd_entregar: Float  
  $prd_qtd_danif: Float     
  $prd_volume: Float        
  $prd_linear: Float        
  $prd_posicao: Int
  $prd_multiplic: Float     
  $prd_ncm: Int 
  $prd_meta_vds: Float      
  $prd_cesta_basica: Boolean  
  $prd_peso: Float          
  $prd_prod_cubado: Boolean   
  $prd_localiz: String       
  $prd_cst: String     
  $prd_subst_trib: String    
  $prd_qtd_inicial_1: Float
  $prd_qtd_inicial_2: Float
  $prd_qtd_atual_1: Float      
  $prd_qtd_atual_2: Float
  $company: Int
){
  updateProduct(
    from: $from
    code: $code,
    company: $company
    input:{
      prd_descricao: $prd_descricao     
      prd_tipo: $prd_tipo          
      prd_marca: $prd_marca         
      prd_ctrl_lote: $prd_ctrl_lote     
      prd_na_web: $prd_na_web        
      prd_linha: $prd_linha         
      prd_aliq_st: $prd_aliq_st       
      prd_codigo_baixa: $prd_codigo_baixa    
      prd_codigo_baixa_dv: $prd_codigo_baixa_dv 
      prd_unidade_principal: $prd_unidade_principal     
      prd_unidade_estoque: $prd_unidade_estoque     
      prd_unidade_venda: $prd_unidade_venda     
      prd_estoque_maximo: $prd_estoque_maximo
      prd_estoque_minimo: $prd_estoque_minimo
      prd_icms_ecf: $prd_icms_ecf      
      prd_sub_tipo: $prd_sub_tipo      
      prd_tipo_mat: $prd_tipo_mat      
      prd_reducao_icms: $prd_reducao_icms       
      prd_qtd_minima: $prd_qtd_minima    
      prd_status: $prd_status        
      prd_vd_sdo_negat: $prd_vd_sdo_negat  
      prd_cod_barra: $prd_cod_barra     
      prd_qtd_reserv: $prd_qtd_reserv    
      prd_qtd_mostr: $prd_qtd_mostr     
      prd_qtd_entregar: $prd_qtd_entregar  
      prd_qtd_danif: $prd_qtd_danif     
      prd_volume: $prd_volume        
      prd_linear: $prd_linear        
      prd_posicao: $prd_posicao
      prd_multiplic: $prd_multiplic     
      prd_ncm: $prd_ncm 
      prd_meta_vds: $prd_meta_vds      
      prd_cesta_basica: $prd_cesta_basica  
      prd_peso: $prd_peso          
      prd_prod_cubado: $prd_prod_cubado   
      prd_localiz: $prd_localiz       
      prd_cst: $prd_cst     
      prd_subst_trib: $prd_subst_trib    
      prd_qtd_inicial_1: $prd_qtd_inicial_1
      prd_qtd_inicial_2: $prd_qtd_inicial_2
      prd_qtd_atual_1: $prd_qtd_atual_1      
      prd_qtd_atual_2: $prd_qtd_atual_2 
  }){id}}`;


const deleteProduct = `
  mutation DelteProduct(
    $code: Int,
    $from: String,
    $company:Int!
  ){
  deleteProduct(
    code: $code
    from: $from
    company:$company
  )
}`;

const fetchProduct = `
query FetchProduct($company: Int! $code: Int) {
  product(company: $company code: $code) {
    id
    prd_codigo
    prd_codigo_dv
    prd_descricao
    prd_tipo {
      id
      tp_codigo
    }
    prd_marca {
      id
      mrc_codigo
    }
    prd_ctrl_lote
    prd_na_web
    prd_linha {
      id
      lin_codigo
    }
    prd_aliq_st
    prd_codigo_baixa
    prd_codigo_baixa_dv
    prd_unidade_principal {
      id
      med_codigo
    }
    prd_unidade_estoque {
      id
      med_codigo
    }
    prd_unidade_venda(company: $company) {
      id
      med_codigo
    }
    prd_estoque_maximo
    prd_estoque_minimo
    prd_icms_ecf
    prd_sub_tipo {
      id
      stp_codigo
    }
    prd_tipo_mat
    prd_reducao_icms
    prd_qtd_minima
    prd_status
    prd_vd_sdo_negat
    prd_cod_barra
    prd_qtd_reserv
    prd_qtd_mostr
    prd_qtd_entregar
    prd_qtd_danif
    prd_volume
    prd_linear
    prd_posicao
    prd_multiplic
    prd_ncm {
      id
      ncm_codigo
    }
    prd_meta_vds
    prd_cesta_basica
    prd_peso
    prd_prod_cubado
    prd_localiz
    prd_cst
    prd_qtd_inicial_1
    prd_qtd_inicial_2
    prd_qtd_atual_1
    prd_qtd_atual_2
    relation_pup(company: $company) {
      id
      unidade_medida(company: $company) {
        id
        med_codigo
      }
      tipo_preco(company: $company) {
        id
        prc_codigo
      }
      tipo_medida
      valor
      relacao_primaria
      custo
      margem
      tratamento_centavos
    },
    empresa {
      id
    }
  }
}`;

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  fetchProduct,
};