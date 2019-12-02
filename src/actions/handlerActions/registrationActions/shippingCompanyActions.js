const { axiosAuth } = require('../../../axios/axios_auth');
const { 
  createShippingCompany,
  updateShippingCompany, 
  deleteShippingCompany,
  bulkCreateShippingCompany,
  fetchShipping,
} = require('./schemas/shippingCompany');
const { formatOthers } = require('../responseFormat');
const { writeFile } = require('../../writeFile');
const { handlerError, appendLogs } = require('../../handlerErrors');

const handlerShippingCompany = async (...args) => {
  const [action, variables] = args;
  switch (action) {
    case 'createShippingCompany':
      const resCreate = await crtShippingCompany(variables);
      return resCreate;
    case 'updateShippingCompany':
      const resUpdate = await updtShippingCompany(variables);
      return resUpdate;
    case 'deleteShippingCompany':
      const resDelete = await delShippingCompany(variables);
      return resDelete;
    case 'bulkShippingCompanyCreate':
      const bulkShippingCompany = await bulkCrtShippingCompany(variables);
      return bulkShippingCompany;
    case 'fetchShippingCompany':
        const resFetchShippingCompany = await fetchShip(variables, action);
        return resFetchShippingCompany;
    default:
      break;
  }
};

const fetchShip = async (variables, action) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${fetchShipping}`,
      variables,
    });
    const { shippingCompany } = response.data.data;
    const code = shippingCompany.trans_codigo;
    const data = formatOthers(shippingCompany, 'trans_');
    writeFile(data, action, code);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'fetchShippingCompany');
    return { code: 500, status: 'error' };
  }
};

const crtShippingCompany = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${createShippingCompany}`,
      variables,
    });
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data,'createShippingCompany');
    return {code:500, status: 'error'};
  }
};

const bulkCrtShippingCompany = async (sc) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${bulkCreateShippingCompany}`,
      variables: {
        input: sc
      },
    });
    if (response.data.errors) {
      handlerError(response.data.errors, 'bulkShippingCompanyCreate');
      return {
        code: 500,
        status: 'error'
      };
    } else {
      return {
        code: 200,
        status: 'success'
      };
    }
  } catch (error) {
    appendLogs(error.response.data, 'bulkShippingCompanyCreate');
    return {
      code: 500,
      status: 'error'
    };
  }
};

const updtShippingCompany = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${updateShippingCompany}`,
      variables
    });
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data,'updateShippingCompany');
    return {code:500, status: 'error'};
  }
};
const delShippingCompany = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${deleteShippingCompany}`,
      variables,
    });
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data,'deleteShippingCompany');
    return {code:500, status: 'error'};
  }
};

module.exports = {
  handlerShippingCompany
};
