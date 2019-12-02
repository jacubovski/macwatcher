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
  CreateCustomerType,
  BulkCustomerTypeCreater,
  UpdateCustomerType,
  DeleteCustomerType,
  FetchCustomerType,
  AllCustomerTypes,
} = require('../../../schemas/tables/customerType');
const handlerCustomerType = async (...args) => {
  const [action, variables] = args;
  switch (action) {
    case 'createCustomerType':
      const resCreate = await createCustomerType(variables);
      return resCreate;
    case 'updateCustomerType':
      const resUpdate = await updateCustomerType(variables);
      return resUpdate;
    case 'deleteCustomerType':
      const resDelete = await deleteCustomerType(variables);
      return resDelete;
    case 'bulkCustomerTypeCreate':
      const bulkCustomerType = await bulkCreateCustomerType(variables);
      return bulkCustomerType; 
    case 'fetchCustomerType':
      const fetchCustomerType = await fthCustomerType(variables, action);
      return fetchCustomerType;
    case 'allCustomerTypes':
      const allCustomerType = await allCustomerTypes(variables, action);
      return allCustomerType;
    default:
      break;
  }
};

const fthCustomerType = async (payload, action) => {
  try {
    const variables = { ...payload, from: 'watcher'};
    const response = await axiosAuth.post('/macweb', {
      query: FetchCustomerType,
      variables,
    });
    const { customerType } = response.data.data;
    const code = customerType.tpc_codigo;
    const data = formatTablesForOneRegisters(customerType);
    writeFile(data, action, code);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'FetchCustomerType');
    return { code: 500, status: 'error' };
  }
};

const allCustomerTypes = async (variables, action) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: AllCustomerTypes,
      variables,
    });
    const { customerTypes } = response.data.data;
    const data = formatTablesForAllRegisters(customerTypes);
    writeFile(data, action, null);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'AllCustomerTypes');
    return { code: 500, status: 'error' };
  }
};

const createCustomerType = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: CreateCustomerType,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'createCustomerType');
    return {code:500, status: 'error'};
  }
};

const bulkCreateCustomerType = async (customerTypes) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: BulkCustomerTypeCreater,
      variables: { input: customerTypes },
    });
    if(response.data.errors) {
      handlerError(response.data.errors,'bulkCustomerTypeCreate');
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'bulkCustomerTypeCreate');
    return {code:500, status: 'error'};
  }
};

const updateCustomerType = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: UpdateCustomerType,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'updateCustomerType');
    return {code:500, status: 'error'};
  }
};

const deleteCustomerType = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: DeleteCustomerType,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'deleteCustomerType');
    return {code:500, status: 'error'};
  }

};

module.exports = {
  handlerCustomerType
};
