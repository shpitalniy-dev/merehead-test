import styled from 'styled-components';

export const AppWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
`;

export const SpinnerWrapper = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    align-items: center;
    justify-content: center;
`;