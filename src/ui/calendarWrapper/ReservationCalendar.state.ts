import { action, computed, makeObservable, observable } from 'mobx';
import moment from 'moment';

export interface ListOfDayType {
    days: Array<moment.Moment>;
}

export class ReservationCalendarState {
    @observable public currentDate: moment.Moment = moment(new Date());

    public constructor() {
        makeObservable(this);
    }

    @action public updateCurrentDate = (newDate: Date | Date[]): void => {
        if (!Array.isArray(newDate)) {
            const momentDate = moment(newDate);
            this.currentDate = momentDate;
        }
    }

    @action public nextWeek = (): void => {
        const { end } = this.getWeekFromDay;
        const firstDayOfNextWeek = moment(end).add(1,'days');

        this.currentDate = firstDayOfNextWeek;
    }

    @action public previousWeek = (): void => {
        const { start } = this.getWeekFromDay;
        const firstDayOfNextWeek = moment(start).add(-1,'days');

        this.currentDate = firstDayOfNextWeek;
    }

    @computed public get getWeekFromDay(): {start: moment.Moment, end: moment.Moment} {
        const { days } = this.getWeekDaysFromSelectedDay;

        const startDay = days[0];
        const lastDay = days[days.length - 1];

        return {
            start: startDay,
            end: lastDay
        };
    }

    @computed public get getWeekDaysFromSelectedDay(): ListOfDayType {
        const weekStartDay = this.currentDate.startOf('isoWeek');

        const days = [];
        for (let i = 0; i <= 6; i++) {
            days.push(moment(weekStartDay).add(i, 'days'));
        }

        return { days };
    };
}
