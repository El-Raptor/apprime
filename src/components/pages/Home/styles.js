import styled from 'styled-components';

export const HeroContainer = styled.section`
    position: relative;
    z-index: 1;
    width: 100%;
    height: 600px;
    background-color: #F09949;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 1010px) {
        height: 400px;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: url('images/apprime-integration.png') center;
    background-size: cover;
    opacity: .15;
`;

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 35em 0 35em;
    
    > p {
        color: white;
        text-align: center;

        &.hero-container-slogan {
            font-size: 6.4rem;
            line-height: 6.489rem;
            font-weight: bold;
        }

        &.hero-container-descr {
            margin-top: .5em;
            font-size: 2.4rem;
        }
    }

    > a { 
        text-decoration: none;
        > button {
            margin-top: 2em;
            width: fit-content;
            padding: .65em;
            
            font-size: 2rem;

            box-shadow: 1px 3px 4px 0px rgba(0,0,0,0.2);
        }
    }

    @media screen and (max-width: 1193px) {
        padding: 0 25em;
    }
    @media screen and (max-width: 1010px) {
        p {
            &.hero-container-slogan {
                font-size: 4.8rem;
                line-height: 4.889rem;
            }

            &.hero-container-descr {
                font-size: 1.8rem;
            }
        }
    }
    @media screen and (max-width: 900px) {
        padding: 0 10rem;
    }
    @media screen and (max-width: 740px) {
        padding: 0;
    }
`;

export const AboutContainer = styled.section`
    display: flex;
    flex-flow: row nowrap;

    scroll-margin-top: 6rem;
    //scroll-snap-margin-top: 6rem;

    padding: 5rem 7.4rem 5rem 7.4rem;

    @media screen and (max-width: 1250px) {
        flex-direction: column;
        align-items: center;
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

        p {
            font-size: 1.3rem;
        }
    }

    @media screen and (max-width: 480px) {   
        p {
            font-size: .9rem;
        }
    }

`;

export const ImgWrapper = styled.div`
    img {
        width: 428px;
        height: 100%;
        border-radius: 35px;

        box-shadow: 4px 7px 10px 0px rgba(0,0,0,0.2);

        @media screen and (max-width: 570px) {
            width: 35rem;
        }
    }
`;

export const SolutionsContainer = styled.section`
    position: relative;
    z-index: 1;
    width: 100%;
    height: 630px;

    display: flex;
    flex-direction: column;

    scroll-margin-top: 6rem;

    @media screen and (max-width: 580px) {
        height: 500px;
    }
`;

export const HeroBg2 = styled.div`
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
    @media screen and (max-width: 1040px) {
        padding: 5rem 15rem;
    }
    @media screen and (max-width: 860px) {
        padding: 5rem 5rem;
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
        height: 50px;
        //display: none;
    }
`;

export const Solutions = styled.div`
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

        p {        
            font-size: 1rem;
        }

        img {
            width: 80px;
        }
    }

    @media screen and (max-width: 580px) {
        display: none;
    }
`;

export const PartnersContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10rem 0 10rem 0;

    scroll-margin-top: 6rem;

    h1 {
        font-size: 3.6rem;
        font-weight: bold;
        margin-bottom: 5rem;
    }

    .partners-container {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;

        .partners-logo {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 5rem;
            
            width: 208px;
            height: 124px;
            border-radius: 40px;
            background-color: white;
        }
    }
`;