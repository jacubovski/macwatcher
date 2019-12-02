const { axiosAuth } = require('../../../axios/axios_auth');
const {
  createSalesman,
  updateSalesman,
  deleteSalesman,
  bulkCreateSalesman,
  fetchSalesman,
} = require('./schemas/salesman');
const { formatOthers } = require('../responseFormat');
const { writeFile } = require('../../writeFile');
const { handlerError, appendLogs } = require('../../handlerErrors');

const handlerSalesman = async (...args) => {
  const [action, variables] = args;
  switch (action) {
    case 'createSalesman':
      const resCreate = await crtSalesman(variables);
      return resCreate;
    case 'updateSalesman':
      const resUpdate = await updtSalesman(variables);
      return resUpdate;
    case 'deleteSalesman':
      const resDelete = await delSalesman(variables);
      return resDelete;
    case 'bulkSalesmanCreate':
      const bulkSalesman = await bulkCrtSalesman(variables);
      return bulkSalesman;
    case 'fetchSalesman':
      const resFetchSalesman = await fetchSales(variables, action);
      return resFetchSalesman;
    default:
      break;
  }
};

const fetchSales = async (variables, action) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${fetchSalesman}`,
      variables,
    });
    const { salesman } = response.data.data;
    const code = salesman.vnd_codigo;
    const data = formatOthers(salesman, 'vnd_');
    writeFile(data, action, code);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'fetchSalesman');
    return { code: 500, status: 'error' };
  }
};

const crtSalesman = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${createSalesman}`,
      variables,
    });
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data,'createSalesman');
    return {code:500, status: 'error'};
  }
};

const bulkCrtSalesman = async (sc) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${bulkCreateSalesman}`,
      variables: {
        input: sc
      },
    });
    if (response.data.errors) {
      handlerError(response.data.errors, 'bulkSalesmanCreate');
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
    appendLogs(error.response.data, 'bulkSalesmanCreate');
    return {
      code: 500,
      status: 'error'
    };
  }
};

const updtSalesman = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${updateSalesman}`,
      variables
    });
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data,'updateSalesman');
    return {code:500, status: 'error'};
  }
};

const delSalesman = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${deleteSalesman}`,
      variables,
    });
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data,'deleteSalesman');
    return {code:500, status: 'error'};
  }
};

module.exports = {
  handlerSalesman
};
