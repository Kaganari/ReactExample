import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        const {label, type, name, placeholder} = this.props;

        return (
                <label className = 'input-form__label'>{label}
                    <input className = 'input-form__input' type = {type} name = {name} placeholder = {placeholder} value = {this.state.value} onChange = {this.handleChange}/>
                </label>
        );
    }
}

InputForm.defaultProps = {
    type: 'text'
};

InputForm.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string
};