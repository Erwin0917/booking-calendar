import React from 'react';
import { AppState, Provider } from './appState/appState';
import { CalenderWrapper } from './ui/calendarWrapper/CalendarWrapper';

interface PropsTypes {
    appState: AppState,
}

function App(props: PropsTypes): JSX.Element {
    return (
        <Provider value={props.appState}>
            <CalenderWrapper />
        </Provider>
    );
}

export default App;
