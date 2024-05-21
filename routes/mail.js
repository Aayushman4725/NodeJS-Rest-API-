const nodemailer = require("nodemailer");
const codegen = require("./codeGen");

const transporter = nodemailer.createTransport({
  host: "bulk.smtp.mailtrap.io",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "api",
    pass: "8fbd2f0cfaef67b9e1e468b2b7ff90fe",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "info@demomailtrap.com", // sender address
    to: "aayushmannp@gmail.com", // list of receivers
    subject: "Hello", // Subject line
    text: codegen, // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
