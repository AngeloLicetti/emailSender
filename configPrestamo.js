const nodemailer = require('nodemailer');
module.exports = (prestamos) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'credismart.peru@gmail.com', // Cambialo por tu email
            pass: 'nico0227.' // Cambialo por tu password
        }
    });

    const mailOptions = {
        from: `${prestamos.financiera}  <${prestamos.credismart}>`,
        to: `${prestamos.email}`, // Cambia esta parte por el destinatario
        subject: 'Pago de Cuota',
        html: `
        <strong>Asunto:</strong> ${prestamos.nombre}<br>
        <h4>${prestamos.saludos}</h4><br>
        <strong>ATTE:</strong> ${prestamos.financiera}<br>
        <strong>Teléfono:</strong> ${prestamos.tele}<br><br>
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
                filename: "TarjetaControl.pdf",
                path: `${prestamos.archivo} `,
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