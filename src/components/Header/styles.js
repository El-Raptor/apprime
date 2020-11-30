import styled from 'styled-components';
import { Box } from '@material-ui/core';

export const StyledBox = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5rem 0 5rem;}

    .navbar-logo {
        cursor: pointer;
        width: 155px;
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