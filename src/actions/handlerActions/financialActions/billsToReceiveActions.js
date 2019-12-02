const { axiosAuth } = require('../../../axios/axios_auth');
const { 
  createBillsToReceive,
  updateBillsToReceive,
  deleteBillsToReceive,
  bulkCreateBillsToReceive
 } = require('./schemas/billsToReceive');
const { handlerError, appendLogs } = require('../../handlerErrors');

const handlerBillsToReceive = async (payload) => {
  const { action, variables } = payload;
  switch (action) {
    case 'createBillsToReceive':
      const resCreate = await crtBillsToReceive(variables);
      return resCreate;
    case 'updateBillsToReceive':
      const resUpdate = await updtBillsToReceive(variables);
      return resUpdate;
    case 'deleteBillsToReceive':
      const resDelete = await delBillsToReceive(variables);
      return resDelete;
      case 'bulkBillsToReceiveCreate':
      const bulkBillsToReceive = await bulkCrtBillsToReceive(variables);
      return bulkBillsToReceive;
    default:
      break;
  }
}

const crtBillsToReceive = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${createBillsToReceive}`,
      variables,
    })
    if(response.data.errors) {
      handlerError(response.data.errors)
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'}
    }
  } catch (error) {
    appendLogs(error.response.data,'createBillsToReceive');
    return {code:500, status: 'error'};
  }
}
const bulkCrtBillsToReceive = async (billsToReceive) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${bulkCreateBillsToReceive}`,
      variables: { input: billsToReceive },
    })
    console.log(response)
    if(response.data.errors) {
      handlerError(response.data.errors,'bulkBillsToReceivereate')
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'}
    }
  } catch (error) {
    appendLogs(error.response.data,'bulkBillsToReceivereate');
    return {code:500, status: 'error'};
  }
}
const updtBillsToReceive = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${updateBillsToReceive}`,
      variables
    })
    if(response.data.errors) {
      handlerError(response.data.errors)
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'}
    }
  } catch (error) {
    appendLogs(error.response.data,'updateBillsToReceive');
    return {code:500, status: 'error'};
  }
}
const delBillsToReceive = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${deleteBillsToReceive}`,
      variables,
    })
    if(response.data.errors) {
      handlerError(response.data.errors)
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'}
    }
  } catch (error) {
    appendLogs(error.response.data,'deleteBillsToReceive');
    return {code:500, status: 'error'};
  }
}

module.exports = {
  handlerBillsToReceive
}