import styled from 'styled-components';

export const ButtonElement = styled.button`
    cursor: pointer;
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : 35}px;
    font-weight: 500;
    border: none;
    border-radius: 3px;
    color: ${props => props.theme.buttonColor};
    background: ${props => props.theme.buttonBackground};

    &:hover{
        color: ${props => props.theme.buttonColorHover} !important;
        background: ${props => props.theme.buttonBackgroundHover} !important; 
    }

    &:disabled{
        opacity: .5;
        cursor: not-allowed !important;
    }
`;