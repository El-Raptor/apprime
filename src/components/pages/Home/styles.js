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

    .hero-container {
        position: absolute;
        z-index: -1;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: url('images/apprime-integration.png') center;
        opacity: .15;
    }
    
    .hero-container-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 35em 0 35em;
        
        > p {
            color: white;
            text-align: center;

            &.hero-container-slogan {
                font-size: 6.4rem;
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
    }
`;

export const AboutContainer = styled.section`
    display: flex;
    flex-flow: row nowrap;

    padding: 5rem 7.4rem 5rem 7.4rem;

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
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

        > img {
            width: 428px;
            height: 100%;
            border-radius: 35px
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
    justify-content: space-between;
    
    .solutions-bar {
        width: 100%;
        height: 244px;
        background-color: rgba(227,108,09,.5);

        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

        .solutions {
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
        }

    }
    .hero-container-2 {
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
    }
    
    .solutions-container-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5rem 25rem 0 25rem;
        
        h1 {
            font-size: 3.6rem;
            font-weight: bold;
        }

        > p {
            text-align: center;
            margin-top: 3rem;
            font-size: 2.8rem;        
        }

    }
`;

export const PartnersContainer = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10rem 0 10rem 0;

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