const nodemailer = require('nodemailer');


// async..await is not allowed in global scope, must use a wrapper
async function transporter() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    //let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport

    let transporter = nodemailer.createTransport({
        pool: true,
        host: 'smtp.ionos.de',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'monkey@baizuo.online', // generated ethereal user
            pass: 'Lj2life1sap4girls!' // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });



    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'monkey@baizuo.online', // sender address
        to: 'bar@example.com, kantemir.imam@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    });

    console.log('Message sent: %s', info.messageId);


}


module.exports = transporter;