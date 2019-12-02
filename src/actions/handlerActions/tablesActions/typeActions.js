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
  BulkTypeCreate,
  CreateType,
  UpdateType,
  DeleteType,
  FetchType,
  AllTypes,
} = require('../../../schemas/tables/type');
const handlerType = async (...args) => {
  const [action, variables] = args;
  switch (action) {
    case 'createType':
      const resCreate = await createType(variables);
      return resCreate;
    case 'updateType':
      const resUpdate = await updateType(variables);
      return resUpdate;
    case 'deleteType':
      const resDelete = await deleteType(variables);
      return resDelete;
    case 'bulkTypeCreate':
      const bulkType = await bulkCreateType(variables);
      return bulkType;  
    case 'fetchType':
      const fetchType = await fthType(variables, action);
      return fetchType;
    case 'allTypes':
      const allType = await allTypes(variables, action);
      return allType;
    default:
      break;
  }
};

const fthType = async (payload, action) => {
  try {
    const variables = { ...payload, from: 'watcher'};
    const response = await axiosAuth.post('/macweb', {
      query: FetchType,
      variables,
    });
    const { type } = response.data.data;
    const code = type.tp_codigo;
    const data = formatTablesForOneRegisters(type);
    writeFile(data, action, code);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'FetchType');
    return { code: 500, status: 'error' };
  }
};

const allTypes = async (variables, action) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: AllTypes,
      variables,
    });
    const { types } = response.data.data;
    const data = formatTablesForAllRegisters(types);
    writeFile(data, action, null);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'AllTypes');
    return { code: 500, status: 'error' };
  }
};

const createType = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: CreateType,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'createType');
    return {code:500, status: 'error'};
  }
};

const bulkCreateType = async (types) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: BulkTypeCreate,
      variables: { input: types },
    });
    if(response.data.errors) {
      handlerError(response.data.errors,'bulkTypeCreate');
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'bulkTypeCreate');
    return {code:500, status: 'error'};
  }
};

const updateType = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: UpdateType,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'updateType');
    return {code:500, status: 'error'};
  }
};

const deleteType = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: DeleteType,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'deleteType');
    return {code:500, status: 'error'};
  }
};

module.exports = {
  handlerType
};
