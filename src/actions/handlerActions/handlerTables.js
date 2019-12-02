const handlerTables = async (...args) => {
  const [target, action, variables] = args;
   switch (target) {
    case 'brand':
      const { handlerBrand } = require('./tablesActions/brandActions');
      const responseBrand = await handlerBrand(action, variables);
      return responseBrand;
    case 'type':
      const { handlerType } = require('./tablesActions/typeActions');
      const responseType = await handlerType(action, variables);
      return responseType;
    case 'subType':
      const { handlerSubType } = require('./tablesActions/subTypeActions');
      const responseSubType = await handlerSubType(action, variables);
      return responseSubType; 
    case 'line':
      const { handlerLine } = require('./tablesActions/lineActions');
      const responseLine = await handlerLine(action, variables);
      return responseLine; 
    case 'unitMeas':
      const { handlerUnitmeas } = require('./tablesActions/unitmeasActions');
      const responseUnitmeas = await handlerUnitmeas(action, variables);
      return responseUnitmeas;  
    case 'ncm':
      const { handlerNcm } = require('./tablesActions/ncmActions');
      const responseNcm = await handlerNcm(action, variables);
      return responseNcm; 
    case 'typePrice':
      const { handlerTypePrice } = require('./tablesActions/typePriceActions');
      const responseTypePrice = await handlerTypePrice(action, variables);
      return responseTypePrice; 
    case 'costCenter':
      const { handlerCostCenter } = require('./tablesActions/costCenterActions');
      const responseCostCenter = await handlerCostCenter(action, variables);
      return responseCostCenter;
    case 'historic':
      const { handlerHistoric } = require('./tablesActions/historicActions');
      const responseHistoric = await handlerHistoric(action, variables);
      return responseHistoric;
    case 'customerType':
      const { handlerCustomerType } = require('./tablesActions/customerTypeActions');
      const responseCustomerType = await handlerCustomerType(action, variables);
      return responseCustomerType; 
    case 'cfop':
      const { handlerCfop } = require('./tablesActions/cfopActions');
      const responseCfop = await handlerCfop(action, variables);
      return responseCfop; 
    case 'zone':
      const { handlerZone } = require('./tablesActions/zoneActions');
      const responseZone = await handlerZone(action, variables);
      return responseZone;               
    default:
      break;
   }
};

module.exports = {
  handlerTables
};