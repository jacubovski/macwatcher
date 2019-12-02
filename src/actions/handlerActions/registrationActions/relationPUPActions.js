const { axiosAuth } = require('../../../axios/axios_auth');
const { createRelationPUP, updateRelationPUP, deleteRelationPUP } = require('./schemas/relationPUP');
const { handlerError, appendLogs } = require('../../handlerErrors');

const handlerRelationPUP = async (payload) => {
  const { action, variables } = payload;
  switch (action) {
    case 'createRelationPUP':
      const resCreate = await crtRelationPUP(variables);
      return resCreate;
    case 'updateRelationPUP':
      const resUpdate = await updtRelationPUP(variables);
      return resUpdate;
    case 'deleteRelationPUP':
      const resDelete = await delRelationPUP(variables);
      return resDelete;
    default:
      break;
  }
};

const crtRelationPUP = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${createRelationPUP}`,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'createRelationPUP');
    return {code:500, status: 'error'};
  }
};

const updtRelationPUP = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${updateRelationPUP}`,
      variables
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'updateRelationPUP');
    return {code:500, status: 'error'};
  }
};
const delRelationPUP = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${deleteRelationPUP}`,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'deleteRelationPUP');
    return {code:500, status: 'error'};
  }
};

module.exports = {
  handlerRelationPUP
};
