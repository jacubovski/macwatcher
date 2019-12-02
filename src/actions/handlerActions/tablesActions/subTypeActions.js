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
  BulkSubTypeCreate,
  CreateSubType,
  UpdateSubType,
  DeleteSubType,
  FetchSubType,
  AllSubTypes,
} = require('../../../schemas/tables/subtype');
const handlerSubType = async (...args) => {
  const [action, variables] = args;
  switch (action) {
    case 'createSubType':
      const resCreate = await createSubType(variables);
      return resCreate;
    case 'updateSubType':
      const resUpdate = await updateSubType(variables);
      return resUpdate;
    case 'deleteSubType':
      const resDelete = await deleteSubType(variables);
      return resDelete;
    case 'bulkSubTypeCreate':
      const bulkSubType = await bulkCreateSubType(variables);
      return bulkSubType;  
    case 'fetchSubType':
      const fetchSubType = await fthSubType(variables, action);
      return fetchSubType;
    case 'allSubTypes':
      const allSubType = await allSubTypes(variables, action);
      return allSubType;
    default:
      break;
  }
};

const fthSubType = async (payload, action) => {
  try {
    const variables = { ...payload, from: 'watcher'};
    const response = await axiosAuth.post('/macweb', {
      query: FetchSubType,
      variables,
    });
    const { subtype } = response.data.data;
    const code = subtype.stp_codigo;
    const data = formatTablesForOneRegisters(subtype);
    writeFile(data, action, code);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'FetchSubType');
    return { code: 500, status: 'error' };
  }
};

const allSubTypes = async (variables, action) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: AllSubTypes,
      variables,
    });
    const { subtypes } = response.data.data;
    const data = formatTablesForAllRegisters(subtypes);
    writeFile(data, action, null);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'AllSubTypes');
    return { code: 500, status: 'error' };
  }
};

const createSubType = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: CreateSubType,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'createSubType');
    return {code:500, status: 'error'};
  }
};

const bulkCreateSubType = async (subtypes) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: BulkSubTypeCreate,
      variables: { input: subtypes },
    });
    if(response.data.errors) {
      handlerError(response.data.errors,'bulkSubTypeCreate');
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'bulkSubTypeCreate');
    return {code:500, status: 'error'};
  }
};
const updateSubType = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: UpdateSubType,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'updateSubType');
    return {code:500, status: 'error'};
  }
};

const deleteSubType = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: DeleteSubType,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'deleteSubType');
    return {code:500, status: 'error'};
  }
};

module.exports = {
  handlerSubType
};
