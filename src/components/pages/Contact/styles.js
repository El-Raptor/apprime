import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { FaTimes } from 'react-icons/fa';

const formWidth = '400px';

export const Icon = styled.div`
    display: none;
    padding-top: 2rem;
    padding-right: 3rem;
    padding-bottom: 1.2rem;
    font-size: 2.5rem;
    background: white;
    cursor: pointer;
    outline: none;

    @media screen and (max-width: 540px) {
        display: flex;
        justify-content: flex-end; 
    }
`;

export const CloseIcon = styled(FaTimes)`
    color: #1B5275;
`;

export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F09949;
    //height: calc(100vh - 185px - 64px);

    form {
        width: ${formWidth};
        height: fit-content;
        box-sizing: border-box;
        margin: 2rem 0;
        padding: 2rem 4rem;  

        .MuiTextField-root {
            margin: 1rem 0;

            input, textarea {
                font-size: 1.5rem;
                padding: 1.5rem 1.5rem;
                line-height: 1.59rem;
            }
        }

        .last-name {
            margin-top: 2rem;
            margin-left: 2rem;
        }

        .first-name {
            margin-top: 2rem;
        }
    }

    @media screen and (max-width: 540px) {
        height: 100%;
        width: 100%;
        form {
            height: 100%;
            width: 100%;
            margin: 0;
            padding: 3rem;
        }
    }
`;

export const FirstNameTextField = styled(TextField)`
    width: calc((${formWidth} - 10em)/2);

    @media screen and (max-width: 540px) {
        width: calc((100% - 2rem)/2);
    }
`;

export const LastNameTextField = styled(TextField)`
    width: calc((${formWidth} - 10rem)/2);
    
    @media screen and (max-width: 540px) {
        width: calc((100% - 2rem)/2);
    }
`;

export const NameWrapper = styled.div`

`;

export const EmailWrapper = styled.div`
    
`;

export const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 2rem;

    h1 {
        color: #979797;
        font-size: 2.6rem;
        font-weight: 400;
    }
`;

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 2rem 0 3rem;
`;