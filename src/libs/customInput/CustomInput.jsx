import React from 'react';
import PropTypes from 'prop-types';
import { CustomInputContainer } from './styledComponents';

const CustomInput = props => {
    return (
        <CustomInputContainer
            style={props.style}
        >
            <CustomInputContainer.Label
                htmlFor={props.htmlFor}
                labelText={props.labelText}
                children={props.labelText ? props.labelText : null}
            />
            <CustomInputContainer.Input 
                id={props.id}
                ref={props.inputRef}
                type={props.type}
                onBlur={props.onBlur}
                onClick={props.onClick}
                onFocus={props.onFocus}
                onChange={props.onChange}
                readOnly={props.readOnly}
                maxLength={props.maxLength}
                placeholder={props.placeholder}
                defaultValue={props.value}
            />
            <CustomInputContainer.Output 
                isOutput={props.isOutput}
                children={props.outputText ? props.outputText : null}
            />
        </CustomInputContainer>
    )
}

CustomInput.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.object,
    onBlur: PropTypes.func,
    htmlFor: PropTypes.string,
    onFocus: PropTypes.func,
    onClick: PropTypes.func,
    inputRef: PropTypes.object,
    onChange: PropTypes.func,
    isOutput: PropTypes.bool.isRequired,
    readOnly: PropTypes.bool,
    labelText: PropTypes.string,
    maxLength: PropTypes.number,
    outputText: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
}

export default React.memo(CustomInput);