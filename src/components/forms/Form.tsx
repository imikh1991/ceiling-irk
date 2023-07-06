import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Form.module.scss';
// import { Inputs } from '../../models/types';
import axios from 'axios';
// set up interface object
interface FormData {
    address: string;
    phone: string;
}

function Form() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({});

    // работаем с данными формы
    const [status, setStatus] = useState('Submit');
    const [agreed, setAgreed] = useState(false);
    const [data, setData] = React.useState<FormData[]>([]);
    // const { contact } = config;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = async (data: FormData, event: any) => {
        try {
            event.preventDefault();
            setStatus('Sending...');
            const addressUser = data.address;
            const phoneUser = data.phone;
            // console.log('Из формы data >>', setData);
            // обработаем отправку данных
            axios({
                method: 'POST',
                url: 'http://localhost:5173/send',
                data: {
                    address: addressUser,
                    phone: phoneUser,
                },
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            }).then((response: any) => {
                if (response.data.msg === 'success') {
                    alert('Message Sent.');
                    reset();
                } else if (response.data.msg === 'fail') {
                    alert('Message failed to send.');
                }
            });
        } catch (e) {
            alert(e);
        }
    };

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)} method="POST">
                <div className={styles.group}>
                    <div className={styles.address}>
                        <label htmlFor="address"> </label>
                        <input
                            type="text"
                            id="address"
                            placeholder="Ваш адрес"
                            {...register('address', { required: true })}
                        />
                    </div>
                    <div> {errors.address && <span className={styles.error}>Нужно заполнить</span>}</div>
                </div>

                <div className={styles.group}>
                    <div className={styles.phone}>
                        <label htmlFor="phone"> </label>
                        <input
                            type="text"
                            id="phone"
                            placeholder="Ваш телефон"
                            {...register('phone', { required: true })}
                        />
                    </div>
                    <div> {errors.phone && <span className={styles.error}>Нужно заполнить</span>}</div>
                </div>

                <button className={styles.btn} type="submit">
                    Вызвать замерщика
                </button>
            </form>
        </>
    );
}

export default Form;
