import express from "express";
import { json } from "body-parser";
import { createTransport } from "nodemailer";

const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001;

app.use(json());

app.post("/api/send-welcome-email", (req, res) => {
  const { email } = req.body;

  // Setup Nodemailer transporter with your SMTP server details
  const transporter = createTransport({
    host: "dumkabipnelo.website",
    port: 465,
    secure: true, // Set to true if using SSL/TLS
    auth: {
      user: "dev@dumkabipnelo.website",
      pass: "$Dumka0510",
    },
  });

  // Email options
  const mailOptions = {
    from: "dev@dumkabipnelo.website",
    to: email,
    subject: "Welcome to the Newsletter!",
    text: `Thank you for subscribing to our newsletter! We're excited to have you on board.`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending welcome email:", error);
      return res.status(500).send("Internal Server Error");
    }

    console.log("Email sent:", info.response);
    res.status(200).send("Email sent successfully");
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
