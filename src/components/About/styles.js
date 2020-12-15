import styled from 'styled-components';

export const AboutContainer = styled.section`
display: flex;
flex-flow: row nowrap;

scroll-margin-top: 6rem;
//scroll-snap-margin-top: 6rem;

padding: 5rem 7.4rem;

@media screen and (max-width: 1250px) {
    flex-direction: column;
    align-items: center;
}

@media screen and (max-width: 500px) {
    padding: 5rem;
}

@media screen and (max-width: 450px) {
    padding: 5rem 3.5rem;
}
`;

export const AboutWrapper = styled.div`
display: flex;
flex-direction: column;

h1 {
    font-size: 3.6rem;
    font-weight: bold;
}

> p {
    margin-top: 3rem;
    margin-right: 6rem;

    font-size: 1.8rem;
    font-weight: 300;
}

@media screen and (max-width: 1250px) {
    align-items: center;
    
    p {
        margin-right:0;
        margin-bottom: 3rem;
        text-align: center;
    }
}

@media screen and (max-width: 500px) {      
    h1 {
        font-size: 2.4rem;
    }
}

@media screen and (max-width: 600px) {
   p { text-align: left; }
}

`;

export const ImgWrapper = styled.div`
img {
    width: 428px;
    height: 100%;
    border-radius: 35px;

    box-shadow: 4px 7px 10px 0px rgba(0,0,0,0.2);

    @media screen and (max-width: 570px) {
        width: 100%;
    }
}
`;