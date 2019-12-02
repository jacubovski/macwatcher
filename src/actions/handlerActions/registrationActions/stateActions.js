const { axiosAuth } = require('../../../axios/axios_auth');
const {
  createState,
  updateState,
  deleteState,
  bulkCreateState,
  fetchState,
} = require('./schemas/state');
const { formatOthers } = require('../responseFormat');
const { writeFile } = require('../../writeFile');
const { handlerError, appendLogs } = require('../../handlerErrors');

const handlerState = async (...args) => {
  const [action, variables] = args;
  switch (action) {
    case 'createState':
      const resCreate = await crtState(variables);
      return resCreate;
    case 'updateState':
      const resUpdate = await updtState(variables);
      return resUpdate;
    case 'deleteState':
      const resDelete = await delState(variables);
      return resDelete;
    case 'bulkStateCreate':
      const bulkState = await bulkCrtState(variables);
      return bulkState;
    case 'fetchState':
      const resFetchState = await fetchSales(variables, action);
      return resFetchState;
    default:
      break;
  }
};

    

const fetchSales = async (variables, action) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${fetchState}`,
      variables,
    });
    const { state } = response.data.data;
    const code = state.vnd_codigo;
    const data = formatOthers(state, 'vnd_');
    writeFile(data, action, code);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'fetchState');
    return { code: 500, status: 'error' };
  }
};

const crtState = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${createState}`,
      variables,
    });
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data,'createState');
    return {code:500, status: 'error'};
  }
};

const bulkCrtState = async (state) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${bulkCreateState}`,
      variables: {
        input: state
      },
    });
    if (response.data.errors) {
      handlerError(response.data.errors, 'bulkStateCreate');
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
    appendLogs(error.response.data, 'bulkStateCreate');
    return {
      code: 500,
      status: 'error'
    };
  }
};

const updtState = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${updateState}`,
      variables
    });
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data,'updateState');
    return {code:500, status: 'error'};
  }
};

const delState = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${deleteState}`,
      variables,
    });
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data,'deleteState');
    return {code:500, status: 'error'};
  }
};

module.exports = {
  handlerState
};
