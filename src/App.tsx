import React from 'react';
import { AppState, Provider } from './appState/appState';
import { CalenderWrapper } from './ui/calendarWrapper/CalendarWrapper';
import { SettingsPanel } from './ui/settingPanel/SettingsPanel';

interface PropsTypes {
    appState: AppState,
}

function App(props: PropsTypes): JSX.Element {
    return (
        <Provider value={props.appState}>
            <SettingsPanel />
            <CalenderWrapper />
        </Provider>
    );
}

export default App;
