import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { GiCancel } from 'react-icons/gi';
import { Row } from '../../styledComponents';
import * as actions from '../../../../../../actions';

const EditRow = props => {
    const {
        user,
        isOdd,
        number,
        setEdit,
    } = props;
    
    const refs = {
        desc: useRef(),
        name: useRef(),
        surname: useRef(),
    };

    const dispatch = useDispatch();

    const updateUser = useCallback(id => {
        dispatch(actions.updateUser({ id, refs, setEdit }));
    }, [dispatch, ...Object.values(refs)]);

    return (
        <Row isOdd={isOdd}>
            <Row.Component>
                {number}
            </Row.Component>
            <Row.Component>
                <Row.Input
                    ref={refs.name}
                    type={'text'}
                    maxLength={30}
                    defaultValue={user.name}
                    placeholder={'Enter user name'}
                />
            </Row.Component>
            <Row.Component>
                <Row.Input
                    ref={refs.surname}
                    type={'text'}
                    maxLength={30}
                    defaultValue={user.surname}
                    placeholder={'Enter user surname'}
                />
            </Row.Component>
            <Row.Component>
                <Row.Input
                    ref={refs.desc}
                    type={'text'}
                    maxLength={30}
                    defaultValue={user.desc}
                    placeholder={'Enter user description'}
                />
            </Row.Component>
            <Row.Component style={{ display: 'flex', alignItems: 'center' }}>
                <Row.Icon 
                    style={{ marginRight: '5px' }}
                    onClick={() => updateUser(user.id)}
                >
                    <IoMdCheckmarkCircleOutline size={'20px'} />
                </Row.Icon>
                <Row.Icon onClick={() => setEdit(false)}>
                    <GiCancel size={'20px'} />
                </Row.Icon>
            </Row.Component>
        </Row>
    );
};

EditRow.propTypes = {
    user: PropTypes.object.isRequired,
    isOdd: PropTypes.bool.isRequired,
    number: PropTypes.number.isRequired,
    setEdit: PropTypes.func.isRequired,
};

export default React.memo(EditRow);