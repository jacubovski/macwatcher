const { axiosAuth } = require('../../../axios/axios_auth');
const { 
  createPostdatedCheck,
  updatePostdatedCheck,
  deletePostdatedCheck } = require('./schemas/postdatedCheck');
const { handlerError, appendLogs } = require('../../handlerErrors');

const handlerPostdatedCheck = async (payload) => {
  const { action, variables } = payload;
  switch (action) {
    case 'createPostdatedCheck':
      const resCreate = await crtPostdatedCheck(variables);
      return resCreate
    case 'updatePostdatedCheck':
      const resUpdate = await updtPostdatedCheck(variables)
      return resUpdate
    case 'deletePostdatedCheck':
      const resDelete = await delPostdatedCheck(variables)
      return resDelete
    default:
      break;
  }
}

const crtPostdatedCheck = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${createPostdatedCheck}`,
      variables,
    })
    if(response.data.errors) {
      handlerError(response.data.errors)
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'}
    }
  } catch (error) {
     appendLogs(error.response.data,'createPostdatedCheck');
    return {code:500, status: 'error'};
  }
}
const updtPostdatedCheck = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${updatePostdatedCheck}`,
      variables
    })
    if(response.data.errors) {
      handlerError(response.data.errors)
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'}
    }
  } catch (error) {
     appendLogs(error.response.data,'upadtePostdatedCheck');
    return {code:500, status: 'error'};
  }
}
const delPostdatedCheck = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${deletePostdatedCheck}`,
      variables,
    })
    if(response.data.errors) {
      handlerError(response.data.errors)
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'}
    }
  } catch (error) {
     appendLogs(error.response.data,'deletePostdatedCheck');
    return {code:500, status: 'error'};
  }
}

module.exports = {
  handlerPostdatedCheck
}