const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');
const { checkInternet } = require("./utils/checkConnectionInternet");
const { login } = require('./axios/axios_auth');
const changeActions = require('./actions/changeActions');
const { handlerError } = require('./actions/handlerErrors');
const folderSend = path.resolve(__dirname, `enviar`);
const folderSended = path.resolve(__dirname, `enviados`);
const folderError = path.resolve(__dirname, `errors`);
const folderReturn = path.resolve(__dirname, `retorno`);

const watcher = chokidar.watch(folderSend, {ignored: /^\./, persistent: true});
try {
  if (!fs.existsSync(folderSend)) {
    fs.mkdirSync(folderSend);
  }
  if (!fs.existsSync(folderSended)) {
    fs.mkdirSync(folderSended);
  }
  if (!fs.existsSync(folderError)) {
    fs.mkdirSync(folderError);
  }
  if (!fs.existsSync(folderReturn)) {
    fs.mkdirSync(folderReturn);
  }
} catch (err) {
}
// example usage:
// setInterval(()=> {
//   checkInternet(function(isConnected) {
//     if (isConnected) {
//         console.log('conectado')
//     } else {
//         // not connected to the internet
//         console.log('não conectado')
  
//     }
//   });
// },30000)
login().then(token => {
  watcher.on('add', async function(pth) {
    try {
      const p = path.normalize(pth);
      await changeActions.addFiles(token,p);
    } catch (error) {
      handlerError(error);   
    }
  })
  .on('change', function(path) {console.log('File', path, 'has been changed');})
  .on('unlink', function(path) {console.log('File', path, 'has been removed');})
  .on('error', function(error) {
    
  });

}).catch(err => {
  console.log(err);
});


