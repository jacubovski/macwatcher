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
  BulkUnitMeasCreate,
  CreateUnitMeas,
  UpdateUnitMeas,
  DeleteUnitMeas,
  FetchUnitMeas,
  AllUnitMeass,
} = require('../../../schemas/tables/unitmeas');
const handlerUnitmeas = async (...args) => {
  const [action, variables] = args;
  switch (action) {
    case 'createUnitMeas':
      const resCreate = await createUnitMeas(variables);
      return resCreate;
    case 'updateUnitMeas':
      const resUpdate = await updateUnitMeas(variables);
      return resUpdate;
    case 'deleteUnitMeas':
      const resDelete = await deleteUnitMeas(variables);
      return resDelete;
    case 'bulkUnitMeasCreate':
        const bulkUnitMeas = await bulkCreateUnitMeas(variables);
        return bulkUnitMeas;
    case 'fetchUnitMeas':
    const fetchUnitMeas = await fthUnitMeas(variables, action);
    return fetchUnitMeas;
    case 'allUnitMeass':
      const allUnitMeas = await allUnMeass(variables, action);
      return allUnitMeas;
    default:
      break;
  }
};

const fthUnitMeas = async (payload, action) => {
  try {
    const variables = { ...payload, from: 'watcher'};
    const response = await axiosAuth.post('/macweb', {
      query: FetchUnitMeas,
      variables,
    });
    const { unitmeas } = response.data.data;
    const code = unitmeas.med_codigo;
    const data = formatTablesForOneRegisters(unitmeas);
    writeFile(data, action, code);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'FetchUnitMeas');
    return { code: 500, status: 'error' };
  }
};

const allUnMeass = async (variables, action) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: AllUnitMeass,
      variables,
    });
    const { unitmeass } = response.data.data;
    const data = formatTablesForAllRegisters(unitmeass);
    writeFile(data, action, null);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'AllUnitMeass');
    return { code: 500, status: 'error' };
  }
};

const createUnitMeas = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: CreateUnitMeas,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'createUnitMeas');
    return {code:500, status: 'error'};
  }
};

const bulkCreateUnitMeas = async (unitMeass) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: BulkUnitMeasCreate,
      variables: { input: unitMeass },
    });
    if(response.data.errors) {
      handlerError(response.data.errors,'bulkUnitMeasCreate');
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'bulkUnitMeasCreate');
    return {code:500, status: 'error'};
  }
};

const updateUnitMeas = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: UpdateUnitMeas,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'updateUnitMeas');
    return {code:500, status: 'error'};
  }
};

const deleteUnitMeas = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: DeleteUnitMeas,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'deleteUnitMeas');
    return {code:500, status: 'error'};
  }
};

module.exports = {
  handlerUnitmeas
};
