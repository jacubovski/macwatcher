const { axiosAuth } = require('../../../axios/axios_auth');
const { 
  createCustomer, 
  updateCustomer, 
  deleteCustomer,
  bulkCreateCustomer,
  fetchCustomer
} = require('./schemas/customer');
const { formatCustomer } = require('../responseFormat');
const { writeFile } = require('../../writeFile');
const { handlerError, appendLogs } = require('../../handlerErrors');

const handlerCustomer = async (...args) => {
  const [action, variables] = args;
  switch (action) {
    case 'createCustomer':
      const resCreate = await crtCustomer(variables);
      return resCreate;
    case 'updateCustomer':
      const resUpdate = await updtCustomer(variables);
      return resUpdate;
    case 'deleteCustomer':
      const resDelete = await delCustomer(variables);
      return resDelete;
    case 'bulkCustomerCreate':
      const bulkCustomer = await bulkCrtCustomer(variables);
      return bulkCustomer;
    case 'fetchCustomer':
      const resFetchCustomer = await fetchCust(variables, action);
      return resFetchCustomer;
    default:
      break;
  }
};


const fetchCust = async (variables, action) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${fetchCustomer}`,
      variables,
    });
    const { customer } = response.data.data;
    const code = customer.cli_codigo;
    const data = formatCustomer(customer);
    writeFile(data, action, code);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'fetchCustomer');
    return { code: 500, status: 'error' };
  }
};

const crtCustomer = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${createCustomer}`,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'createCustomer');
    return {code:500, status: 'error'};
  }
};
const updtCustomer = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${updateCustomer}`,
      variables
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'updateCustomer');
    return {code:500, status: 'error'};
  }
};
const delCustomer = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${deleteCustomer}`,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'deleteCustomer');
    return {code:500, status: 'error'};
  }
};

const bulkCrtCustomer = async (customers) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${bulkCreateCustomer}`,
      variables: {
        input: customers
      },
    });
    if (response.data.errors) {
      handlerError(response.data.errors, 'bulkCustomerCreate');
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
    appendLogs(error.response.data, 'bulkCustomerCreate');
    return {
      code: 500,
      status: 'error'
    };
  }
};

module.exports = {
  handlerCustomer
};