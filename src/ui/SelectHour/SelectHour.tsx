import React from 'react';
import { HourItem, HourList } from './SelectHour.style';

export const SelectHour = (): JSX.Element => {

    return (
        <div>
            <HourList>
                <li><HourItem>8:00 - 9:00</HourItem></li>
                <li><HourItem>8:00 - 9:00</HourItem></li>
                <li><HourItem>8:00 - 9:00</HourItem></li>
                <li><HourItem>8:00 - 9:00</HourItem></li>
                <li><HourItem>8:00 - 9:00</HourItem></li>
                <li><HourItem>8:00 - 9:00</HourItem></li>
                <li><HourItem>8:00 - 9:00</HourItem></li>
                <li><HourItem>8:00 - 9:00</HourItem></li>
                <li><HourItem>8:00 - 9:00</HourItem></li>
            </HourList>
        </div>
    );
};
