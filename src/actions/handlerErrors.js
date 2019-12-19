require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { sendMail } = require('../utils/sendMailer');

const folderError = path.resolve(__dirname, '..', `errors`);

const handlerError = (error, errorAction) => {
  try {
    error.data.errors.forEach(err => {
      const data = new Date();
      const dataToAppend = `Path: ${err.path} , Message: ${err.message}, Data: ${data}`;
      fs.appendFileSync(`${folderError}/erros.txt`, JSON.stringify(dataToAppend)+ '\n', 'utf8');
    });
  } catch (err) {
    appendLogs(err, errorAction);
  }
};

const appendLogs = async (error, errorAction) => {
  try {
    const errorName = error.constructor.name;
    const email = process.env.USER_EMAIL;
    switch (error.constructor.name) {
      case 'SyntaxError':
        sendMail({
          subject: `Status: ${errorName} em  ${errorAction}`,
          text: `Erro na sintaxe do arquivo para a ação: ${errorAction}, em ${email}`
        });
        break;
      case 'Object':
        sendMail({
          subject: `${errorAction} on ${email} `,
          text: `${JSON.stringify(error, null, 2)}`
        });
        break;
      default:
        break;
    }
    fs.appendFileSync(`${folderError}/logs.txt`, JSON.stringify(error, null, 2) + '\n', 'utf8');
  } catch (err) {
    console.log('Error =========>>>>>>>>', err);
  }
 
};

module.exports = {
  handlerError,
  appendLogs
};