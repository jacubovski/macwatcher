 const { axiosAuth } = require('../../../axios/axios_auth');
 const { handlerError, appendLogs } = require('../../handlerErrors');
const {
  formatTablesForAllRegisters,
  formatTablesForOneRegisters,
} = require('../responseFormat');
const {
  writeFile
} = require('../../writeFile');
const {
  BulkHistoricCreate,
  CreateHistoric,
  UpdateHistoric,
  DeleteHistoric,
  FetchHistoric,
  AllHistorics,
} = require('../../../schemas/tables/historic');
const handlerHistoric = async (...args) => {
  const [action, variables] = args;
  switch (action) {
    case 'createHistoric':
      const resCreate = await createHistoric(variables);
      return resCreate;
    case 'updateHistoric':
      const resUpdate = await updateHistoric(variables);
      return resUpdate;
    case 'deleteHistoric':
      const resDelete = await deleteHistoric(variables);
      return resDelete;
    case 'bulkHistoricCreate':
      const bulkHistoric = await bulkCreateHistoric(variables);
      return bulkHistoric;
    case 'fetchHistoric':
      const fetchHistoric = await fthHistoric(variables, action);
    return fetchHistoric;
      case 'allHistorics':
      const allHistoric = await allHistorics(variables, action);
      return allHistoric;
    default:
      break;

  }
};

const fthHistoric = async (payload, action) => {
  try {
    const variables = { ...payload, from: 'watcher'};
    const response = await axiosAuth.post('/macweb', {
      query: FetchHistoric,
      variables,
    });
    const { historic } = response.data.data;
    const code = historic.hst_codigo;
    const data = formatTablesForOneRegisters(historic);
    writeFile(data, action, code);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'FetchHistoric');
    return { code: 500, status: 'error' };
  }
};

const allHistorics = async (variables, action) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: AllHistorics,
      variables,
    });
    const { historics } = response.data.data;
    const data = formatTablesForAllRegisters(historics);
    writeFile(data, action, null);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'AllHistorics');
    return { code: 500, status: 'error' };
  }
};

const createHistoric = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: CreateHistoric,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'createHistoric');
    return {code:500, status: 'error'};
  }
};

const bulkCreateHistoric = async (historics) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: BulkHistoricCreate,
      variables: { input: historics },
    });
    if(response.data.errors) {
      handlerError(response.data.errors,'bulkHistoricCreate');
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'bulkHistoricCreate');
    return {code:500, status: 'error'};
  }
};

const updateHistoric = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: UpdateHistoric,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'updateHistoric');
    return {code:500, status: 'error'};
  }
};

const deleteHistoric = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: DeleteHistoric,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'deleteHistoric');
    return {code:500, status: 'error'};
  }
};

module.exports = {
  handlerHistoric
};
