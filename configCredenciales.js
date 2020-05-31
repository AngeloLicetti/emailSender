const nodemailer = require('nodemailer');
module.exports = (credenciales) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'credismart.peru@gmail.com', // Cambialo por tu email
      pass: 'nico0227.' // Cambialo por tu password
    }
  });
  const mailOptions = {
    from: `CREDISMART  <'credismart.peru@gmail.com'>`,
    to: `${credenciales.email}`, // Cambia esta parte por el destinatario
    subject: 'Bienvenid@ a CREDISMART',
    html: `
        <h4>${credenciales.user}, te damos la bienvenida a la plataforma web CREDISMART, diseñada para empresas financieras o prestamistas independientes que deseen automatizar su negocio, aumentando sus ingresos y reduciendo tiempo.  </h4>
        <h4> A continuación tus credenciales: </h4>
      <strong>Usuario:</strong> ${credenciales.email} <br/>
      <strong>Contraseña:</strong> ${credenciales.pass} <br><br>
      <footer class="footer ">
      <div class="container-fluid">
        <div class="copyright pull-right">
          &copy;
          2020, by       
          <a href="http://localhost:4200/#/pages/register" target="_blank">CREDISMART</a>
        </div>
      </div>
    </footer>
 `
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info);
  });
}