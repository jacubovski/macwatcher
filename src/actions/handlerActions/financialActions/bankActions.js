const { axiosAuth } = require('../../../axios/axios_auth');
const { 
  createBank,
  updateBank,
  deleteBank,
  bulkCreateBank,
  } = require('./schemas/bank');
const { handlerError, appendLogs } = require('../../handlerErrors');

const handlerBank = async (...args) => {
  const [action, variables] = args;
  switch (action) {
    case 'createBank':
      const resCreate = await crtBank(variables);
      return resCreate;
    case 'updateBank':
      const resUpdate = await updtBank(variables);
      return resUpdate;
    case 'deleteBank':
      const resDelete = await delBank(variables);
      return resDelete;
    case 'bulkBankCreate':
      const bulkBank = await bulkCrtBank(variables);
      return bulkBank;
    default:
      break;
  }
};
const bulkCrtBank = async (banks) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${bulkCreateBank}`,
      variables: {
        input: banks
      },
    });
    if (response.data.errors) {
      handlerError(response.data.errors, 'bulkBankCreate');
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
    appendLogs(error.response.data, 'bulkBankCreate');
    return {
      code: 500,
      status: 'error'
    };
  }
};
const crtBank = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${createBank}`,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'createBank');
    return {code:500, status: 'error'};
  }
};
const updtBank = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${updateBank}`,
      variables
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'updateBank');
    return {code:500, status: 'error'};
  }
};
const delBank = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${deleteBank}`,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'deleteBank');
    return {code:500, status: 'error'};
  }
};

module.exports = {
  handlerBank
};