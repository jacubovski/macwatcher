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
  BulkZoneCreate,
  CreateZone,
  UpdateZone,
  DeleteZone,
  FetchZone,
  AllZones,
} = require('../../../schemas/tables/zone');
const handlerZone = async (...args) => {
  const [action, variables] = args;
  switch (action) {
    case 'createZone':
      const resCreate = await createZone(variables);
      return resCreate;
    case 'updateZone':
      const resUpdate = await updateZone(variables);
      return resUpdate;
    case 'deleteZone':
      const resDelete = await deleteZone(variables);
      return resDelete;
    case 'bulkZoneCreate':
      const bulkZone = await bulkCreateZone(variables);
      return bulkZone;
    case 'fetchZone':
      const fetchZone = await fthZone(variables, action);
      return fetchZone;
    case 'allZones':
      const allZone = await allZones(variables, action);
      return allZone;
    default:
      break;
  }
};

const fthZone = async (payload, action) => {
  try {
    const variables = { ...payload, from: 'watcher'};
    const response = await axiosAuth.post('/macweb', {
      query: FetchZone,
      variables,
    });
    const { zone } = response.data.data;
    const code = zone.area_codigo;
    const data = formatTablesForOneRegisters(zone);
    writeFile(data, action, code);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'FetchZone');
    return { code: 500, status: 'error' };
  }
};

const allZones = async (variables, action) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: AllZones,
      variables,
    });
    const { zones } = response.data.data;
    const data = formatTablesForAllRegisters(zones);
    writeFile(data, action, null);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'AllZones');
    return { code: 500, status: 'error' };
  }
};


const createZone = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: CreateZone,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'createZone');
    return {code:500, status: 'error'};
  }
};
const bulkCreateZone = async (zones) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: BulkZoneCreate,
      variables: { input: zones },
    });
    if(response.data.errors) {
      handlerError(response.data.errors,'bulkZoneCreate');
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'bulkZoneCreate');
    return {code:500, status: 'error'};
  }
};
const updateZone = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: UpdateZone,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'updateZone');
    return {code:500, status: 'error'};
  }
};

const deleteZone = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: DeleteZone,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'deleteZone');
    return {code:500, status: 'error'};
  }
};
module.exports = {
  handlerZone
};