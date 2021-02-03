import { ArrowIcon } from 'src/assets/icons/arrowIcon';
import styled from 'styled-components';

export const SelectDateWrapper = styled.div`
    display: flex;
    justify-content: center;

    .react-date-picker__inputGroup {
        display: none;
    }
`;

export const SelectDateHeader = styled.h2`
    font-size: 30px;
    font-weight: bold;
    text-align: center;
`;

export const Arrow = styled(ArrowIcon)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 15px;
    fill: #1662c6;
`;

export const ArrowBack = styled(Arrow)`
    transform: translateX(-50%) translateY(-50%) rotate(180deg);
`;

export const Button = styled.button`
    position: relative;
    background-color: #eef4fd;
    border: 1px solid #deebf1;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin: 10px;
    cursor: pointer;
    outline: 0;
    transition: 0.2s ease-in-out;

    &:hover {
        border-color: #1662c6;
    }

`;

export const DateRangeWrapper = styled.div`
    display: flex;
    align-items: center;

    .react-date-picker__wrapper{
        border: 0;
    }

    .react-date-picker__calendar-button{
    }
`;

export const DateRange = styled.div`
    color: #1662c6;
`;
