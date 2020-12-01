import styled from 'styled-components';
import { TextField } from '@material-ui/core';


const formWidth = '400px';

export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    //height: calc(100vh - 185px - 64px);

    form {
        width: ${formWidth};
        height: fit-content;

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
            margin-left: 2rem;
        }
    }

    @media screen and (max-width: 540px) {
        height: 100%;
        width: 100%;
        form {
            height: 100%;
            width: 100%;
            margin: 0;
            padding-left: 10rem;
        }
    }
`;

export const FirstNameTextField = styled(TextField)`
    width: calc((${formWidth} - 2rem)/2);

    @media screen and (max-width: 540px) {
        width: calc((90% - 2rem)/2);
    }
`;

export const LastNameTextField = styled(TextField)`
    width: calc((${formWidth} - 2rem)/2);
    
    @media screen and (max-width: 540px) {
        width: calc((90% - 2rem)/2);
    }
`;

export const NameWrapper = styled.div`

`;

export const EmailWrapper = styled.div`
    
`;

export const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;

    h3 {
        color: #1B5275;
        font-weight: 300;
    }
`;

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 2rem 0 3rem;
`;