import { observer } from 'mobx-react-lite';
import { useAppStateContext } from 'src/appState/appState';

export const SelectDay = observer((): JSX.Element => {
    const { reservationCalendarState } = useAppStateContext();

    const renderDays = ():React.ReactNodeArray => {
        const { days } = reservationCalendarState.getWeekDaysFromSelectedDay;

        return days.map( day => {

            return (
                <li key={day.toString()}>{day.format('dddd DD')}</li>
            );
        });
    };

    return (
        <div>
            <ul>
                {renderDays()}
            </ul>
        </div>
    );
});
