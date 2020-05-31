const nodemailer = require('nodemailer');
module.exports = (cobranza) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'credismart.peru@gmail.com', // Cambialo por tu email
            pass: 'nico0227.' // Cambialo por tu password
        }
    });

    const mailOptions = {
        from: `${cobranza.financiera}  <${cobranza.credismart}>`,
        to: `${cobranza.email}`, // Cambia esta parte por el destinatario
        subject: 'Cobranza',
        html: `
        <strong>Asunto:</strong> ${cobranza.nombre}<br>
        <footer class="footer ">
        <div class="container-fluid">
          <div class="copyright pull-right">
            &copy;
            2020, by CREDISMART
          </div>
        </div>
      </footer>
        `,
        attachments: [
            // String attachment
            {
                filename: "cobranza.pdf",
                path: `${cobranza.archivo} `,
            },
        ]

    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}
