const express  = require('express');
const bodyParser = require('body-parser')
const {PORT} = require('./config/server-config')
const {sendBasicEmail} = require('./services/email-service')
const setUpAndStartServer = ()=>{
 const app = express();
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:true}));

 app.listen(PORT, ()=>{
    console.log(`server started at port ${PORT}` );
    // sendBasicEmail(
    //     'support@noti.com',
    //     'dewanshpandey@gmail.com',
    //     'Notification about your next flight',
    //     'HEY , you have your flight in the next 48 hours'
    // );
 })
}
setUpAndStartServer();