const sender = require('../config/emailConfig');
const ticketRepository = require('../repository/ticket-respository')
const repo = new ticketRepository();

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
const fetchPendingEmails = async(timestamp) =>{
  try {    
    const response =await repo.get({status:"PENDING"});
    return response;
  } catch (error) {
    console.log(error);
  }
}

const createNotification = async(data)=>{
  try {
    const respo = await repo.create(data);
    return respo;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
const updateTicket = async (ticketId , data)=>{
  try {
    const response = await repo.update(ticketId ,data);
  } catch (error) {
    console.log(error);
  }
}
module.exports = {sendBasicEmail , fetchPendingEmails , createNotification , updateTicket}