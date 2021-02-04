import { observer } from 'mobx-react-lite';
import React from 'react';
import { useAppStateContext } from 'src/appState/appState';
import { HourItem, HourList, SelectedDay } from './SelectHour.style';


export const SelectHour = observer((): JSX.Element => {
    const { reservationCalendarState } = useAppStateContext();

    const mockList = [
        { time: '8:00 - 9:00', isBooked: randomBoolean() },
        { time: '9:00 - 10:00', isBooked: randomBoolean() },
        { time: '10:00 - 11:00', isBooked: randomBoolean() },
        { time: '11:00 - 12:00', isBooked: randomBoolean() },
        { time: '12:00 - 13:00', isBooked: randomBoolean() },
        { time: '13:00 - 14:00', isBooked: randomBoolean() },
        { time: '14:00 - 15:00', isBooked: randomBoolean() },
        { time: '15:00 - 16:00', isBooked: randomBoolean() }
    ];

    const generateHours = (): React.ReactNodeArray => {
        return mockList.map( (hour, index) => {
            return (
                <li key={index}>
                    <HourItem isBooked={hour.isBooked}>{hour.time}</HourItem>
                </li>
            );
        });
    };

    return (
        <div>
            <SelectedDay>Wybrany dzień {reservationCalendarState.currentDate.format('dd DD')}</SelectedDay>
            <HourList>
                {generateHours()}
            </HourList>
        </div>
    );
});

const randomBoolean = (): boolean => {
    return Math.random() < 0.4;
};
