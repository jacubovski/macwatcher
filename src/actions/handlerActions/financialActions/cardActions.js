const { axiosAuth } = require('../../../axios/axios_auth');
const { 
  createCard,
  updateCard,
  deleteCard,
  bulkCreateCard } = require('./schemas/card');
const { handlerError, appendLogs } = require('../../handlerErrors');

const handlerCard = async (payload) => {
  const { action, variables } = payload;
  switch (action) {
    case 'createCards':
      const resCreate = await crtCard(variables);
      return resCreate;
    case 'updateCard':
      const resUpdate = await updtCard(variables);
      return resUpdate;
    case 'deleteCard':
      const resDelete = await delCard(variables);
      return resDelete;
    case 'bulkCardCreate':
      const bulkCard = await bulkCrtCard(variables);
      return bulkCard;
    default:
      break;
  }
}

const crtCard = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${createCard}`,
      variables,
    })
    if(response.data.errors) {
      handlerError(response.data.errors)
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'}
    }
  } catch (error) {
    appendLogs(error.response.data,'createCard');
    return {code:500, status: 'error'};
  }
}
const bulkCrtCard = async (cards) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${bulkCreateCard}`,
      variables: { input: cards },
    })
    console.log(response)
    if(response.data.errors) {
      handlerError(response.data.errors,'bulkCardCreate')
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'}
    }
  } catch (error) {
    appendLogs(error.response.data,'bulkCardCreate');
    return {code:500, status: 'error'};
  }
}
const updtCard = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${updateCard}`,
      variables
    })
    if(response.data.errors) {
      handlerError(response.data.errors)
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'}
    }
  } catch (error) {
    appendLogs(error.response.data,'updateCard');
    return {code:500, status: 'error'};
  }
}
const delCard = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${deleteCard}`,
      variables,
    })
    if(response.data.errors) {
      handlerError(response.data.errors)
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'}
    }
  } catch (error) {
    appendLogs(error.response.data,'deleteCard');
    return {code:500, status: 'error'};
  }
}

module.exports = {
  handlerCard
}