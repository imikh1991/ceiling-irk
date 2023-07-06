//import fs from 'fs';
import express from 'express';
//import path from 'path';
//import cors from 'cors';
import nodemailer from 'nodemailer';
//import router from 'express';
import { createServer } from 'vite';
//import { fileURLToPath } from 'url';
import { AUTH_USER, AUTH_PASSWORD } from './src/const/auth-data';
// const __dirname = path.dirname(fileURLToPath(import.meta.url));
const port = process.env.PORT || 5173;

async function startServer() {
    const app = express();
    // const router = express.Router();

    const vite = await createServer({
        server: {
            middlewareMode: true,
            watch: {
                usePolling: true,
                interval: 100,
            },
        },
        appType: 'custom',
    });

    app.use(vite.middlewares);

    app.post('/send', async (req, res, next) => {
        //const url = req.originalUrl;
        const contactEmail = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            auth: {
                user: AUTH_USER,
                pass: AUTH_PASSWORD,
            },
        });

        contactEmail.verify((error) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Ready to Send');
            }
        });

        // отправка почты
        const address = req.body.address;
        const phone = req.body.phone;
        const mail = {
            from: phone,
            to: 'mr.mihoho@gmail.com',
            subject: 'Contact Form Submission',
            html: `<p>Phone: ${phone}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${address}</p>`,
        };
        contactEmail.sendMail(mail, (error) => {
            if (error) {
                res.json({ status: 'ERROR' });
            } else {
                res.json({ status: 'Message Sent' });
            }
        });

        try {
            // логика отправки письма
            // нужно доделывать - здесь ошибка парсинга JSON
        } catch (e) {
            const error = e as Error;
            vite?.ssrFixStacktrace(error);
            res.status(500).end(error.stack);
            next(error);
        }
    });

    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
}

startServer();
