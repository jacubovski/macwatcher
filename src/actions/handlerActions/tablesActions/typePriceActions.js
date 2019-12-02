 const { axiosAuth } = require('../../../axios/axios_auth');
 const { handlerError, appendLogs } = require('../../handlerErrors');
const {
  formatTablesForAllRegisters,
  formatTablesForOneRegisters,
} = require('../responseFormat');
const { writeFile } = require('../../writeFile');
const {
  BulkTypePriceCreate,
  CreateTypePrice,
  UpdateTypePrice,
  DeleteTypePrice,
  FetchTypePrice,
  AllTypePrices,
} = require('../../../schemas/tables/typePrice');
 const handlerTypePrice = async (...args) => {
    const [action, variables] = args;
    switch (action) {
      case 'createTypePrice':
        const resCreate = await createTypePrice(variables);
        return resCreate;
      case 'updateTypePrice':
        const resUpdate = await updateTypePrice(variables);
        return resUpdate;
      case 'deleteTypePrice':
        const resDelete = await deleteTypePrice(variables);
        return resDelete;
        case 'bulkTypePriceCreate': 
          const bulkDelete = await bulkCreateTypePrice(variables);
          return bulkDelete; 
        case 'fetchTypePrice':
          const fetchTypePrice = await fthTypePrice(variables, action);
          return fetchTypePrice;
        case 'allTypePrices':
          const allTypePrice = await allTypePrices(variables, action);
          return allTypePrice;
      default:
        break;
    }
  };
const fthTypePrice = async (payload, action) => {
  try {
    const variables = { ...payload, from: 'watcher'};
    const response = await axiosAuth.post('/macweb', {
      query: FetchTypePrice,
      variables,
    });
    const { typeprice } = response.data.data;
    const code = typeprice.prc_codigo;
    const data = formatTablesForOneRegisters(typeprice);
    writeFile(data, action, code);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'FetchTypePrice');
    return { code: 500, status: 'error' };
  }
};

const allTypePrices = async (variables, action) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: AllTypePrices,
      variables,
    });
    const { typeprices } = response.data.data;
    const data = formatTablesForAllRegisters(typeprices);
    writeFile(data, action, null);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'AllTypePrices');
    return { code: 500, status: 'error' };
  }
};

const createTypePrice = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: CreateTypePrice,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'createTypePrice');
    return {code:500, status: 'error'};
  }
};

const bulkCreateTypePrice = async (typePrices) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: BulkTypePriceCreate,
      variables: { input: typePrices },
    });
    if(response.data.errors) {
      handlerError(response.data.errors,'bulkTypePriceCreate');
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'bulkTypePriceCreate');
    return {code:500, status: 'error'};
  }
};

const updateTypePrice = async (variables) => {
    try {
      const response = await axiosAuth.post('/macweb',{
        query: UpdateTypePrice,
        variables,
      });
      if(response.data.errors) {
        handlerError(response.data.errors);
        return {code:500, status: 'error'};
      }else {
        return {code:200, status:'success'};
      }
  } catch (error) {
    appendLogs(error.response.data,'updateTypePrice');
    return {code:500, status: 'error'};
  }
};

const deleteTypePrice = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: DeleteTypePrice,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'deleteTypePrice');
    return {code:500, status: 'error'};
  }
};

module.exports = {
  handlerTypePrice
};
