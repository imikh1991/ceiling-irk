import express from 'express';
//import path from 'path';
//import cors from 'cors';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';
import { AUTH_USER, AUTH_PASSWORD } from './src/const/auth-data';
const port = process.env.PORT || 5175;

async function startServer() {
    const app = express();
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));
    // parse application/json
    app.use(bodyParser.json());
    // const router = express.Router();
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        auth: {
            user: AUTH_USER,
            pass: AUTH_PASSWORD,
        },
    });
    // верификация работает - транспорт готов
    transporter.verify((error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Server is ready to take messages');
        }
    });

    app.use(cors());
    // отправка почты
    app.post('/send', async (req, res) => {
        console.log(req.body);
        const address = req.body.address;
        const phone = req.body.phone;
        const mail = {
            to: 'admin@1ps.ru',
            subject: '♥♥♥ Contact Form Submission',
            html: `New Order from web-site 
                 <p>Phone: ${phone}</p>
                 <p>Address: ${address}</p>`,
        };
        transporter.sendMail(mail, (error) => {
            if (error) {
                res.json({ status: 'fail' });
            } else {
                res.json({ status: 'success' });
            }
        });
    });

    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`);
    });
}

startServer();
