const { axiosAuth } = require('../../../axios/axios_auth');
const {
  formaPaymentForm,
  formatTablesForOneRegisters,
} = require('../responseFormat');
const {
  writeFile
} = require('../../writeFile');
const { 
  createPaymentForm,
  updatePaymentForm,
  deletePaymentForm,
  bulkCreatePaymentForm,
  FetchPaymentForm,
  AllPaymentForms,
 } = require('./schemas/paymentForm');
const { handlerError, appendLogs } = require('../../handlerErrors');

const handlerPaymentForm = async (...args) => {
  const [action, variables]  = args;
  switch (action) {
    case 'createPaymentForm':
      const resCreate = await crtPaymentForm(variables);
      return resCreate;
    case 'updatePaymentForm':
      const resUpdate = await updtPaymentForm(variables);
      return resUpdate;
    case 'deletePaymentForm':
      const resDelete = await delPaymentForm(variables);
      return resDelete;
    case 'bulkPaymentFormCreate':
      const bulkPaymentForm = await bulkCrtPaymentForm(variables);
      return bulkPaymentForm;
    case 'fetchPaymentForm':
      const fetchPaymentForm = await fthPaymentForm(variables, action);
      return fetchPaymentForm;
    case 'allPaymentForms':
      const allPaymentForm = await allPaymentForms(variables, action);
      return allPaymentForm;
    default:
      break;
  }
};
const fthPaymentForm = async (payload, action) => {
  try {
    const variables = { ...payload, from: 'watcher' };
    const response = await axiosAuth.post('/macweb', {
      query: FetchPaymentForm,
      variables,
    });
    const { paymentForm } = response.data.data;
    const code = paymentForm.fpg_codigo;
    const data = formatTablesForOneRegisters(paymentForm);
    writeFile(data, action, code);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'FetchPaymentForm');
    return { code: 500, status: 'error' };
  }
};

const allPaymentForms = async (variables, action) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: AllPaymentForms,
      variables,
    });
    const { paymentForms } = response.data.data;
    const data = formaPaymentForm(paymentForms);
    writeFile(data, action, null);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'AllPaymentForms');
    return { code: 500, status: 'error' };
  }
};
const crtPaymentForm = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${createPaymentForm}`,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'createPaymentForm');
    return {code:500, status: 'error'};
  }
};

const bulkCrtPaymentForm = async (form) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${bulkCreatePaymentForm}`,
      variables: {
        input: form
      },
    });
    if (response.data.errors) {
      handlerError(response.data.errors, 'bulkPaymentFormCreate');
      return {  code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'bulkPaymentFormCreate');
    return { code: 500, status: 'error' };
  }
};

const updtPaymentForm = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${updatePaymentForm}`,
      variables
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'updatePaymentForm');
    return {code:500, status: 'error'};
  }
};
const delPaymentForm = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${deletePaymentForm}`,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'deletePaymentForm');
    return {code:500, status: 'error'};
  }
};

module.exports = {
  handlerPaymentForm
};