import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { FaBars } from 'react-icons/fa';

export const StyledBox = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5rem;

    .navbar-logo {
        cursor: pointer;
        width: 155px;

    }
    @media screen and (max-width: 890px) {
        .navbar-logo { width:120px; }
        padding: 0 2rem;  
    }
`;

export const LinksList = styled.div`
    > a {
        margin: 0 1em;
        text-decoration: none;
        cursor: pointer;
        font-family: "Roboto";
        font-size: 1.6rem;
        
        &:link, &:visited {
            color: #1B5275;
        }

        &:hover {
            color: #E36C09;
        }
    }

    @media screen and (max-width: 890px) {
        display: none;
    }
`;

export const HamburguerMenu = styled(FaBars)`
    display: none;
    color: #1B5275;

    @media screen and (max-width: 890px) {
        display: block;
        font-size: 2.5rem;
        cursor: pointer;
    }
`;