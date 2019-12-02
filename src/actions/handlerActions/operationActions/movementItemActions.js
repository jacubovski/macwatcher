const { axiosAuth } = require('../../../axios/axios_auth');
const { 
  createMovementItem,
  updateMovementItem,
  deleteMovementItem
 } = require('./schemas/movementItems');
const { handlerError, appendLogs } = require('../../handlerErrors');

const handlerMovementItems = async (payload) => {
  const { action, variables } = payload;

  switch (action) {
    case 'createMovementItem':
      const resCreate = await crtMovementItems(variables);
      return resCreate
    case 'updateMovementItem':
      const resUpdate = await updtMovementItems(variables)
      return resUpdate
    case 'deleteMovementItem':
      const resDelete = await delMovementItems(variables)
      return resDelete
    default:
      break;
  }
}

const crtMovementItems = async (items) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${createMovementItem}`,
      variables: { input: items },
    })
    if(response.data.errors) {
      handlerError(response)
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'}
    }
  } catch (error) {
    appendLogs(error.response.data,'createMovementItem');
    return {code:500, status: 'error'};
  }
}
const updtMovementItems = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${updateMovementItem}`,
      variables
    })
    if(response.data.errors) {
      handlerError(response.data.errors)
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'}
    }
  } catch (error) {
    appendLogs(error.response.data,'updateMovementItem');
    return {code:500, status: 'error'};
  }
}
const delMovementItems = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${deleteMovementItem}`,
      variables,
    })
    if(response.data.errors) {
      handlerError(response.data.errors)
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'}
    }
  } catch (error) {
    appendLogs(error.response.data,'deleteMovementHeader');
    return {code:500, status: 'error'};
  }
}

module.exports = {
  handlerMovementItems
}