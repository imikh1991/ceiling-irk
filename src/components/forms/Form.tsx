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
                <h2>Form</h2>
                <div>
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" {...register('address', { required: true })} />
                    {errors.address && <span className={styles.error}>Заполните поле</span>}
                </div>

                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" id="phone" {...register('phone', { required: true })} />
                    {errors.phone && <span className={styles.error}>Заполните поле</span>}
                </div>

                <button className={styles.btn} type="submit">
                    Вызвать замерщика
                </button>
            </form>
        </>
    );
}

export default Form;
