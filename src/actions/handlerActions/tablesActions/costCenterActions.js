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
  CreateCostCenter,
  BulCostCenteCreater,
  UpdateCostCenter,
  DeleteCostCenter,
  FetchCostCenter,
  AllCostCenters,
} = require('../../../schemas/tables/costCenter');

 const handlerCostCenter = async (...args) => {
  const  [action, variables] = args;
  switch (action) {
    case 'createCostCenter':
      const resCreate = await createCostCenter(variables);
      return resCreate;
    case 'updateCostCenter':
      const resUpdate = await updateCostCenter(variables);
      return resUpdate;
    case 'deleteCostCenter':
      const resDelete = await deleteCostCenter(variables);
      return resDelete;
    case 'bulkCostCenterCreate':
      const bulkCostCenter = await bulkCreateCostCenter(variables);
      return bulkCostCenter;
    case 'fetchCostCenter':
      const fetchCostCenter = await fthCostCenter(variables, action);
      return fetchCostCenter;
    case 'allCostCenters':
      const allCostCenter = await allCostCenters(variables, action);
      return allCostCenter;
    default:
      break;
  }
};

const fthCostCenter = async (payload, action) => {
  try {
    const variables = { ...payload, from: 'watcher'};
    const response = await axiosAuth.post('/macweb', {
      query: FetchCostCenter,
      variables,
    });
    const { costCenter } = response.data.data;
    const code = costCenter.cc_codigo;
    const data = formatTablesForOneRegisters(costCenter);
    writeFile(data, action, code);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'FetchCostCenter');
    return { code: 500, status: 'error' };
  }
};

const allCostCenters = async (variables, action) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: AllCostCenters,
      variables,
    });
    const { costCenters } = response.data.data;
    const data = formatTablesForAllRegisters(costCenters);
    writeFile(data, action, null);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'AllCostCenters');
    return { code: 500, status: 'error' };
  }
};

const createCostCenter = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: CreateCostCenter,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'createCostCenter');
    return {code:500, status: 'error'};
  }
};
const bulkCreateCostCenter = async (costCenters) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: BulCostCenteCreater,
      variables: { input: costCenters },
    });
    if(response.data.errors) {
      handlerError(response.data.errors,'bulkCostCenterCreate');
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'bulkCostCenterCreate');
    return {code:500, status: 'error'};
  }
};
const updateCostCenter = async (variables) => {
    try {
      const response = await axiosAuth.post('/macweb',{
        query: UpdateCostCenter,
        variables,
      });
      if(response.data.errors) {
        handlerError(response.data.errors);
        return {code:500, status: 'error'};
      }else {
        return {code:200, status:'success'};
      }
    } catch (error) {
      appendLogs(error.response.data,'updateCostCenter');
    return {code:500, status: 'error'};
    }
};

const deleteCostCenter = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: DeleteCostCenter,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'deleteCostCenter');
    return {code:500, status: 'error'};
  }
};

module.exports = {
  handlerCostCenter
};