import styled from 'styled-components';

export const HourList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HourItem = styled.button<{isBooked?: boolean}>`
    background-color: ${({ isBooked }): string => isBooked === true ? 'transparent' : '#eef4fd '};
    min-width: 250px;
    border: 0;
    padding: 5px;
    font-size: 17px;
    margin: 3px;
    color: ${({ isBooked }): string => isBooked === true ? '#e0dddd' : '#9a9a9a '};
    outline: 0;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    text-decoration: ${({ isBooked }): string => isBooked === true ? 'line-through' : 'initial '};

    &:hover {
        background-color: ${({ isBooked }): string => isBooked === true ? '#f9f9f9' : '#c3d8f7 '};
    }
`;

export const SelectedDay = styled.h2`
    text-align: center;
`;
