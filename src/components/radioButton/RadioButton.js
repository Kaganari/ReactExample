import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class RadioButton extends React.Component {
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
		const {label, name, value} = this.props;

		return (
			<label className ='radio-button__label'>
				<input className = 'radio-button__radio' type = 'radio' name = {name} value = {value} />
				{label}
			</label>
		);
	}
}

RadioButton.propTypes = {
	value: PropTypes.string,
	label: PropTypes.string,
	name: PropTypes.string
};