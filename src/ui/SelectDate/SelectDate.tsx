import React from 'react';
import { Arrow, ArrowBack, SelectDateHeader, SelectDateWrapper } from './SelectDate.style';
import DatePicker from 'react-date-picker';
import { action, computed, makeObservable, observable } from 'mobx';
import moment from 'moment';
import { observer  } from 'mobx-react-lite';


class SelectDateState {
    @observable public currentDate: Date = new Date();


    public constructor(){
        makeObservable(this);
    }

    @computed public get getWeekFromDay(): {start: string, end: string} {
        const date = moment(this.currentDate);

        const weekStart = date.clone().startOf('isoWeek').format('DD, MM');
        const weekEnd = date.clone().endOf('isoWeek').format('DD, MM');

        return {
            start: weekStart,
            end: weekEnd
        };
    }

    @action public onChangeDate = (newDate: Date | Date[]): void => {
        if (!Array.isArray(newDate)) {
            console.log('change date');
            this.currentDate = newDate;
        }
    }
}

export const SelectDate = observer((): JSX.Element => {
    const [state] = React.useState(() => new SelectDateState());
    console.log('current date', state.currentDate);
    return (
        <div>
            <SelectDateHeader>Wybierz date</SelectDateHeader>
            <SelectDateWrapper>
                <div>
                    <button><ArrowBack /></button>
                    {state.getWeekFromDay.start} - {state.getWeekFromDay.end}
                    <DatePicker
                        onChange={state.onChangeDate}
                        value={state.currentDate}
                        clearIcon={null}
                        locale='pl-PL'
                    />
                    <button><Arrow /></button>
                </div>
            </SelectDateWrapper>
        </div>
    );
});
