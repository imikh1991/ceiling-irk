export type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

export const calculateTimeLeft = () => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate() + 5;

    const difference = +new Date(`${year}-${month}-${day}`) - +new Date();

    let timeLeft: TimeLeft = {} as TimeLeft;

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return timeLeft;
};
