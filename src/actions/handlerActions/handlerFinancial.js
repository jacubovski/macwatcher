const handlerFinancial = async (...args) => {
  const [target, action, variables] = args;
   switch (target) {
    case 'billsToPay':
      const { handlerBillsToPay } = require('./financialActions/billsToPayActions');
      const responseBillsToPay = await handlerBillsToPay(action, variables);
      return responseBillsToPay;
    case 'billsToReceive':
      const { handlerBillsToReceive } = require('./financialActions/billsToReceiveActions');
      const responseBillsToReceive = await handlerBillsToReceive(action, variables);
      return responseBillsToReceive;
    case 'postdatedCheck':
      const { handlerPostdatedCheck } = require('./financialActions/postdatedCheckActions');
      const responsehandlerPostdatedCheck = await handlerPostdatedCheck(action, variables);
      return responsehandlerPostdatedCheck;
    case 'cards':
      const { handlerCard } = require('./financialActions/cardActions');
      const responseCard = await handlerCard(action, variables);
      return responseCard; 
    case 'bank':
      const { handlerBank } = require('./financialActions/bankActions');
      const responseBank = await handlerBank(action, variables);
      return responseBank;  
    case 'paymentForm':
      const { handlerPaymentForm } = require('./financialActions/paymentFormActions');
      const responsePaymentForm = await handlerPaymentForm(action, variables);
      return responsePaymentForm;
    case 'paymentTerm':
      const { handlerPaymentTerm } = require('./financialActions/paymentTermActions');
      const responsePaymentTerm = await handlerPaymentTerm(action, variables);
      return responsePaymentTerm; 
    case 'plotsPaymentTerm':
      const { handlerPlotsPaymentTerm } = require('./financialActions/plotsPaymentTermActions');
      const responsePlotsPaymentTerm = await handlerPlotsPaymentTerm(action, variables);
      return responsePlotsPaymentTerm; 
    default:
    break;
   }
};

module.exports = {
  handlerFinancial
};