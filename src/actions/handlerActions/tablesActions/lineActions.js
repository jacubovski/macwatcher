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
  BulkLineCreate,
  CreateLine,
  UpdateLine,
  DeleteLine,
  FetchLine,
  AllLines,
} = require('../../../schemas/tables/line');
const handlerLine = async (...args) => {
  const [action, variables] = args;
  switch (action) {
    case 'createLine':
      const resCreate = await createLine(variables);
      return resCreate;
    case 'updateLine':
      const resUpdate = await updateLine(variables);
      return resUpdate;
    case 'deleteLine':
      const resDelete = await deleteLine(variables);
      return resDelete;
    case 'bulkLineCreate':
      const bulkLine = await bulkCreateLine(variables);
      return bulkLine;  
    case 'fetchLine':
      const fetchLine = await fthLine(variables, action);
      return fetchLine;
    case 'allLines':
      const allLine = await allLines(variables, action);
      return allLine;
    default:
      break;
  }
};

const fthLine = async (payload, action) => {
  try {
    const variables = { ...payload, from: 'watcher'};
    const response = await axiosAuth.post('/macweb', {
      query: FetchLine,
      variables,
    });
    const { line } = response.data.data;
    const code = line.lin_codigo;
    const data = formatTablesForOneRegisters(line);
    writeFile(data, action, code);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'FetchLine');
    return { code: 500, status: 'error' };
  }
};

const allLines = async (variables, action) => {
  try {
    const response = await axiosAuth.post('/macweb', {
      query: AllLines,
      variables,
    });
    const { lines } = response.data.data;
    const data = formatTablesForAllRegisters(lines);
    writeFile(data, action, null);
    if (response.data.errors) {
      handlerError(response.data.errors);
      return { code: 500, status: 'error' };
    } else {
      return { code: 200, status: 'success' };
    }
  } catch (error) {
    appendLogs(error.response.data, 'AllLines');
    return { code: 500, status: 'error' };
  }
};


const createLine = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: CreateLine,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'createLine');
    return {code:500, status: 'error'};
  }
};

const bulkCreateLine = async (lines) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: BulkLineCreate,
      variables: { input: lines },
    });
    if(response.data.errors) {
      handlerError(response.data.errors,'bulkLineCreate');
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'bulkLineCreate');
    return {code:500, status: 'error'};
  }
};

const updateLine = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: UpdateLine,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'updateLine');
    return {code:500, status: 'error'};
  }
};

const deleteLine = async (variables) => {
  try {
    const response = await axiosAuth.post('/macweb',{
      query: DeleteLine,
      variables,
    });
    if(response.data.errors) {
      handlerError(response.data.errors);
      return {code:500, status: 'error'};
    }else {
      return {code:200, status:'success'};
    }
  } catch (error) {
    appendLogs(error.response.data,'deleteLine');
    return {code:500, status: 'error'};
  }
};

module.exports = {
  handlerLine
};
