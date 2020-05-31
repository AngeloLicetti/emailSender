const nodemailer = require('nodemailer');
module.exports = (formulario) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'credismart.peru@gmail.com', // Cambialo por tu email
      pass: 'nico0227.' // Cambialo por tu password
    }
  });
  const mailOptions = {
    from: `${formulario.nombre}  <${formulario.email}>`,
    to: 'credismart.peru@gmail.com', // Cambia esta parte por el destinatario
    subject: formulario.asunto,
    html: `
 <strong>Nombre:</strong> ${formulario.nombre} <br/>
 <strong>E-mail:</strong> ${formulario.email} <br/>
 <strong>teléfono:</strong> ${formulario.tele} <br/>
 <strong>Asunto:</strong> ${formulario.asunto} <br/>
 <strong>Mensaje:</strong> ${formulario.mensaje}
 `
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info);
  });
}