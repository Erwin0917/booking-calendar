import styled from 'styled-components';

export const HourList = styled.ul`
    display: flex;
    flex-direction: column;
    /*justify-content: center;*/
    align-items: center;
`;

export const HourItem = styled.button`
    background-color: #eef4fd;
    min-width: 250px;
    border: 0;
    padding: 5px;
    font-size: 17px;
    margin: 3px;
    color: #9a9a9a;
    outline: 0;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        background-color: #c3d8f7;
    }
`;
