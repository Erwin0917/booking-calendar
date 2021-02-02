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
    width: 15px;
`;

export const ArrowBack = styled(Arrow)`
    transform: rotate(180deg);
`;
