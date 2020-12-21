import styled from 'styled-components';

export const SolutionsContainer = styled.section`
    position: relative;
    z-index: 1;
    width: 100%;
    height: 630px;

    display: flex;
    flex-direction: column;

    scroll-margin-top: 6rem;

    @media screen and (max-width: 580px) {
        height: fit-content;
    }
`;

export const HeroContainer = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: url('images/mobile.jpg') center;
    opacity: .12;
`;

export const SolutionsContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 25rem;
    
    h1 {
        font-size: 3.6rem;
        font-weight: bold;
    }

    > p {
        text-align: center;
        margin-top: 3rem;
        font-size: 2.8rem;        
    }

    @media screen and (max-width: 1260px) {
        > p {
            font-size: 2.4rem;        
        }
    }
    @media screen and (max-width: 1040px) { padding: 5rem 15rem; }
    @media screen and (max-width: 860px) { padding: 5rem 5rem; }
    @media screen and (max-width: 600px) {
        > p { text-align: left; }
    }
    @media screen and (max-width: 500px) {
        > p { font-size: 1.8rem; }
    }
`;

export const SolutionsBar = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 244px;
    background-color: rgba(227,108,09,1);
    z-index: -2;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media screen and (max-width: 580px) {
        position: static;
        bottom: auto;
        z-index: auto;
        height: fit-content;
        flex-direction: column;
    }
    /*@media screen and (max-width: 340px) {
        height: 20px;
        //display: none;
    }*/
`;

export const Assets = styled.div`
    margin: auto;
    width: 14rem;
    height: 18rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    p {
        color: white;
        font-size: 1.3rem;
        font-weight: 300;
        text-align: center;
    }

    @media screen and (max-width: 890px) {
        width: 7rem;
        height: 9rem;

        p { font-size: 1rem; }

        img { width: 80px; }
    }

    @media screen and (max-width: 580px) {
        width: 60%;
        height: fit-content;
        p { font-size: 1.8rem }
        img { width: 18em }
        margin-top: 3.5em;
        margin-bottom: 3.5em;
    }
`;