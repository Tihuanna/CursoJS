import React, { useEffect } from 'react';
import { useInterval } from '../hooks/use-interal';
import { Button } from './button';
import { Timer } from './timer';


interface Props {
    pomodoroTime: number;
    shortRestTime: number;
    longRestTime: number;
    cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
    const [mainTime, setMainTime] = React.useState(props.pomodoroTime);
    const [timeCounting, setTimeCounting] = React.useState(false);
    const [working, setWorking] = React.useState(false);
    const [resting, setResting] = React.useState(false);


    useEffect(() => {
        if (working) document.body.classList.add('working');
        if (resting) document.body.classList.remove('working');
    }, [working]);




    useInterval(() => {
        setMainTime(mainTime - 1);
    }, timeCounting ? 1000 : null);

    const configureWork = () => {
        setTimeCounting(true);
        setWorking(true);
        setResting(false);
        setMainTime(props.pomodoroTime);
    }

    const configureRest = (Long: boolean) => {
        setWorking(false);
        setResting(true);

        if (Long) {
            setMainTime(props.longRestTime);
        } else {
            setMainTime(props.shortRestTime);
        }     
    }
    return (
        <div className="pomodoro">
            <h2>Você está: trabalhando</h2>
            <Timer mainTime={mainTime} />

            <div className='controls'>
                <Button text="Trabalhar" onClick={() => configureWork()}></Button>
                <Button text="Descanso" onClick={() => configureRest(false)}></Button>
                <Button className={!working && !resting ? 'hidden' : '' } text={timeCounting ? 'Pause' : 'Play'} onClick={() => setTimeCounting(!timeCounting)}></Button>
            </div>
            <div className='details'>
                <p>TESTANDO</p>
                <p>TESTANDO</p>
                <p>TESTANDO</p>
                <p>TESTANDO</p>
            </div>
        </div>
    )
}
