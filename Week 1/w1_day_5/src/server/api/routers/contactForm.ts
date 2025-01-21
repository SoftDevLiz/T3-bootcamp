import { createRouter } from '../trpc';
import nodemailer from 'nodemailer';
import { z } from 'zod';

/**
 * Creates a TRPC router. It... 
 *  1. Defines a mutation and what the input for that should look like
 *  2. Uses Zod to validate the input (makes sure that the email is a valid email format, the message is a string with a min. length of 10 char, etc.)
 *  3. Defines what the resolve should be (what should be done with the input)
 *  
 * After zod has validated the input, the resolve...
 *  (is asynchronous)
 *  1. Destructures the necessary data from the input (name, message)
 *  2. Creates a transporter with Nodemailer, which specifies what service should be used, and auth for that service
 *  3. Creates a mailOptions object which specifies certain email criteria (where it's from, etc.)
 *  4. Attempts to send the email in a Try/Catch block
 */
export const contactFormRouter = createRouter()
    .mutation('sendEmail', {
        input: z.object({
            email: z.string().email(),
            message: z.string().min(10),
        }),
        resolve: async ({ input }) => {
            const { email, message } = input;

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            const mailOptions = {
                from: email,
                to: 'liz.mouton1@gmail.com',
                subject: 'New Contact Form Submission',
                text: message,
            };

            try {
                await transporter.sendMail(mailOptions);
                return { success: true };
            } catch (error) {
                console.error('Error sending email:', error);
                throw new Error('Failed to send email');
            }
        },
    });