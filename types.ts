export interface AppContextType {
    beats: number,
    timer: number,
    running: boolean,
    complete: boolean,

    resetValues(): void,
    addBeat(): void
}

export interface RootStackParams {
    Home: undefined,
    Running: undefined,
    Results: undefined
}