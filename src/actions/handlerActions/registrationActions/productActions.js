const { axiosAuth } = require('../../../axios/axios_auth');
const {
  createProduct,
  updateProduct,
  deleteProduct,
  fetchProduct,
} = require('./schemas/product');
const { formatProduct } = require('../responseFormat');
const { writeFile } = require('../../writeFile');
const { handlerError, appendLogs } = require('../../handlerErrors');

const handlerProduct = async (...args) => {
  const [action, variables] = args;
  switch (action) {
    case 'createProduct':
      const resCreate = await crtProduct(variables);
      return resCreate;
    case 'updateProduct':
      const resUpdate = await updtProduct(variables);
      return resUpdate;
    case 'deleteProduct':
      const resDelete = await delProduct(variables);
      return resDelete;
    case 'fetchProduct':
     const resFetchProduct = await fetchPrd(variables, action);
     return resFetchProduct;
    default:
      break;
  }
};

const fetchPrd = async (variables, action) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${fetchProduct}`,
      variables,
    });
    const { product } = response.data.data;
    const code = product.prd_codigo;
    const data = formatProduct(product);
    writeFile(data, action, code);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'fetchProduct');
    return { code: 500, status: 'error' };
  }
};

const crtProduct = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${createProduct}`,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'CreateProduct');
    return {code:500, status: 'error'};
  }
};
const updtProduct = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${updateProduct}`,
      variables
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'updateProduct');
    return {code:500, status: 'error'};
  }
};
const delProduct = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${deleteProduct}`,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'deleteProduct');
    return {code:500, status: 'error'};
  }
};

module.exports = {
  handlerProduct
};













