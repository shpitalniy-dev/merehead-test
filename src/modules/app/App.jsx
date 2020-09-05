import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../../libs/spinner/Spinner.jsx';
import UsersTable from './components/usersTable/UsersTable.jsx';
import AddUserForm from './components/addUserForm/AddUserForm.jsx';
import * as selectors from './selectors';
import * as actions from './actions';
import {
    AppWrapper,
    SpinnerWrapper,
} from './styledComponents';

const App = () => {
    const {
        theme,
        users,
        isLoading,
    } = {
        theme: useSelector(selectors.getStyles),
        users: useSelector(selectors.getUsers),
        isLoading: useSelector(selectors.getIsLoading),
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getUsers());
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <AppWrapper>
                <UsersTable users={users} />
                <AddUserForm />
                {isLoading &&
                    <SpinnerWrapper>
                        <Spinner />
                    </SpinnerWrapper>
                }
                <ToastContainer />
            </AppWrapper>
        </ThemeProvider>
    );
};

export default React.memo(App);