import styled from 'styled-components';

export const DaysListWrapper = styled.ul`
    display: flex;
    justify-content: center;
`;

export const DayItem = styled.li`
    border: 1px solid #deebf1;
    border-radius: 4px;
    padding: 5px;
    background-color: #eef4fd;
    color: #1662c6;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        border-color: #1662c6;
    }
`;

export const DayItemWrapper = styled.div`
    margin: 10px;
    text-align: center;

    span {
        font-size: 12px;
        text-transform: capitalize;
        color: #93a2a9;
    }
`;
