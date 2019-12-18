const { axiosAuth } = require('../../../axios/axios_auth');
const {
  createStore,
  updateStore,
  deleteStore,
  bulkCreateStore,
  fetchStore,
  AllStores,
} = require('./schemas/store');
const { formaAllStores, formatOthers } = require('../responseFormat');
const { writeFile } = require('../../writeFile');
const { handlerError, appendLogs } = require('../../handlerErrors');

const handlerStore = async (...args) => {
  const [action, variables] = args;
  switch (action) {
    case 'createStore':
      const resCreate = await crtStore(variables);
      return resCreate;
    case 'updateStore':
      const resUpdate = await updtStore(variables);
      return resUpdate;
    case 'deleteStore':
      const resDelete = await delStore(variables);
      return resDelete;
    case 'bulkStoreCreate':
      const bulkStore = await bulkCrtStore(variables);
      return bulkStore;
    case 'fetchStore':
      const resFetchStore = await ftcStore(variables, action);
      return resFetchStore;
    case 'fetchAllStore':
      const resAllStore = await allStores(variables, action);
      return resAllStore;
    default:
      break;
  }
};

const ftcStore = async (variables, action) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: fetchStore,
      variables,
    });
    const { store } = response.data.data;
    const code = store.lj_codigo;
    const data = formatOthers(store, 'lj_');
    writeFile(data, action, code);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'fetchStore');
    return { code: 500, status: 'error' };
  }
};

const allStores = async (variables, action) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: AllStores,
      variables,
    });
    const { stores } = response.data.data;
    const data = formaAllStores(stores);
    writeFile(data, action, null);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'AllStores');
    return { code: 500, status: 'error' };
  }
};

const crtStore = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${createStore}`,
      variables,
    });
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data,'createStore');
    return {code:500, status: 'error'};
  }
};

const bulkCrtStore = async (store) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${bulkCreateStore}`,
      variables: {
        input: store
      },
    });
    if (response.data.errors) {
      handlerError(response.data.errors, 'bulkStoreCreate');
       return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'bulkStoreCreate');
    return {code:500, status: 'error'};
  }
};

const updtStore = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${updateStore}`,
      variables
    });
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data,'updateStore');
    return {code:500, status: 'error'};
  }
};

const delStore = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${deleteStore}`,
      variables,
    });
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data,'deleteStore');
    return {code:500, status: 'error'};
  }
};

module.exports = {
  handlerStore
};
