import { createTRPCRouter, publicProcedure } from '../trpc'; 
import nodemailer from 'nodemailer';
import { z } from 'zod';

export const contactFormRouter = createTRPCRouter({
  sendEmail: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        message: z.string().min(10),
      })
    )
    .mutation(async ({ input }) => {
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
        to: 'your-email@gmail.com',
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
    }),
});
