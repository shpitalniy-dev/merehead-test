import styled from 'styled-components';

export const Row = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    background: ${props => props.isOdd ? 'lightblue' : 'white'};
`;

Row.Component = styled.div`
    width: 20%;
    height: 100%;
    padding: 0 10px;
    overflow: hidden;
    box-sizing: border-box;
    background: transparent;
    white-space: nowrap;
    line-height: 30px;
    text-overflow: ellipsis;
    vertical-align: middle;
`;

Row.Icon = styled.div`
    width: fit-content;
    height: fit-content;
    cursor: pointer;
    opacity: 0.7;
    display: flex;

    &:hover {
        opacity: 1;
    }
`;

Row.Input = styled.input`
    width: 100%;
    height: 100%;
    display: block;
    font-size: 90%;
    font-weight: 400;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid ${props => props.theme.inputBorderColor};

    &:focus{
        border: 1px solid ${props => props.theme.inputBorderColorFocus}; 
    }
`;