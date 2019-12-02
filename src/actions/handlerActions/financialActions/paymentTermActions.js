const { axiosAuth } = require('../../../axios/axios_auth');
const {
  formatAllPaymentTerms,
  formatPaymentTerms,
} = require('../responseFormat');
const {
  writeFile
} = require('../../writeFile');
const { 
  createPaymentTerm,
  updatePaymentTerm,
  deletePaymentTerm,
  bulkCreatePaymentTerm,
  FetchPaymentTerm,
  AllPaymentTerms,
  } = require('./schemas/paymentTerm');
const { handlerError, appendLogs } = require('../../handlerErrors');

const handlerPaymentTerm = async (...args) => {
  const [action, variables] = args;
  switch (action) {
    case 'createPaymentTerm':
      const resCreate = await crtPaymentTerm(variables);
      return resCreate;
    case 'updatePaymentTerm':
      const resUpdate = await updtPaymentTerm(variables);
      return resUpdate;
    case 'deletePaymentTerm':
      const resDelete = await delPaymentTerm(variables);
      return resDelete;
    case 'bulkPaymentTermCreate':
      const bulkPaymentTerm = await bulkCrtPaymentTerm(variables);
      return bulkPaymentTerm;
    case 'fetchPaymentTerm':
      const fetchPaymentTerm = await fthPaymentTerm(variables, action);
      return fetchPaymentTerm;
    case 'allPaymentTerms':
      const allPaymentTerm = await allPaymentTerms(variables, action);
      return allPaymentTerm;
    default:
      break;
  }
};
const fthPaymentTerm = async (payload, action) => {
  try {
    const variables = { ...payload, from: 'watcher'};
    const response = await axiosAuth.post('/macweb', {
      query: FetchPaymentTerm,
      variables,
    });
    const { paymentTerm } = response.data.data;
    const code = paymentTerm.ppg_codigo;
    const data = formatPaymentTerms(paymentTerm);
    writeFile(data, action, code);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'FetchPaymentTerm');
    return { code: 500, status: 'error' };
  }
};

const allPaymentTerms = async (variables, action) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: AllPaymentTerms,
      variables,
    });
    const { paymentTerms } = response.data.data;
    const data = formatAllPaymentTerms(paymentTerms);
    writeFile(data, action, null);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'AllPaymentTerms');
    return { code: 500, status: 'error' };
  }
};
const crtPaymentTerm = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${createPaymentTerm}`,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'createPaymentTerm');
    return {code:500, status: 'error'};
  }
};

const bulkCrtPaymentTerm = async (term) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${bulkCreatePaymentTerm}`,
      variables: {
        input: term
      },
    });
    if (response.data.errors) {
      handlerError(response.data.errors, 'bulkPaymentTermCreate');
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
    appendLogs(error.response.data, 'bulkPaymentTermCreate');
    return {
      code: 500,
      status: 'error'
    };
  }
};

const updtPaymentTerm = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${updatePaymentTerm}`,
      variables
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'updatePaymentTerm');
    return {code:500, status: 'error'};
  }
};
const delPaymentTerm = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${deletePaymentTerm}`,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'deletePaymentTerm');
    return {code:500, status: 'error'};
  }
};

module.exports = {
  handlerPaymentTerm
};