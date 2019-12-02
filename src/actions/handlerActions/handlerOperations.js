const handlerOperations = async (payload) => {
  const { target } = payload;
  switch (target) {
    case 'movementHeader':
      const { handlerMovementHeader } = require('./operationActions/movementHeaderActions');
      const responseMovementHeader = await handlerMovementHeader(payload);
      return responseMovementHeader;
    case 'movementItem':
      const { handlerMovementItems } = require('./operationActions/movementItemActions');
      const responseItem = await handlerMovementItems(payload);
      return responseItem;
    default:
      break;
   }
}

module.exports = {
  handlerOperations
} 