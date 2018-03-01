import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class InputField extends React.Component {
    
    render() {
        const {label, type, name, placeholder, onChange} = this.props;

        return (
                <label className = 'input-field__label'>{label}
                    <input className = 'input-field__input' type = {type} name = {name} placeholder = {placeholder} onChange = {this.handleChange}/>
                </label>
        );
    }
}

InputField.defaultProps = {
    type: 'text'
};

InputField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};