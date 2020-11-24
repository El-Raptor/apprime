import styled from 'styled-components';
import { Box } from '@material-ui/core';

export const StyledBox = styled(Box)`
    display: flex;
    align-items: center;
    height: 185px;
    background-color: #DBDBDB;
    position: static;
    width: 100%;
    left: 0;
    bottom: 0;

    .footer-logo {
        cursor: pointer;
        width: 128px;
    }

    .footer-info {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 100%;
    }

    div {
        display: inline-block;
        a {
            text-decoration: none;
            color: #1B5275;
            font-family: "Roboto";
            font-size: 1.6rem;
            font-weight: 300;

            margin-left: .5rem;

        }

            #mail {
                margin-left: 2em;
            }
        span {
            color: #858585;
            font-family: "Roboto";
            font-size: 1.2rem;
            font-weight: 300;
        }
    }
`;