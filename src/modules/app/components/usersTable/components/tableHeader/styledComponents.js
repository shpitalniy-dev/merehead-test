import styled from 'styled-components';

export const Header = {};

Header.Component = styled.div`
    width: 20%;
    height: 100%;
    padding: 0 10px;
    overflow: hidden;
    box-sizing: border-box;
    line-height: 30px;
    white-space: nowrap;
    border-right: ${props => props.hideBorder ? null : '1px solid lightblue'};
    text-overflow: ellipsis;
`;