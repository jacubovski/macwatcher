require('dotenv').config();
const path = require('path');
const fs = require('fs');
const { appendLogs } = require('../actions/handlerErrors');
const Client = require('ftp');

const c = new Client();
const connectionProperties = {
  host: process.env.FTP_HOST,
  port: process.env.FTP_PORT,
  user: process.env.FTP_USER,
  password: process.env.FTP_PASS,
};
const folderPath = path.resolve(__dirname, '..', 'enviar', 'ecommerce');
module.exports = {
 uploadFile(pth) {
  c.on('ready', async function () {
    fs.readdir(folderPath, 'utf-8', async (err, data) => {
      if (err) console.log(err);
      data.forEach((fileName) => {
        const name = fileName.split('.');
        c.put(`${folderPath}/${fileName}`, `integracao_erp/${name[0]}-${Date.now()}.${name[1]}`, function (err) {
          if (err) {
            appendLogs(err, 'UploadToFTP');
          } else {
            const pathFile = `${folderPath}/${fileName}`;
            fs.unlink(pathFile, (err) => {
              if (err) appendLogs(err, 'Unlink after UploadFTP file');
            });
            console.log(fileName + " was uploaded successfully!");
          }
          c.end();
        });
      });
    });
    // c.list(function (err, list) {
    //   if (err) throw err;
    //   list.forEach(function (element, index, array) {
    //     //Ignore directories
    //     if (element.type === 'd') {
    //       console.log('ignoring directory ' + element.name);
    //       return;
    //     }
    //     // //Ignore non zips
    //     if (path.extname(element.name) !== '.zip') {
    //       console.log('ignoring file ' + element.name);
    //       return;
    //     }
    //     // Download files
    //     c.get(element.name, function (err, stream) {
    //       if (err) throw err;
    //       stream.once('close', function () {
    //         c.end();
    //       });
    //       stream.pipe(fs.createWriteStream(element.name));
    //     });
    //   });
    // });
  });
  c.connect(connectionProperties);
 }
};