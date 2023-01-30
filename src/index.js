const express  = require('express');
const bodyParser = require('body-parser')
const {PORT ,REMINDER_BINDING_KEY} = require('./config/server-config')
const EmailService = require('./services/email-service')
const {createChannel , subscribeMessage} =require('./utils/messageQueue')
const TicketController = require('./controllers/ticket-controller')
const jobs = require('./utils/job');

const setUpAndStartServer = async()=>{
 const app = express();
 app.use(bodyParser.json()); 
 app.use(bodyParser.urlencoded({extended:true}));

 app.post('/api/v1/tickets' , TicketController.create);
 
 const channel = await createChannel();
 subscribeMessage(channel, EmailService.subscribeEvents , REMINDER_BINDING_KEY);
 
 app.listen(PORT, ()=>{
    console.log(`server started at port ${PORT}` );
    //jobs();
   
 });
}
setUpAndStartServer();