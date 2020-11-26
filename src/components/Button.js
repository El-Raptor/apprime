import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const ButtonStyled = styled(Button)`
    background: linear-gradient(to right, #E36C09, #F09949);
    color: white;

    border-radius: ${({ round }) => (round ? '100px' : '0px')};
    font-size: ${({ large }) => (large ? '2rem' : '1.2rem')};
    padding: ${({ large }) => (large ? '.5rem 4rem' : '.2rem 3.2rem')};
    transition: 0.3s;

    &:hover {
        background: linear-gradient(to right, #1B5275, #AEC2E7);
        transform: translateY(-2px)
    }
`;
