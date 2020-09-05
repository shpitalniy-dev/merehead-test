import React from 'react';
import { Header } from './styledComponents';

const TableHeader = () => {
    return (
        <>
            <Header.Component>
                Number
            </Header.Component>
            <Header.Component>
                User name
            </Header.Component>
            <Header.Component>
                User surname
            </Header.Component>
            <Header.Component>
                Description
            </Header.Component>
            <Header.Component hideBorder={true}>
                Edit
            </Header.Component>
        </>
    );
};

export default React.memo(TableHeader);