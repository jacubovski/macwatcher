const formatProduct = (product) => {
  let dataText = ``;
  Object.keys(product).forEach(k => {
    if (typeof product[k] !== 'object' || !product[k]) {
      if (k === 'prd_codigo_baixa') {
        dataText += `prd_cod_bx:${product[k]}\r\n`;
      } else if (k === 'prd_codigo_baixa_dv') {
        dataText += `prd_cod_bx_dv:${product[k]}\r\n`;
      } else if (k === 'prd_codigo_dv') {
        dataText += `prd_cod_dv:${product[k]}\r\n`;
      } else if (k === 'prd_tipo_mat') {
        dataText += `prd_tp_mat:${product[k]}\r\n`;
      } else if (k !== 'prd_tipo_mat' || k !== 'prd_codigo_dv' || k !== 'prd_codigo_baixa_dv' || k !== 'prd_codigo_baixa') {
        dataText += `${k}:${product[k]}\r\n`;
      }
    } else if (k === 'prd_tipo') {
    dataText += `${k}:${product[k].tp_codigo}\r\n`;
    } else if (k === 'prd_sub_tipo') {
    dataText += `${k}:${product[k].stp_codigo}\r\n`;
    } else if (k === 'prd_linha') {
    dataText += `${k}:${product[k].lin_codigo}\r\n`;
    } else if (k === 'prd_marca') {
    dataText += `${k}:${product[k].mrc_codigo}\r\n`;
    } else if (k === 'prd_ncm') {
    dataText += `${k}:${product[k].ncm_codigo}\r\n`;
    } else if (k === 'prd_unidade_principal') {
    dataText += `${k}:${product[k].med_codigo}\r\n`;
    } else if (k === 'prd_unidade_venda') {
    dataText += `${k}:${product[k].med_codigo}\r\n`;
    } else if (k === 'relation_pup') {
    product[k].forEach((rel, i) => {
      const uMedCode = rel.unidade_medida.med_codigo;
      const tpPriceCode = rel.tipo_preco.prc_codigo;
      dataText += `relation_pup-${i + 1}:{\r\n`;
      dataText += ` tipo_medida:${rel.tipo_medida}\r\n`;
      dataText += ` unidade_medida:${uMedCode}\r\n`;
      dataText += ` tipo_preco:${tpPriceCode}\r\n`;
      dataText += ` valor:${rel.valor}\r\n`;
      dataText += ` relacao_primaria:${rel.relacao_primaria}\r\n`;
      dataText += ` custo:${rel.custo}\r\n`;
      dataText += ` margem:${rel.margem}\r\n`;
      dataText += ` tratamento_centavos:${rel.tratamento_centavos}\r\n`;
      dataText += `}\r\n`;
    });
    }
  });
  return dataText;
};

const formatCustomer = (customer) => {
  let dataText = ``;
  Object.keys(customer).forEach(k => {
    if (typeof customer[k] !== 'object' || !customer[k]) {
      dataText += `${k}: ${customer[k]}\r\n`;
    } else if (k === 'cli_loja') {
      dataText += `${k}: ${customer[k].lj_codigo || null}\r\n`;
    } else if (k === 'cli_vendedor') {
      dataText += `${k}: ${customer[k].vnd_codigo || null}\r\n`;
    } else if (k === 'cli_tipo_cliente') {
      dataText += `${k}: ${customer[k].tpc_codigo || null}\r\n`;
    } else if (k === 'cli_area') {
      dataText += `${k}: ${customer[k].area_codigo || null}\r\n`;
    } else if (k === 'cli_tipo_preco') {
      dataText += `${k}: ${customer[k].tpc_codigo || null}\r\n`;
    } else if (k === 'cli_transportadora') {
      dataText += `${k}: ${customer[k].trans_codigo || null}\r\n`;
    } else if (k === 'cli_endereco') {
      customer[k].forEach((rel, i) => {
        dataText += `endereco-${i + 1}: {\r\n`;
        dataText += ` end_origem: ${rel.end_origem}\r\n`;
        dataText += ` end_codigo_origem: ${rel.end_codigo_origem}\r\n`;
        dataText += ` end_tipo: ${rel.end_tipo}\r\n`;
        dataText += ` end_endereco: ${rel.end_endereco}\r\n`;
        dataText += ` end_numero: ${rel.end_numero}\r\n`;
        dataText += ` end_complemento: ${rel.end_complemento}\r\n`;
        dataText += ` end_bairro: ${rel.end_bairro}\r\n`;
        dataText += ` end_cep: ${rel.end_cep}\r\n`;
        dataText += ` end_uf: ${rel.end_uf}\r\n`;
        dataText += ` end_cod_municipio: ${rel.end_cod_municipio}\r\n`;
        dataText += ` end_municipio: ${rel.end_municipio}\r\n`;
        dataText += `}\r\n`;
      });
    }
  });
  return dataText;
};

const formatOthers = (...args) => {
  const [a , p] = args;
  let dataText = ``;
  Object.keys(a).forEach(k => {
    if (typeof a[k] !== 'object' || !a[k]) {
      dataText += `${k}: ${a[k]}\r\n`;
    } else if (k === `${p}endereco`) {
      a[k].forEach((rel, i) => {
        dataText += `endereco-${i + 1}: {\r\n`;
        dataText += ` end_origem: ${rel.end_origem}\r\n`;
        dataText += ` end_codigo_origem: ${rel.end_codigo_origem}\r\n`;
        dataText += ` end_tipo: ${rel.end_tipo}\r\n`;
        dataText += ` end_endereco: ${rel.end_endereco}\r\n`;
        dataText += ` end_numero: ${rel.end_numero}\r\n`;
        dataText += ` end_complemento: ${rel.end_complemento}\r\n`;
        dataText += ` end_bairro: ${rel.end_bairro}\r\n`;
        dataText += ` end_cep: ${rel.end_cep}\r\n`;
        dataText += ` end_uf: ${rel.end_uf}\r\n`;
        dataText += ` end_cod_municipio: ${rel.end_cod_municipio}\r\n`;
        dataText += ` end_municipio: ${rel.end_municipio}\r\n`;
        dataText += `}\r\n`;
      });
    }
  });
  return dataText;
};

const formatTablesForAllRegisters = (data) => {
  let dataText = ``;
  const keys = [];
  Object.keys(data[0]).forEach(k => keys.push(k));
  switch (keys.length) {
    case 2:
      data.forEach(d => {
        dataText += `${keys[0]}:${d[keys[0]]}#${keys[1]}:${d[keys[1]]}\r\n`;
      });
      break;
    case 3:
      data.forEach(d => {
        dataText += `${keys[0]}:${d[keys[0]]}#${keys[1]}:${d[keys[1]]}#${keys[2]}:${d[keys[2]]}\r\n`;
      });
      break;
    case 4:
      data.forEach(d => {
        dataText += `
        ${keys[0]}:${d[keys[0]]}#${keys[1]}:${d[keys[1]]}#${keys[2]}:${d[keys[2]]}#
        ${keys[3]}:${d[keys[3]]}\r\n`;
      });
    break;
    case 5:
      data.forEach(d => {
        dataText += `
        ${keys[0]}:${d[keys[0]]}#${keys[1]}:${d[keys[1]]}#${keys[2]}:${d[keys[2]]}#
        ${keys[3]}:${d[keys[3]]}#${keys[4]}:${d[keys[4]]}\r\n`;
      });
    break;
    case 13:
      data.forEach(d => {
        dataText += `
        ${keys[0]}:${d[keys[0]]}#${keys[1]}:${d[keys[1]]}#${keys[2]}:${d[keys[2]]}#
        ${keys[3]}:${d[keys[3]]}#${keys[4]}:${d[keys[4]]}#${keys[5]}:${d[keys[5]]}#
        ${keys[6]}:${d[keys[6]]}#${keys[7]}:${d[keys[7]]}#${keys[8]}:${d[keys[8]]}
        ${keys[9]}:${d[keys[9]]}#${keys[10]}:${d[keys[10]]}#${keys[11]}:${d[keys[11]]}
        ${keys[12]}:${d[keys[12]]}\r\n`;
      });
    break;
    default:
      break;
  }
  return dataText;
};

const formatTablesForOneRegisters = (data) => {
  let dataText = ``;
  Object.keys(data).forEach(k => {
    dataText += `${k}:${data[k]}\r\n`;
  });
  return dataText;
};

const formaPaymentForm = (...args) => {
  const [ data ] = args;
  let dataText = ``;
  data.forEach(i => {
    dataText += '{\r\n';
    Object.keys(i).forEach(keys => {
      dataText += `${keys}:${i[keys]}\r\n`;
    });
    dataText += '}\r\n';
  });
  return dataText;
};

const formatPaymentTerms = (data) => {
  let dataText = ``;
  Object.keys(data).forEach(key => {
    if (key === 'plots') {
      data[key].forEach((p, i) => {
        dataText += `parcela-${i + 1}: {\r\n`;
        dataText += ` ppp_parcela: ${p.ppp_parcela}\r\n`;
        dataText += ` ppp_parcela: ${p.ppp_dias}\r\n`;
        dataText += ` ppp_parcela: ${p.ppp_receb_dia}\r\n`;
        dataText += `}\r\n`;
      });
    } else {
      dataText += `${key}:${data[key]}\r\n`;
    }
  });
  return dataText;
};

const formatAllPaymentTerms = (...args) => {
  const [ data ] = args;
  let dataText = ``;
  data.forEach(d => {
    dataText += `{\r\n`;
    Object.keys(d).forEach(key => {
      if (key === 'plots') {
        d[key].forEach((p, i) => {
          dataText += `parcela-${i + 1}: {\r\n`;
          dataText += ` ppp_parcela: ${p.ppp_parcela}\r\n`;
          dataText += ` ppp_parcela: ${p.ppp_dias}\r\n`;
          dataText += ` ppp_parcela: ${p.ppp_receb_dia}\r\n`;
          dataText += `}\r\n`;
        });
      }else {
        dataText += `${key}:${d[key]}\r\n`;
      }
    });
    dataText += `}\r\n`;
  });
  return dataText;
};

module.exports = {
 formatProduct,
 formatCustomer,
 formatOthers,
 formatTablesForAllRegisters,
 formatTablesForOneRegisters,
 formaPaymentForm,
 formatPaymentTerms,
 formatAllPaymentTerms,
};
