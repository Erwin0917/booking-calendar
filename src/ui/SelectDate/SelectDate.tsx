import React from 'react';
import { Arrow, ArrowBack, SelectDateHeader, SelectDateWrapper } from './SelectDate.style';
import DatePicker from 'react-date-picker';
import { observer  } from 'mobx-react-lite';
import { useAppStateContext } from 'src/appState/appState';



export const SelectDate = observer((): JSX.Element => {
    const { reservationCalendarState } = useAppStateContext();

    return (
        <div>
            <SelectDateHeader>Wybierz date</SelectDateHeader>
            <SelectDateWrapper>
                <div>
                    <button onClick={reservationCalendarState.previousWeek}><ArrowBack /></button>
                    {reservationCalendarState.getWeekFromDay.start.format('DD MM')} - {reservationCalendarState.getWeekFromDay.end.format('DD MM')}
                    <DatePicker
                        onChange={reservationCalendarState.updateCurrentDate}
                        value={reservationCalendarState.currentDate.toDate()}
                        clearIcon={null}
                        locale='pl-PL'
                    />
                    <button onClick={reservationCalendarState.nextWeek}><Arrow /></button>
                </div>
            </SelectDateWrapper>
        </div>
    );
});
