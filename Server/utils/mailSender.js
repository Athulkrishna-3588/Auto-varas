// utils/mailSender.js
import nodemailer  from 'nodemailer'

const mailSender = async (email, title, body) => {
  try {
    // Create a Transporter to send emails
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587, // Use 465 if using SSL
      secure: false, // Set to true for port 465
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
    
    // Send emails to users
    let info = await transporter.sendMail({
      from: 'raziqsur@gmail.com',
      to: email,
      subject: title,
      html: body,
    });
    console.log("Email info: ", info);
    return info;
  } catch (error) {
    console.log(error.message);
  }
};
export default mailSender;