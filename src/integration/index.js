const path = require('path');
const fs = require('fs');
const Client = require('ftp');

const c = new Client();
const connectionProperties = {
  host: '177.53.143.13',
  port: 21,
  user: 'integracao',
  password: '@j19801980***',
};
const folderPath = path.resolve(__dirname, '..', 'enviar', 'ecommerce');
module.exports = {
 uploadFile(pth) {
  c.on('ready', async function () {
    fs.readdir(folderPath, 'utf-8', async (err, data) => {
      if (err) console.log(err);
      data.forEach(fileName => {
        c.put(`${folderPath}/${fileName}`, fileName, function (err) {
          if (err) {
            console.log(err);
          } else {
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