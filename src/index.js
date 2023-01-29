const express  = require('express');
const bodyParser = require('body-parser')
const {PORT} = require('./config/server-config')
const {sendBasicEmail} = require('./services/email-service')
const setUpAndStartServer = ()=>{
 const app = express();
 const TicketController = require('./controllers/ticket-controller')
 const jobs = require('./utils/job');
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:true}));
 app.post('/api/v1/tickets' , TicketController.create)

 app.listen(PORT, ()=>{
    console.log(`server started at port ${PORT}` );
    jobs();
    // sendBasicEmail(
    //     'support@noti.com',
    //     'dewanshpandey@gmail.com',
    //     'Notification about your next flight',
    //     'HEY , you have your flight in the next 48 hours'
    // );
 })
}
setUpAndStartServer();