const { handlerTables } = require('./handlerActions/handlerTables');
const { handlerRegistrations } = require('./handlerActions/handlerRegistrations');
const { handlerFinancial } = require('./handlerActions/handlerFinancial');
const { handlerOperations } = require('./handlerActions/handlerOperations');
const { appendLogs } = require('./handlerErrors');

const actionHandler = async (payload) =>{
  try {
    const data = JSON.parse(payload);
    const { action, module, target, variables  } = data;
    switch (module) {
      case 'table':
        const resTable = await handlerTables(target, action, variables);
        return resTable;
      case 'registration':
        const resRegistration = await handlerRegistrations(target, action, variables);
        return resRegistration;
      case 'financial':
        const resFinancial = await handlerFinancial(target, action, variables);
        return resFinancial;
      case 'operation':
        const resOperation = await handlerOperations(target, action, variables);
        return resOperation;
      default:
        break;
    }
  } catch (error) {
    handlerError(error, payload);
  }
 
};

function handlerError(error, payload) {
  // if (error.constructor.name === 'SyntaxError'){
  //   actionHandler(payload);
  // } else {
    appendLogs(error, 'actionHandler');
    return {
      code: 500,
      status: 'error'
    };
  // }
}

module.exports = {
  actionHandler
};