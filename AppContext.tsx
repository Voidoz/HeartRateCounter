import React, {createContext, useCallback, useEffect, useState} from "react";
import {AppContextType} from "./types";

const AppContext = createContext<AppContextType>({
    beats: 0,
    timer: 15,
    running: false,
    complete: false,

    resetValues(): void {
    },
    addBeat(): void {
    }
});

export function AppProvider({ children }: React.PropsWithChildren) {
    const [beats, setBeats] = useState(0);
    const [timer, setTimer] = useState(15);
    const [running, setRunning] = useState(false);
    const [complete, setComplete] = useState(false);

    const resetValues = useCallback(() => {
        setBeats(0);
        setTimer(15);
        setRunning(false);
        setComplete(false);
    }, []);

    const addBeat = useCallback(() => {
        setBeats(prev => prev + 1);

        setRunning(true);
    }, []);

    useEffect(() => {
        let interval: NodeJS.Timer;

        let countDown = 15;

        if (running) interval = setInterval(() => {
            if (countDown <= 0) {
                setRunning(false);
                setComplete(true);
            }
            else {
                countDown -= 1;
                setTimer(prev => prev - 1);
            }
        }, 1000)

        return () => interval && clearInterval(interval);
    }, [running]);

    return (
        <AppContext.Provider
            value={{
                beats,
                timer,
                running,
                complete,
                resetValues,
                addBeat
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;