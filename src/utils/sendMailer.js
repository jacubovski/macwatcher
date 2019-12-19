require('dotenv').config();
const nodemailer = require('nodemailer');
const SUPPORT_EMAIL = process.env.SUPPORT_EMAIL;

const sendMail = async (payload) => {
  try {
    const { subject, text } = payload;
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: SUPPORT_EMAIL, // generated ethereal user
        pass: process.env.SUPPORT_EMAIL_PASSWORD // generated ethereal password
    }
  });
// send mail with defined transport object
  let info = await transporter.sendMail({
      from: `"Macwatcher by Mastersoft" <${SUPPORT_EMAIL}>`, // sender address
      to: `${SUPPORT_EMAIL}`, // list of receivers
      subject, // Subject line
      text, // plain text body
  });
  } catch (error) {
  console.log(error)  ;
  }
  
};

module.exports = {
  sendMail
};
