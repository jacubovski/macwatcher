const { axiosAuth } = require('../../../axios/axios_auth');
const { 
  createPlotsPaymentTerm,
  updatePlotsPaymentTerm,
  deletePlotsPaymentTerm,
  bulkCreatePlotsPaymentTerm,
  } = require('./schemas/plotsPaymentTerm');
const { handlerError, appendLogs } = require('../../handlerErrors');

const handlerPlotsPaymentTerm = async (...args) => {
  const [action, variables] = args;
  switch (action) {
    case 'createPlotsPaymentTerm':
      const resCreate = await crtPlotsPaymentTerm(variables);
      return resCreate;
    case 'updatePlotsPaymentTerm':
      const resUpdate = await updtPlotsPaymentTerm(variables);
      return resUpdate;
    case 'deletePlotsPaymentTerm':
      const resDelete = await delPlotsPaymentTerm(variables);
      return resDelete;
    case 'bulkPlotsPaymentTermCreate':
      const bulkPlotsPaymentTerm = await bulkCrtPlotsPaymentTerm(variables);
      return bulkPlotsPaymentTerm;
    default:
      break;
  }
};

const crtPlotsPaymentTerm = async (plots) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${createPlotsPaymentTerm}`,
      variables: { input: plots },
    });
    if(response.data.errors) {
      handlerError(response);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'createPlotPaymentTerm');
    return {code:500, status: 'error'};
  }
};

const bulkCrtPlotsPaymentTerm = async (form) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${bulkCreatePlotsPaymentTerm}`,
      variables: {
        input: form
      },
    });
    if (response.data.errors) {
      handlerError(response.data.errors, 'bulkPlotsPaymentTermCreate');
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
    appendLogs(error.response.data, 'bulkPlotsPaymentTermCreate');
    return {
      code: 500,
      status: 'error'
    };
  }
};

const updtPlotsPaymentTerm = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${updatePlotsPaymentTerm}`,
      variables
    });
    if(response.data.errors) {
      handlerError(response);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'updatePlotPaymentTerm');
    return {code:500, status: 'error'};
  }
};

const delPlotsPaymentTerm = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${deletePlotsPaymentTerm}`,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'deletePlotPaymentTerm');
    return {code:500, status: 'error'};
  }
};

module.exports = {
  handlerPlotsPaymentTerm
};