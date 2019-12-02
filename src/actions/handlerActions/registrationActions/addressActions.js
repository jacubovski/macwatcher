const { axiosAuth } = require('../../../axios/axios_auth');
const {
  createAddress,
  updateAddress,
  deleteAddress,
  bulkCreateAddress,
} = require('./schemas/address');
const { handlerError, appendLogs } = require('../../handlerErrors');

const handlerAddress = async (...args) => {
  const [action, variables] = args;
  switch (action) {
    case 'createAddress':
      const resCreate = await crtAddress(variables);
      return resCreate;
    case 'updateAddress':
      const resUpdate = await updtAddress(variables);
      return resUpdate;
    case 'deleteAddress':
      const resDelete = await delAddress(variables);
      return resDelete;
    case 'bulkAddressCreate':
      const bulkAddress = await bulkCrtAddress(variables);
      return bulkAddress;
    default:
      break;
  }
};

const crtAddress = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${createAddress}`,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'createAddress');
    return {code:500, status: 'error'};
  }
};

const bulkCrtAddress = async (address) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${bulkCreateAddress}`,
      variables: {
        input: address
      },
    });
    if (response.data.errors) {
      handlerError(response.data.errors, 'bulkAddressrCreate');
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
    appendLogs(error.response.data, 'bulkAddressrCreate');
    return {
      code: 500,
      status: 'error'
    };
  }
};

const updtAddress = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${updateAddress}`,
      variables
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'updateAddress');
    return {code:500, status: 'error'};
  }
};

const delAddress = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${deleteAddress}`,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'deleteAddress');
    return {code:500, status: 'error'};
  }
};

module.exports = {
  handlerAddress
};