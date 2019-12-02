const { axiosAuth } = require('../../../axios/axios_auth');
const {
  createProvider,
  updateProvider,
  deleteProvider,
  bulkCreateProvider,
  fetchProvider,
} = require('./schemas/provider');
const { formatOthers } = require('../responseFormat');
const { writeFile } = require('../../writeFile');
const { handlerError, appendLogs } = require('../../handlerErrors');

const handlerProvider = async (...args) => {
  const [action, variables] = args;
  switch (action) {
    case 'createProvider':
      const resCreate = await crtProvider(variables);
      return resCreate;
    case 'updateProvider':
      const resUpdate = await updtProvider(variables);
      return resUpdate;
    case 'deleteProvider':
      const resDelete = await delProvider(variables);
      return resDelete;
    case 'bulkProviderCreate':
      const bulkProvider = await bulkCrtProvider(variables);
      return bulkProvider;
    case 'fetchProvider':
      const resFetchProvider = await fetchProv(variables, action);
      return resFetchProvider;
    default:
      break;
  }
};

const fetchProv = async (variables, action) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${fetchProvider}`,
      variables,
    });
    const { provider } = response.data.data;
    const code = provider.frn_codigo;
    const data = formatOthers(provider, 'frn_');
    writeFile(data, action, code);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'fetchProvider');
    return { code: 500, status: 'error' };
  }
};

const crtProvider = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${createProvider}`,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'createProvider');
    return {code:500, status: 'error'};
  }
};
const updtProvider = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${updateProvider}`,
      variables
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'updateProvider');
    return {code:500, status: 'error'};
  }
};
const delProvider = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${deleteProvider}`,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'deleteProvider');
    return {code:500, status: 'error'};
  }
};
const bulkCrtProvider = async (providers) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${bulkCreateProvider}`,
      variables: {
        input: providers
      },
    });
    if (response.data.errors) {
      handlerError(response.data.errors, 'bulkProviderCreate');
      return {
        code: 500,
        status: 'error'
      };
    } else {
      return {
        code: 200,
        status: 'success'
      };
    }
  } catch (error) {
    appendLogs(error.response.data, 'bulkProviderCreate');
    return {
      code: 500,
      status: 'error'
    };
  }
};

module.exports = {
  handlerProvider
};