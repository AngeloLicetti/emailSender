const nodemailer = require('nodemailer');
module.exports = (cobranza) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: 'credismart.peru@gmail.com',
            clientId: '910843602766-3g43edogah7ukb7tvpd9a7v9ujl209tu.apps.googleusercontent.com',
            clientSecret: 'UlGhAazA9UnH6o8gLRC04JVV',
            refreshToken: '1//04vnu7KXBw49ICgYIARAAGAQSNwF-L9IreSJzFUBuuThQKUmfCC01pcHWOPYnfwA96jwrMcVJsfGcnDrjPrV4-U2OwebT4ulVTKg',
            accessToken: 'ya29.a0AfH6SMCSHNbjf98nDFkW4PFTEeAivg30yC6p5E3682Dr_EzINiWxFdwnXc6AjgLhZ41Y-5EHp7TUtu7V9NTTbR419okQylKXOOSBvdbeYONI-af7U-zCWOu-vUp_ff7MkoOg0SpyP1i3kn-GGCETTeiLGCbPlEZYacQ'
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
