"use server";
// ? Having use server at the very top will make all functions here run on the server

// Nodemailer
import nodemailer, { SendMailOptions } from "nodemailer";

// React Email
import { render } from "@react-email/render"; // This is for rendering the email

// Email template
import ContactFormEmail from "@/templates/email/contact-form-email";

// Utils
import { getErrorMessage } from "@/lib/utils";

// Constants
import { NODEMAILER_EMAIL, NODEMAILER_PW } from "@/lib/constants";

// Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
        user: NODEMAILER_EMAIL,
        pass: NODEMAILER_PW,
    },
});

export const sendEmail = async (formData: FormData) => {
    // Get the values from the form data
    const senderEmail = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Render the email to html
    const emailHtml = render(ContactFormEmail({ senderEmail, message }));

    let data;
    try {
        const mailOptions: SendMailOptions = {
            from: "Portfolio Contact Form",
            to: NODEMAILER_EMAIL,
            subject: "New message from portfolio contact form",
            html: emailHtml,
        };

        // Send email
        data = await transporter.sendMail(mailOptions);
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }
    return {
        data,
    };
};
