import transporter from "../config/mailer.js";

export const sendContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message, website } = req.body;

    // Ignore bot submissions
    if (website) {
      return res.status(200).json({
        success: true,
        message: "Message received.",
      });
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string"
    ) {
      return res.status(400).json({
        success: false,
        error: "Please provide valid form details.",
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();

    if (!cleanName || !cleanEmail || !cleanSubject || !cleanMessage) {
      return res.status(400).json({
        success: false,
        error: "All fields are required.",
      });
    }

    if (
      cleanName.length > 100 ||
      cleanEmail.length > 254 ||
      cleanSubject.length > 150 ||
      cleanMessage.length > 5000
    ) {
      return res.status(400).json({
        success: false,
        error: "One or more fields exceed the allowed length.",
      });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        error: "Please provide a valid email address.",
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: "Portfolio Contact Message",
      text: `
You have received a new message from Emmanuel's portfolio.

Name: ${cleanName}

Email: ${cleanEmail}

Subject: ${cleanSubject}

Message:
${cleanMessage}
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully:", info.messageId);

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact email error:", {
      message: error.message,
      code: error.code,
      response: error.response,
      responseCode: error.responseCode,
      command: error.command,
    });

    return res.status(500).json({
      success: false,
      error: "Unable to send your message. Please try again later.",
    });
  }
};