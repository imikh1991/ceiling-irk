// import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './Calc.module.scss';

interface FormData {
    selectorType: string;
    square: string;
    lamps: string;
    pipes: string;
}

function Calc() {
    const {
        register,
        watch,
        formState: { errors },
    } = useForm<FormData>();
    // нужен рефакторинг этого колхозного колхоза
    // const [square, setSquare] = useState('');
    // const [lamps, setLamps] = useState('');
    // const [pipes, setPipes] = useState('');

    // каждый раз на изменение поля дергаем change
    // нужно сделать по умному а не лоб
    /*
    const changeSquareHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSquare(e.target.value);
    };

    const changeLampsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLamps(e.target.value);
    };

    const changePipesHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPipes(e.target.value);
    };
    */
    const calculate = () => {
        const lampRate = 100;
        const pipeRate = 300;
        const defaultValue = 19000;

        let valueMeter = 0;
        let result = 0;

        if (selectedType === 'classic') {
            valueMeter = 500;
        }

        if (selectedType === 'multilevel') {
            valueMeter = 900;
        }

        if (selectedType === 'star') {
            valueMeter = 700;
        }

        if (selectedType === 'combined') {
            valueMeter = 800;
        }
        // боже мой какой позор
        result =
            Number(selectedSquare) * valueMeter + Number(selectedLamps) * lampRate + Number(selectedPipes) * pipeRate;
        // result = square * valueMeter + lamps * lampRate + pipes * pipeRate;
        // нужно придумать по умному а не в лоб решать такие задачи Илья
        if (!result) {
            return defaultValue;
        }
        return result;
    };

    const selectedType = watch('selectorType');
    const selectedSquare = watch('square');
    const selectedLamps = watch('lamps');
    const selectedPipes = watch('pipes');

    // const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(e.target.value); // The selected value from the radio group
    // };

    return (
        <form className={styles.form}>
            <h2 className={styles.header}>Рассчитать стоимость потолка</h2>
            <section className={styles.group}>
                <div className={styles.radio}>
                    <label htmlFor="selectorType">Селектор типа потолка </label>
                    <input
                        type="radio"
                        id="classic"
                        value="classic"
                        {...register('selectorType', { required: true })}
                    />
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
                    <input
                        type="radio"
                        id="combined"
                        value="combined"
                        {...register('selectorType', { required: true })}
                    />
                    <label htmlFor="combined">Комбинированный</label>
                    {errors.selectorType && <span>Please select your favorite type</span>}
                </div>

                <div className={styles.input}>
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
                        {errors.pipes && <span className={styles.error}>Заполните поле водопроводных труб</span>}
                    </div>
                </div>
            </section>

            <div className={styles.result}>
                <h3 className={styles.header}>Примерная стоимость: {calculate()}</h3>
            </div>
        </form>
    );
}

export default Calc;
