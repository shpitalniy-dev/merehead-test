import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UsualRow from './components/usualRow/UsualRow.jsx';
import EditRow from './components/editRow/EditRow.jsx';

const TableRow = props => {
    const {
        user,
        isOdd,
        number,
    } = props;

    const [isEdit, setEdit] = useState(false);

    if (isEdit) {
        return (
            <EditRow
                user={user}
                isOdd={isOdd}
                number={number}
                setEdit={setEdit}
            />
        );
    }

    return (
        <UsualRow
            user={user}
            isOdd={isOdd}
            number={number}
            setEdit={setEdit}
        />
    );
};

TableRow.propTypes = {
    user: PropTypes.object.isRequired,
    isOdd: PropTypes.bool.isRequired,
    number: PropTypes.number.isRequired,
};

export default React.memo(TableRow);