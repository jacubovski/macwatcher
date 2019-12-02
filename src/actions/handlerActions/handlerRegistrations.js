const handlerRegistrations = async (...args) => {
  const [target, action, variables] = args;
  switch (target) {
    case 'address':
      const { handlerAddress } = require('./registrationActions/addressActions');
      const responseAddress = await handlerAddress(action, variables);
      return responseAddress;
    case 'customer':
      const { handlerCustomer } = require('./registrationActions/customerActions');
      const responseCustomer = await handlerCustomer(action, variables);
      return responseCustomer;
    case 'provider':
      const { handlerProvider } = require('./registrationActions/providerActions');
      const responseProvider = await handlerProvider(action, variables);
      return responseProvider;
    case 'salesman':
      const { handlerSalesman } = require('./registrationActions/salesmanActions');
      const responseSalesman = await handlerSalesman(action, variables);
      return responseSalesman;
    case 'shippingCompany':
      const { handlerShippingCompany } = require('./registrationActions/shippingCompanyActions');
      const responseShippingCompany = await handlerShippingCompany(action, variables);
      return responseShippingCompany;
    case 'state':
      const { handlerState } = require('./registrationActions/stateActions');
      const responseState = await handlerState(action, variables);
      return responseState;
    case 'store':
      const { handlerStore } = require('./registrationActions/storeActions');
      const responseStore = await handlerStore(action, variables);
      return responseStore;
    case 'employee':
      const { handlerEmployee } = require('./registrationActions/employeeActions');
      const responseEmployee = await handlerEmployee(action, variables);
      return responseEmployee;
    case 'product':
      const { handlerProduct } = require('./registrationActions/productActions');
      const responseProduct = await handlerProduct(action, variables);
      return responseProduct;
    case 'relationPUP':
      const { handlerRelationPUP } = require('./registrationActions/relationPUPActions');
      const responseRelationPUP = await handlerRelationPUP(action, variables);
      return responseRelationPUP;
    default:
      break;
   }
};

module.exports = {
  handlerRegistrations
};