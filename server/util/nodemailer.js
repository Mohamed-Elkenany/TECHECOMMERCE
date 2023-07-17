const nodemailer = require("nodemailer");

module.exports = async ({ name, email, subject, message, phone } ) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.PASS,
            }
        });
        const mailOption = {
            from: process.env.USER_EMAIL,
            to: email,
            name: name,
            phone:phone,
            subject: subject,
            message: message,
        }
        const info = await transporter.sendMail(mailOption);
        console.log(info.response);
    } catch (e) {
        console.log(e.message);
        throw new Error(e)
    }
}
