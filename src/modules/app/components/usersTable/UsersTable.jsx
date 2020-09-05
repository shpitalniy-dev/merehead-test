import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import TableRow from './components/tableRow/TableRow.jsx';
import TableHeader from './components/tableHeader/TableHeader.jsx';
import { TableWrapper } from './styledComponent';
import * as actions from '../../actions';

const UsersTable = props => {
    const { users } = props;

    const dispatch = useDispatch();

    const handleScroll = useCallback(event => {
        const element = event.target;
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            dispatch(actions.getMoreUsers());
        }
    }, [dispatch]);

    return (
        <TableWrapper>
            <TableWrapper.Header>
                <TableHeader />
            </TableWrapper.Header>
            <TableWrapper.Body onScroll={handleScroll}>
                {users.map((user, index) =>
                    <TableRow
                        key={index}
                        user={user}
                        isOdd={index % 2 === 0}
                        number={index + 1}
                    />
                )}
            </TableWrapper.Body>
        </TableWrapper>
    );
};

UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
};

export default React.memo(UsersTable);