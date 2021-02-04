import { action, makeObservable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useAppStateContext } from 'src/appState/appState';
import { ReservationCalendarState } from 'src/ui/calendarWrapper/ReservationCalendar.state';
import { DayItem, DayItemWrapper, DaysListWrapper } from './SelectDay.style';


export const SelectDay = observer((): JSX.Element => {
    const { reservationCalendarState } = useAppStateContext();

    const renderDays = ():React.ReactNodeArray => {
        const days = reservationCalendarState.getWeekDaysFromSelectedDay;
        return days.map( day => <DayItemComponent key={day.toString()} currentDay={day} /> );
    };

    return (
        <div>
            <DaysListWrapper>
                {renderDays()}
            </DaysListWrapper>
        </div>
    );
});



class DayItemState {

    public constructor(private readonly currentDay: moment.Moment, private readonly reservationCalendarState: ReservationCalendarState) {
        makeObservable(this);
    }

    @action public onClickDay = (): void => {
        this.reservationCalendarState.updateCurrentDate(this.currentDay.toDate());
    }
}

interface DayItemPropsType {
    currentDay: moment.Moment
}

const DayItemComponent = observer(({ currentDay }: DayItemPropsType): JSX.Element => {
    const { reservationCalendarState } = useAppStateContext();
    const [ state ] = useState(() => new DayItemState(currentDay, reservationCalendarState));

    return (
        <DayItemWrapper>
            <span>
                {currentDay.format('MMMM')}
            </span>
            <DayItem onClick={state.onClickDay}>
                {currentDay.format('dd DD')}
            </DayItem>
        </DayItemWrapper>
    );
});
