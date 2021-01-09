const express = require("express")
const port= 10011
const app = express()
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false});
const PDFDocument = require('pdfkit')
const fs = require('fs')
const path = require('path') 

// initialize library for sending mails, credentials for authentication
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'pwptesterml@gmail.com',
      pass: 'pwptestml123456789'
    }
  });


// endpoint to serve post request to /mail (this request is sent when someone clicks on 'submit' in the front-end)
app.post('/mail', urlencodedParser, (req, res) => {
    // info is available in body because it is defined in the <input> of the form
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message

    // properties file which is defined by nodemailer
    var mailOptions = {
        from: email,
        to: 'pwptesterml@gmail.com',
        subject: subject,
        text: message
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.end();
        } else {
          console.log('Email sent: ' + info.response);
          res.end();
        }
      });

})

const resumeText =
`
Resume

Mai Linh Pham
mai_linh.pham@campus.lmu.de


- Education

University
-- B.Sc. Business Administration, LMU (2014)
-- B.Sc. Computational Linguistics, LMU (2017)
-- M.Sc. Computer Science, LMU (tba)


- Work

EQS Group AG
-- Working Student, Backend Developer (May 2017 - Sept. 2017)

gutefrage.net
-- Working Student, Data Engineer (Oct. 2017 - Mar. 2018)

ProsiebenSat1 Tech-Solutions GmbH
-- Data Engineer (Apr. 2018 - now)


- Skills

Scala: 50%
Python | NLP: 20%
SQL: 45%
Java: 25%
JavaScript | CSS | HTML: 10%

`

// get request endpoint for downloading the cv
app.get('/download-cv', (req, res) => {
    let pdfDoc = new PDFDocument;
    // after finishing writing the file, send pdf file back to client (without on "finisch" it may send the request too early => error) 
    pdfDoc.pipe(fs.createWriteStream('Mailinh_Pham_CV.pdf')).on("finish", function() {
        res.download("Mailinh_Pham_CV.pdf");
    });
    pdfDoc.text(resumeText)
    pdfDoc.end();
});


// use this directory to serve static html files so the backend can run on the server (work-around)
app.use(express.static(path.join(__dirname, "client", "build")))

// create endpoint on the backend server
app.get("/", (req, res) => {
    // this shows the website: the file index.html was created with 'npm run build' on the front end project
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(port)



