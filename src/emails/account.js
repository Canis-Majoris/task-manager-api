const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeMail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: "gigi.khomeriki@gmail.com",
      subject: "Thansk for joining in!",
      text: `Welcome ${name}! Let us know how you get along with the app.`,
      html: `<h1>Welcome ${name}!</h1><p>Let us know how you get along with the app.</p>`,
    })
    .catch((e) => {
      console.log(e.response.body.errors);
    });
};

const sendAccountCancelMail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: "gigi.khomeriki@gmail.com",
      subject: "We are sorry to see you go",
      text: `Goodbye, ${name}. Hope to see you soon.`,
      html: `<h1>Goodbye, ${name}</h1><p>Hope to see you soon.</p>`,
    })
    .catch((e) => {
      console.log(e.response.body.errors);
    });
};

module.exports = {
  sendWelcomeMail,
  sendAccountCancelMail,
};
