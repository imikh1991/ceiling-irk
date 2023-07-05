// import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './Form.module.scss';
// import { Inputs } from '../../models/types';

function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: unknown) => {
        console.log(data);
        alert('Form successfully submitted');
    };

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
