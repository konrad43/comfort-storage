const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: process.env.MAILER_HOST,
    port: 465,
    secure: true,
    auth: { user: 'info@comfortstorage.eu', pass: process.env.MAILER_SECRET }
});

async function sendMail({ name, email, message }) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: 'Strona Comfort Storage <info@comfortstorage.eu>', // sender address
        to: process.env.MAILER_RECIPIENT, // list of receivers
        subject: `Zapytanie od ${name}`, // Subject line
        text: `Imię i nazwisko: ${name}
E-mail: ${email}

Treść wiadomości:
${message}
`
    });

    console.log('Message sent: %s', info.messageId);
}

module.exports = { sendMail };
