import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Form.module.scss';
import axios from 'axios';
// import CloseButton from '../buttons/closeButton';

// set up interface object
interface FormData {
    address: string;
    phone: string;
}
type SuccessMessageProps = {
    onClose: () => void;
};

function SuccessMessage({ onClose }: SuccessMessageProps) {
    return (
        <div className={styles.result}>
            Спасибо! Мы свяжемся с вами в ближайшее время.
            <button onClick={onClose}>X</button>
        </div>
    );
}

function Form() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({});

    const defaultValues = useMemo(
        () => ({
            address: '',
            phone: '',
        }),
        []
    );

    /* React.useEffect(() => {
        if (status === 'Delivered') {
            alert('SubmitSuccessful');
            setData();
        }
    }, [reset, defaultValues]);
    */
    const [status, setStatus] = useState('Submit');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    // const [agreed, setAgreed] = useState(false);
    // const [data, setData] = React.useState<FormData[]>([]);
    // const { contact } = config;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = async (data: FormData, event: any) => {
        try {
            event.preventDefault();
            setStatus('Sending...');
            const addressUser = data.address;
            const phoneUser = data.phone;
            // обработаем отправку данных
            axios({
                method: 'POST',
                url: 'http://localhost:5175/send',
                data: {
                    address: addressUser,
                    phone: phoneUser,
                },
            }).then((res) => {
                console.log(res);
                if (res.data.status === 'success') {
                    setStatus('Delivered');
                    setShowSuccessMessage(true);
                    alert(status);
                    reset(defaultValues);
                } else if (res.data.status === 'fail') {
                    setStatus('Failed');
                    alert(status);
                }
            });
        } catch (e) {
            alert(e);
        }
    };
    setTimeout(() => {
        // исчезает сообщение
        setStatus('Submit');
    }, 15000);

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
                {status === 'Delivered' && (
                    <div className={styles.result}>
                        {showSuccessMessage && <SuccessMessage onClose={() => setShowSuccessMessage(false)} />}
                    </div>
                )}
            </form>
        </>
    );
}

export default Form;
