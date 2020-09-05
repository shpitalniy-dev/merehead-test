import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Row } from '../../styledComponents';
import * as actions from '../../../../../../actions'; 

const UsualRow = props => {
    const {
        user,
        isOdd,
        number,
        setEdit,
    } = props;

    const dispatch = useDispatch();

    const deleteUser = useCallback(id => {
        dispatch(actions.deleteUser(id));
    }, [dispatch]);

    return (
        <Row isOdd={isOdd}>
            <Row.Component>
                {number}
            </Row.Component>
            <Row.Component>
                {user.name}
            </Row.Component>
            <Row.Component>
                {user.surname}
            </Row.Component>
            <Row.Component>
                {user.desc}
            </Row.Component>
            <Row.Component style={{ display: 'flex', alignItems: 'center' }}>
                <Row.Icon 
                    style={{ marginRight: '5px' }}
                    onClick={() => setEdit(true)}
                >
                    <AiOutlineEdit size={'20px'} />
                </Row.Icon>
                <Row.Icon onClick={() => deleteUser(user.id)}>
                    <RiDeleteBin5Line size={'20px'} />
                </Row.Icon>
            </Row.Component>
        </Row>
    );
};

UsualRow.propTypes = {
    user: PropTypes.object.isRequired,
    isOdd: PropTypes.bool.isRequired,
    number: PropTypes.number.isRequired,
    setEdit: PropTypes.func.isRequired,
};

export default React.memo(UsualRow);