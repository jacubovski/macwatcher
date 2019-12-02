const fs = require('fs');
const path = require('path');
const { actionHandler } = require('./actions-api');
const { appendLogs } = require('./handlerErrors');
const addFiles = (token, pth) => {
  fs.readFile(pth, 'utf-8', async (err, data) => {
    if (err) appendLogs(error);
    const response = await actionHandler(data);
    const splitPaht = pth.split('/');
    const nameFile = splitPaht[splitPaht.length - 1];
    const { code } = response;
    if (code === 200){
      try {
        const ext = path.extname(nameFile);
        const name = path.basename(nameFile, ext);
        const fileNewName = `${name}-${Date.now()}${ext}`;
        const copyFile =  path.resolve(__dirname, '..', 'enviar', nameFile);
        const pasteFile =  path.resolve(__dirname, '..','enviados', fileNewName);
        fs.copyFile(copyFile, pasteFile, (err) => {
          if (err) appendLogs(err);
          fs.unlinkSync(copyFile);
        });
      } catch (error) {
        console.log('change action', error);
        appendLogs(error);
      }
    }else if (code === 500) {
      const copyFile =  path.resolve(__dirname, '..','enviar', nameFile);
      fs.unlinkSync(copyFile);
    }
  });
};
module.exports = {
  addFiles
};