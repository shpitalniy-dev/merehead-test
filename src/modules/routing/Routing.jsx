import React from 'react';
import { Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import App from '../app/App.jsx';
import { GlobalStyles } from './styledComponents';

const Routing = props => {
    return (
        <>
            <Router history={props.history}>
                <Route exact path='/' component={App} />
            </Router>
            <GlobalStyles />
        </>
    );
};

Routing.propTypes = {
    history: PropTypes.object.isRequired,
};

export default Routing;