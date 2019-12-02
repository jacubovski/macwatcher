const { axiosAuth } = require('../../../axios/axios_auth');
const {
  createEmployee,
  updateEmployee,
  deleteEmployee,
  bulkCreateEmployee,
  fetchEmployee,
} = require('./schemas/employee');
const { formatOthers } = require('../responseFormat');
const { writeFile } = require('../../writeFile');
const { handlerError, appendLogs } = require('../../handlerErrors');

const handlerEmployee = async (...args) => {
  const [action, variables] = args;
  switch (action) {
    case 'createEmployee':
      const resCreate = await crtEmployee(variables);
      return resCreate;
    case 'updateEmployee':
      const resUpdate = await updtEmployee(variables);
      return resUpdate;
    case 'deleteEmployee':
      const resDelete = await delEmployee(variables);
      return resDelete;
    case 'bulkEmployeeCreate':
      const bulkEmployee = await bulkCrtEmployee(variables);
      return bulkEmployee;
    case 'fetchEmployee':
      const resFetchEmployee = await fetchEmpl(variables, action);
      return resFetchEmployee;
    default:
      break;
  }
};


const fetchEmpl = async (variables, action) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${fetchEmployee}`,
      variables,
    });
    const { employee } = response.data.data;
    const code = employee.func_codigo;
    const data = formatOthers(employee, 'func_');
    writeFile(data, action, code);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'fetchEmployee');
    return { code: 500, status: 'error' };
  }
};

const crtEmployee = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${createEmployee}`,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'createEmployee');
    return {code:500, status: 'error'};
  }
};

const bulkCrtEmployee = async (employees) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: `${bulkCreateEmployee}`,
      variables: {
        input: employees
      },
    });
    if (response.data.errors) {
      handlerError(response.data.errors, 'bulkEmployeeCreate');
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
    console.log(error.response.data.errors[0]);
    appendLogs(error.response.data, 'bulkEmployeeCreate');
    return {
      code: 500,
      status: 'error'
    };
  }
};

const updtEmployee = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${updateEmployee}`,
      variables
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'updateEmployee');
    return {code:500, status: 'error'};
  }
};
const delEmployee = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: `${deleteEmployee}`,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'deleteEmployee');
    return {code:500, status: 'error'};
  }
};

module.exports = {
  handlerEmployee
};