import { makeObservable } from 'mobx';

export class ReservationCalendarState {

    public constructor() {
        makeObservable(this);
    }
}
