import React, { useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import CustomInput from '../../../../libs/customInput/CustomInput.jsx';
import CustomButton from '../../../../libs/customButton/CustomButton.jsx';
import * as actions from '../../actions';
import { FormWrapper } from './styledComponents';

const AddUserForm = () => {
    const refs = {
        desc: useRef(),
        name: useRef(),
        surname: useRef(),
    };

    const dispatch = useDispatch();
    
    const addUser = useCallback(() => {
        dispatch(actions.addUser(refs));
    }, [dispatch, ...Object.values(refs)]);

    return (
        <FormWrapper>
            <CustomInput
                id={'userName'}
                type={'text'}
                htmlFor={'userName'}
                isOutput={true}
                inputRef={refs.name}
                labelText={'User name'}
                maxLength={30}
                outputText={''}
                defaultValue={''}
                placeholder={'Enter user name'}
            />
            <CustomInput
                id={'userSurname'}
                type={'text'}
                htmlFor={'userSurname'}
                isOutput={true}
                inputRef={refs.surname}
                labelText={'User surname'}
                maxLength={30}
                outputText={''}
                defaultValue={''}
                placeholder={'Enter user surname'}
            />
            <CustomInput
                id={'userDesc'}
                type={'text'}
                htmlFor={'userDesc'}
                isOutput={true}
                inputRef={refs.desc}
                labelText={'User description'}
                maxLength={30}
                outputText={''}
                defaultValue={''}
                placeholder={'Enter user description'}
            />
            <CustomButton 
                type={'button'}
                onClick={addUser}
                children={'Add new user'}
            />
        </FormWrapper>
    );
};

export default React.memo(AddUserForm);