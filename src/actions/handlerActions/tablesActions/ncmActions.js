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
  BulkNcmCreate,
  CreateNcm,
  UpdateNcm,
  DeleteNcm,
  FetchNcm,
  AllNcms,
} = require('../../../schemas/tables/ncm');
 const handlerNcm = async (...args) => {
   const [action, variables] = args;
  switch (action) {
    case 'createNcm':
      const resCreate = await createNcm(variables);
      return resCreate;
    case 'updateNcm':
      const resUpdate = await updateNcm(variables);
      return resUpdate;
    case 'deleteNcm':
      const resDelete = await deleteNcm(variables);
      return resDelete;
    case 'bulkNcmCreate':
      const bulkNcm = await bulkCreateNcm(variables);
      return bulkNcm;
    case 'fetchNcm':
      const fetchNcm = await fthNcm(variables, action);
      return fetchNcm;
    case 'allNcms':
      const allNcm = await allNcms(variables, action);
      return allNcm;
    default:
      break;
  }
};

const fthNcm = async (payload, action) => {
  try {
    const variables = { ...payload, from: 'watcher'};
    const response = await axiosAuth.post('/macweb', {
      query: FetchNcm,
      variables,
    });
    const { ncm } = response.data.data;
    const code = ncm.ncm_codigo;
    const data = formatTablesForOneRegisters(ncm);
    writeFile(data, action, code);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'FetchNcm');
    return { code: 500, status: 'error' };
  }
};

const allNcms = async (variables, action) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: AllNcms,
      variables,
    });
    const { ncms } = response.data.data;
    const data = formatTablesForAllRegisters(ncms);
    writeFile(data, action, null);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'AllNcms');
    return { code: 500, status: 'error' };
  }
};


const createNcm = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: CreateNcm,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors,'createNcm');
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'createNcm');
    return {code:500, status: 'error'};
  }
};

const bulkCreateNcm = async (ncms) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: BulkNcmCreate,
      variables: { input: ncms },
    });
    console.log(response);
    if(response.data.errors) {
      handlerError(response.data.errors,'bulkNcmCreate');
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
    
  } catch (error) {
    appendLogs(error.response.data,'bulkNcmCreate');
    return {code:500, status: 'error'};
  }
};

const updateNcm = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: UpdateNcm,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors,'updateNcm');
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'updateNcm');
    return {code:500, status: 'error'};
  }
};

const deleteNcm = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: DeleteNcm,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors,'deleteNcm');
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'deleteNcm');
    return {code:500, status: 'error'};
  }
};

module.exports = {
  handlerNcm
};
