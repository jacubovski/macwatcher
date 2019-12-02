const { axiosAuth } = require('../../../axios/axios_auth');
const { 
  createMovementHeader, 
  updateMovementHeader, 
  deleteMovementHeader 
} = require('./schemas/movementHeader');
const { handlerError, appendLogs } = require('../../handlerErrors');

const handlerMovementHeader = async (payload) => {
  const { action, variables } = payload;
  switch (action) {
    case 'createMovementHeader':
      const resCreate = await crtMovementHeader(variables);
      return resCreate
    case 'updateMovementHeader':
      const resUpdate = await updtMovementHeader(variables)
      return resUpdate
    case 'deleteMovementHeader':
      const resDelete = await delMovementHeader(variables)
      return resDelete
    default:
      break;
  }
}

const crtMovementHeader = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${createMovementHeader}`,
      variables,
    })
    if(response.data.errors) {
      handlerError(response)
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'}
    }
  } catch (error) {
    appendLogs(error.response.data,'createMovementHeader');
    return {code:500, status: 'error'};
  }
}
const updtMovementHeader = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${updateMovementHeader}`,
      variables
    })
    if(response.data.errors) {
      handlerError(response.data.errors)
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'}
    }
  } catch (error) {
    appendLogs(error.response.data,'updateMovementHeader');
    return {code:500, status: 'error'};
  }
}
const delMovementHeader = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${deleteMovementHeader}`,
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
  handlerMovementHeader
}