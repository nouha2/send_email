var nodemailer = require('nodemailer');
var crypto = require('crypto');

var transporter = nodemailer.createTransport(({
    service: 'gmail',
  
    auth: {
      user: 'sadakacontactasso@gmail.com',
      pass: 'mdp'
    }
  }));//***** */
//sadakacontactasso@gmail.com
  var mailOptions = {
    from: 'sadakacontactasso@gmail.com',
    to: 'debbabi.ou.com',
    subject: 'Sending Email using Node.js[nodemailer]',
    text: 'hawaha email sadakacontactasso@gmail.com w password',
   html: '<htm><p>Votre adhésion a été prise en compte. </p>'+

   '<p>Veuillez activer votre compte</p>'+

'<p><button>Cliquez ici</button></p>' +
'<p>Pour valider votre adhésion, veuillez payer la cotisation annuelle.</p>' +
 

'<p>RIB: TN59 1750 3000 0002 2957 9702</p>'+

'<p>Regards,</p>'+
'<p>Association de Recherche Scientifique et Innovation en Informatique- ARSII</p>'+
   
'</html>'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });  

   
