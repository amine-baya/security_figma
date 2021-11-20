import asyncHandler from 'express-async-handler'
import nodemailer from 'nodemailer'


// @desc    email
// @route   POST /api/ 
// @access  Private/Admin
const sendEmail = asyncHandler(async (req, res) => {
  const data = req.body 

  const smtpTransport = nodemailer.createTransport({
    
    service:'Gmail',
    port:465,
    auth:{
        user:'italos4070@gmail.com', 
        pass:process.env.EMAIL_PASSWORD
    },
    tls:{
        rejectUnauthorized:false
    }
  })

  const mailOptions={
      from: ` ${data.email}  <italos4070@gmail.com>  `,
      to: 'st9970@gmail.com',
      subject: `iTalos message test test`,
      html:`
      
      <h3> Informations  </h3>
      <p> Hi I want a demo ${data.email} </p>
  
      `
  }

smtpTransport.sendMail(mailOptions,(error,response)=>{

if (error) {

    res.send(error)
}
else{
    res.send('Success')
}
})
smtpTransport.close()
})

export {
    sendEmail,
}