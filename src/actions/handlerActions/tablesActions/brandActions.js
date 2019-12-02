const { axiosAuth } = require('./../../../axios/axios_auth');
const { handlerError, appendLogs } = require('../../handlerErrors');
const {
  formatTablesForAllRegisters,
  formatTablesForOneRegisters,
} = require('../responseFormat');
const { writeFile } = require('../../writeFile');
const {
  BulkBrandCreate,
  CreateBrand,
  UpdateBrand,
  DeleteBrand,
  FetchBrand,
  AllBrands,
} = require('../../../schemas/tables/brand');

const handlerBrand = async (...args) => {
  const [action, variables] = args;
  switch (action) {
    case 'createBrand':
      const resCreate = await createBrand(variables);
      return resCreate;
    case 'updateBrand':
      const resUpdate = await updateBrand(variables);
      return resUpdate;
    case 'deleteBrand':
      const resDelete = await deleteBrand(variables);
      return resDelete;
    case 'bulkBrandCreate':
      const bulkBrand = await bulkCreateBrand(variables);
      return bulkBrand;
    case 'fetchBrand':
      const fetchBrand = await fthBrand(variables, action);
      return fetchBrand;
    case 'allBrands':
      const allBrand = await allBrands(variables, action);
      return allBrand;
    default:
      break;
  }
};

const fthBrand = async (payload, action) => {
  try {
    const variables = { ...payload, from: 'watcher'};
    const response = await axiosAuth.post('/macweb', {
      query: FetchBrand,
      variables,
    });
    const { brand } = response.data.data;
    const code = brand.mrc_codigo;
    const data = formatTablesForOneRegisters(brand);
    writeFile(data, action, code);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'FetchBrand');
    return { code: 500, status: 'error' };
  }
};

const allBrands = async (variables, action) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: AllBrands,
      variables,
    });
    const { brands } = response.data.data;
    const data = formatTablesForAllRegisters(brands);
    writeFile(data, action, null);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'AllBrands');
    return { code: 500, status: 'error' };
  }
};

const createBrand = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: CreateBrand,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'createBrand');
    return {code:500, status: 'error'};
  }
};

const bulkCreateBrand = async (brands) => {
  
  try {
    const response = await axiosAuth.post('/macweb',{
      query: BulkBrandCreate,
      variables: { input: brands },
    });
    if(response.data.errors) {
      handlerError(response.data.errors,'bulkBrandCreate');
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'bulkBrandCreate');
    return {code:500, status: 'error'};
  }
};

const updateBrand = async (variables) => {
 
  try {
    const response = await axiosAuth.post('/macweb',{
      query: UpdateBrand,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'updateBrand');
    return {code:500, status: 'error'};
  }
};

const deleteBrand = async (variables) => {
  
  try {
    const response = await axiosAuth.post('/macweb',{
      query: DeleteBrand,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'deleteBrand');
    return {code:500, status: 'error'};
  }
};

module.exports = {
  handlerBrand
};