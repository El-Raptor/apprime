import styled from 'styled-components';

const handleSize = size => {
    switch (size) {
        case "large":
            return ".7rem 4rem";
        case "small":
            return ".2rem 3.2rem";
        case "fullWidth":
            return ".7rem 4rem";
        default:
            return ".2rem 3.2rem";
    }
}

const handleFontSize = size => {
    switch (size) {
        case "large":
            return "2.4rem";
        case "small":
            return "1.2rem";
        case "fullWidth":
            return "2.4rem";
        default:
            return "1.2rem";
    }
}

const handleWidth = size => {
    switch (size) {
        case "large":
            return "auto";
        case "small":
            return "auto";
        case "fullWidth":
            return "100%";
        default:
            return "auto";
    }
}

const ButtonStyled = styled.button`
    background: linear-gradient(to right, #E36C09, #F09949);
    color: white;
    box-shadow: ${({ elevation }) => (elevation ? '1px 3px 4px 0px rgba(0,0,0,0.2)' : 'none')};
    border: none;
    border-radius: ${({ round }) => (round ? '100px' : '4px')};
    padding: ${({ size }) => handleSize(size)};
    width: ${({ size }) => handleWidth(size)};
    font-size: ${({ size }) => handleFontSize(size)};  
    font-family: 'Roboto';
    letter-spacing: 0.02857em;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background: linear-gradient(to right, #AD5309, #C47D3B);
        transform: translateY(-2px)
    }

    &:active { outline: 0; }
`;

export default ButtonStyled;