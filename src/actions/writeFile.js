const fs = require('fs');
const path = require('path');
const { appendLogs } = require('./handlerErrors');

const writeFile = (...args ) => {
  const [dataText, action, code] = args;
  const returnFolder = path.resolve(__dirname, '..', 'retorno');
  const nameFile = `${returnFolder}/${action}${code ? '-' + code : ''}.txt`;
  fs.writeFile(nameFile, dataText, (err) => {
    if (err) appendLogs(err);
  });
  
};
module.exports = {
 writeFile
};
