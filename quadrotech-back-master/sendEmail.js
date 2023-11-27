"use strict";
const nodemailer = require("nodemailer");

let user = `manager@skyua.org`;
let pass = `6PP7agGjFWWDdZep`;

let transporter = nodemailer.createTransport({
  host: "skyua.org",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: user,
    pass: pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log("Email sent: ", info);
  });
};

module.exports = mailer;
