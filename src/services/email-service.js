const sender = require('../config/emailConfig');
const sendBasicEmail = async(mailFrom , mailTo ,mailSubj ,mailBody )=>{
  try {
    const ans = await sender.sendMail({
        from : mailFrom,
        to: mailTo,
        subject: mailSubj,
        text : mailBody

    });
  } catch (error) {
    console.log(error);
  }
    
    
} 
module.exports = {sendBasicEmail}