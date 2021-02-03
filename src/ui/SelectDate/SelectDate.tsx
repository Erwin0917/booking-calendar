import React from 'react';
import { Arrow, ArrowBack, Button, DateRange, DateRangeWrapper, SelectDateHeader, SelectDateWrapper } from './SelectDate.style';
import DatePicker from 'react-date-picker';
import { observer  } from 'mobx-react-lite';
import { useAppStateContext } from 'src/appState/appState';



export const SelectDate = observer((): JSX.Element => {
    const { reservationCalendarState } = useAppStateContext();

    return (
        <div>
            <SelectDateHeader>Wybierz date</SelectDateHeader>
            <SelectDateWrapper>
                <DateRangeWrapper>
                    <Button onClick={reservationCalendarState.previousWeek}><ArrowBack /></Button>
                    <DateRange>
                        {reservationCalendarState.getWeekFromDay.start.format('DD MM')} - {reservationCalendarState.getWeekFromDay.end.format('DD MM')}
                    </DateRange>
                    <DatePicker
                        onChange={reservationCalendarState.updateCurrentDate}
                        value={reservationCalendarState.currentDate.toDate()}
                        clearIcon={null}
                        locale='pl-PL'
                    />
                    <Button onClick={reservationCalendarState.nextWeek}><Arrow /></Button>
                </DateRangeWrapper>
            </SelectDateWrapper>
        </div>
    );
});
