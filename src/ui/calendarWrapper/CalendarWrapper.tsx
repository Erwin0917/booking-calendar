import { SelectDate } from 'src/ui/SelectDate/SelectDate';
import { CalendarContainer } from './CalendarWrapper.style';
import { SelectDay } from 'src/ui/SelectDay/SelectDay';
import { SelectHour } from 'src/ui/SelectHour/SelectHour';
import { observer } from 'mobx-react-lite';

export const CalenderWrapper = observer((): JSX.Element => {
    return (
        <CalendarContainer>
            <SelectDate/>
            <SelectDay />
            <SelectHour />
        </CalendarContainer>
    );
});
