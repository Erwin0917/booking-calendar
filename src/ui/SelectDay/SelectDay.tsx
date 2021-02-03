import { observer } from 'mobx-react-lite';
import React from 'react';
import { useAppStateContext } from 'src/appState/appState';
import { DayItem, DayItemWrapper, DaysListWrapper } from './SelectDay.style';

export const SelectDay = observer((): JSX.Element => {
    const { reservationCalendarState } = useAppStateContext();

    const renderDays = ():React.ReactNodeArray => {
        const { days } = reservationCalendarState.getWeekDaysFromSelectedDay;

        return days.map( day => {

            return (
                <DayItemWrapper key={day.toString()}>
                    <span>
                        {day.format('MMMM')}
                    </span>
                    <DayItem >
                        {day.format('dd DD')}
                    </DayItem>
                </DayItemWrapper>
            );
        });
    };

    return (
        <div>
            <DaysListWrapper>
                {renderDays()}
            </DaysListWrapper>
        </div>
    );
});
