const nodemailer = require('nodemailer');

const transportOptions = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
});

const googleTransportOptions = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
}

const transporter = process.env.USE_GOOGLE_SMTP === 'true' ?
    nodemailer.createTransport(googleTransportOptions) :
    nodemailer.createTransport(transportOptions);


export const sendMail = ({email, subject, template}) => {
  const
    mailOptions = {
      from: `Mailer test <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: subject,
      // html: template
      text: template
    };

  return new Promise((resolve, reject)=> {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
};
