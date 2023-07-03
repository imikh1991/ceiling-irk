import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Calc.module.scss';

// set up interface object for Form
interface FormData {
    selectorType: string;
    square: string;
    lamps: string;
    pipes: string;
}

function Calc() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
    } = useForm<FormData>({});

    const [square, setSquare] = useState('');
    const [lamps, setLamps] = useState('');
    const [pipes, setPipes] = useState('');

    const changeSquareHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSquare(e.target.value);
    };

    const changeLampsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLamps(e.target.value);
    };

    const changePipesHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPipes(e.target.value);
    };

    const [data, setData] = React.useState<FormData[]>([]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = (data: FormData, event: any) => {
        try {
            setData((prevData) => [...prevData, data]);
            alert('Form successfully submitted');
            event.preventDefault();
        } catch (e) {
            alert(e);
        }
    };
    /* 
    useEffect(() => {
         создать функцию вычисления цены 
            result = square * valueMeter + lamps amount + pipes amount  
        
            const calculate = () => {
                console.log('calculate');
                const lampRate = 100; // Rate per lamp
                const pipeRate = 300; // Rate per water pipe
              
                const { square, lamps, pipes } = values; // Assuming `values` is obtained from React Hook Form
              
                let valueMeter = 0; // Rate per square meter based on the selected ceiling type
                let result = 0; // Total cost
              
                if (classic) {
                  valueMeter = 500;
                }
              
                if (multilevel) {
                  valueMeter = 900;
                }
              
                if (star) {
                  valueMeter = 700;
                }
              
                if (combined) {
                  valueMeter = 800;
                }
                result = square * valueMeter + lamps * lampRate + pipes * pipeRate;
              
                return result;
              };
              */

    return (
        <form className={styles.form}>
            <h2>Form Calculate</h2>

            <div>
                <label htmlFor="selectorType">Селектор типа потолка </label>
                <input type="radio" id="classic" value="classic" {...register('selectorType', { required: true })} />
                <label htmlFor="classic">Классик</label>
                <input
                    type="radio"
                    id="multilevel"
                    value="multilevel"
                    {...register('selectorType', { required: true })}
                />
                <label htmlFor="multilevel">Мультиуровневый</label>
                <input type="radio" id="star" value="star" {...register('selectorType', { required: true })} />
                <label htmlFor="star">Звездный</label>
                <input type="radio" id="combined" value="combined" {...register('selectorType', { required: true })} />
                <label htmlFor="combined">Комбинированный</label>
                {errors.selectorType && <span>Please select your favorite type</span>}
            </div>

            <div>
                <label htmlFor="square">Площадь:</label>
                <input
                    type="text"
                    id="square"
                    // onChange={changeSquareHandler}
                    {...register('square', { required: true })}
                />
                {errors.square && <span className={styles.error}>Заполните поле площадь</span>}
            </div>

            <div>
                <label htmlFor="lamps">Светильников:</label>
                <input
                    type="text"
                    id="lamps"
                    // onChange={changeLampsHandler}
                    {...register('lamps', { required: true })}
                />
                {errors.lamps && <span className={styles.error}>Заполните поле ламп</span>}
            </div>
            <div>
                <label htmlFor="pipes">Водопроводных труб:</label>
                <input
                    type="text"
                    id="pipes"
                    // onChange={changePipesHandler}
                    {...register('pipes', { required: true })}
                />
                {errors.pipes && <span className={styles.error}>Заполните поле ламп</span>}
            </div>
            <div>
                <h3 className={styles.result}>Вернуть сюда результат Result</h3>
            </div>
        </form>
    );
}

export default Calc;
