import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import BeatLoader from 'react-spinners/BeatLoader';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = props => {
    return (
        <div>
            <BeatLoader
                css={override}
                size={props.size || 5}
                color={'#000'}
                loading={true}
            />
        </div>
    );
}

Spinner.propTypes = {
    size: PropTypes.number,
}

export default Spinner;