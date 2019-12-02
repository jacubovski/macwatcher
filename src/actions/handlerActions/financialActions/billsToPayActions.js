const { axiosAuth } = require('../../../axios/axios_auth');
const { 
  createBillsToPay,
  updateBillsToPay,
  deleteBillsToPay,
  bulkCreateBillsToPay
} = require('./schemas/billsToPay');
const { handlerError, appendLogs } = require('../../handlerErrors');

const handlerBillsToPay = async (payload) => {
  const { action, variables } = payload;
  switch (action) {
    case 'createBillsToPay':
      const resCreate = await crtBillsToPay(variables);
      return resCreate;
    case 'updateBillsToPay':
      const resUpdate = await updtBillsToPay(variables);
      return resUpdate;
    case 'deleteBillsToPay':
      const resDelete = await delBillsToPay(variables);
      return resDelete;
    case 'bulkBillsToPayCreate':
      const bulkBillsToPay = await bulkCrtBillsToPay(variables);
      return bulkBillsToPay;
    default:
      break;
  }
}

const crtBillsToPay = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${createBillsToPay}`,
      variables,
    })
    if(response.data.errors) {
      handlerError(response.data.errors)
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'}
    }
  } catch (error) {
    appendLogs(error.response.data,'createBillsToPay');
    return {code:500, status: 'error'};
  }
}
const bulkCrtBillsToPay = async (billsToPays) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${bulkCreateBillsToPay}`,
      variables: { input: billsToPays },
    })
    console.log(response)
    if(response.data.errors) {
      handlerError(response.data.errors,'bulkBillsToPayCreate')
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'}
    }
  } catch (error) {
    appendLogs(error.response.data,'bulkBillsToPayCreate');
    return {code:500, status: 'error'};
  }
}
const updtBillsToPay = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${updateBillsToPay}`,
      variables
    })
    if(response.data.errors) {
      handlerError(response.data.errors)
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'}
    }
  } catch (error) {
    appendLogs(error.response.data,'updateBillsToPay');
    return {code:500, status: 'error'};
  }
}
const delBillsToPay = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${deleteBillsToPay}`,
      variables,
    })
    if(response.data.errors) {
      handlerError(response.data.errors)
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'}
    }
  } catch (error) {
    appendLogs(error.response.data,'deleteBillsToPay');
    return {code:500, status: 'error'};
  }
}

module.exports = {
  handlerBillsToPay
}