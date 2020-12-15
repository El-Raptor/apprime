import styled from 'styled-components';

export const Container = styled.section`
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
            transition: 0.3s;

            &:hover {
                transform: translateY(-2px);
            }

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
    @media screen and (max-width: 420px) {
        p {
            &.hero-container-slogan {
                font-size: 3.2rem;
                line-height: 3.289rem;
            }
        }
    }
    @media screen and (max-width: 900px) {
        padding: 0 10rem;
    }
    @media screen and (max-width: 740px) {
        padding: 1.5rem;
    }
`;