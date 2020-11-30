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

    @media screen and (max-width: 910px) {
        flex-direction: column;
    }
`;

export const FooterWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const FooterInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
`;

export const FooterLogo = styled.img`
    cursor: pointer;
    width: 128px;
`;

export const LogoWrapper = styled.div`
    position: absolute;
    left: 1rem;
    //height: 100%;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 910px) {
        position: static;
        margin-top: 1.5rem;
    }
`;

export const ContactWrapper = styled.div`
    display: inline-block;

    #mail {
        margin-left: 1rem;
    }
`;

export const FooterLink = styled.a`
    text-decoration: none;
    color: #1B5275;
    font-family: "Roboto";
    font-size: 1.6rem;
    font-weight: 300;

    margin-left: .5rem;

    @media screen and (max-width: 640px) {
        font-size: 1.3rem;
    }
`;

export const AddressWrapper = styled.div`
    margin: 0 2rem;
    display: inline-block;
    text-align: center;
`;

export const ReservedRights = styled.span`
    color: #858585;
    font-family: "Roboto";
    font-size: 1.2rem;
    font-weight: 300;
`;