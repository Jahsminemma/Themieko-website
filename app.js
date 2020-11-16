const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

require('dotenv').config();

const app = express();

//view engine set up

app.engine('handlebars', exphbs({}));
app.set('view engine', 'handlebars');


//Body parser Middleware

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//public/static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
    res.render('contact', {layout:false});
});

app.post('/send', (req, res)=> {
    const output = `
    <p>You have a new contact request</P>
    <h3>Contact Details</>
    <ul>
    <li> Name: ${req.body.name}</li>
    <li> Email: ${req.body.email}</li>
    </ul>
    <h3>Subject</h3>
    <p>${req.body.subject}</p>
    
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;

    const transporter = nodemailer.createTransport({
        host: "mail.emmyunelectronics.com.ng", //replace with your email provider
        port: 587,
        auth: {
          user: process.env.email,
          pass:  process.env.pass,
        },

        tls:{
            rejectUnauthorized:false
        }
      });

      //setup email data with unicode symbol
      let mailOption = {
        from: '"Themieko contact form" <info@emmyunelectronics.com.ng>', // sender address
        to: "jahsminemma@gmail.com", // list of receivers
        subject: "Themieko contact request", // Subject line
        text: "Hello world?", // plain text body
        html: output // html body
      };

      //send mail with define transport object
      transporter.sendMail(mailOption, (error, info) =>{
          if(error){
              return console.log(error);
          };
          console.log('Message sent: %s', info.messageId);
            res.status(301).redirect('contact', {layout:false});
    
      });
          
})

app.listen(3500, () => {
    console.log('server started....');
});