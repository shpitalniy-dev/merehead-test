import styled from 'styled-components';

export const CustomInputContainer = styled.div`
    width: 100%;
    height: 80px;
    box-sizing: border-box;
`;

CustomInputContainer.Label = styled.label`
    width: 100%;
    height: 25%;
    font-weight: 400;
    color: ${props => props.theme.labelColor};
    display: ${props => props.labelText ? 'block' : 'none'};
    box-sizing: border-box;
`;

CustomInputContainer.Input = styled.input`
    width: 100%;
    height: 50%;
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

CustomInputContainer.Output = styled.output`
    display: ${props => props.isOutput ? 'block' : 'none'};
    box-sizing: border-box;
    width: 100%;
    height: 25%;
    color: ${props => props.theme.errorColor};
    font-size: 75%;
`;
