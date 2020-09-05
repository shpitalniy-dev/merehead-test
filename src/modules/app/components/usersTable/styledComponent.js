import styled from 'styled-components';

export const TableWrapper = styled.div`
    width: 800px;
    height: 300px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
`;

TableWrapper.Header = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    box-sizing: border-box;
`;

TableWrapper.Body = styled.div`
    flex: 1;
    overflow: auto;
    flex-direction: column;
`;