import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class CheckBox extends React.Component {
    
    render() {
        const {label, name} = this.props;

        return (
            <label className = 'check-box__label'>{label}
                <input className = 'check-box__input' type = 'checkbox' name = {name}/>
            </label>
        );
    }
}


InputForm.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string
};