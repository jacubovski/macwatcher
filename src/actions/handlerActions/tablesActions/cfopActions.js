const { axiosAuth } = require('../../../axios/axios_auth');
const { handlerError, appendLogs } = require('../../handlerErrors');
const {
  formatTablesForAllRegisters,
  formatTablesForOneRegisters,
} = require('../responseFormat');
const { writeFile } = require('../../writeFile');
const {
  BulkCfopCreate,
  CreateCfop,
  UpdateCfop,
  DeleteCfop,
  FetchCfop,
  AllCfops,
} = require('../../../schemas/tables/cfop');
 
 const handlerCfop = async (...args) => {
    const [action, variables] = args;
    switch (action) {
      case 'createCfop':
        const resCreate = await createCfop(variables);
        return resCreate;
      case 'updateCfop':
        const resUpdate = await updateCfop(variables);
        return resUpdate;
      case 'deleteCfop':
        const resDelete = await deleteCfop(variables);
        return resDelete;
      case 'bulkCfopCreate':
        const bulkCfop = await bulkCreateCfop(variables);
        return bulkCfop; 
      case 'fetchCfop':
        const fetchCfop = await fthCfop(variables, action);
        return fetchCfop;
      case 'allCfops':
        const allCfop = await allCfops(variables, action);
        return allCfop;
      default:
        break;
    }
  };

const fthCfop = async (payload, action) => {
  try {
    const variables = { ...payload, from: 'watcher'};
    const response = await axiosAuth.post('/macweb', {
      query: FetchCfop,
      variables,
    });
    const { cfop } = response.data.data;
    const code = cfop.cfop_codigo;
    const data = formatTablesForOneRegisters(cfop);
    writeFile(data, action, code);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'FetchCfop');
    return { code: 500, status: 'error' };
  }
};

const allCfops = async (variables, action) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: AllCfops,
      variables,
    });
    const { cfops } = response.data.data;
    const data = formatTablesForAllRegisters(cfops);
    writeFile(data, action, null);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'AllCfops');
    return { code: 500, status: 'error' };
  }
};

const createCfop = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: CreateCfop,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'createCfop');
    return {code:500, status: 'error'};
  }
};
const bulkCreateCfop = async (cfops) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: BulkCfopCreate,
      variables: { input: cfops },
    });
    if(response.data.errors) {
      handlerError(response.data.errors,'bulkCfopCreate');
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'bulkCfopCreate');
    return {code:500, status: 'error'};
  }
};
const updateCfop = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: UpdateCfop,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'updateCfop');
    return {code:500, status: 'error'};
  }
};

const deleteCfop = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: DeleteCfop,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'deleteCfop');
    return {code:500, status: 'error'};
  }
};

module.exports = {
  handlerCfop
};