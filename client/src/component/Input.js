import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
	const { label, type, value, name, onChange, errorText } = props;
	return (
		<div className='formElement'>
			<label htmlFor={name}> {label} </label>
			<input
				type={type}
				onChange={onChange}
				className='textbox'
				value={value}
				name={name}
			/>
			<span> {errorText && errorText} </span>
		</div>
	);
};

Input.propTypes = {
	label: PropTypes.string,
	type: PropTypes.string,
	value: PropTypes.string,
	name: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	errorText: PropTypes.string,
};

export default Input;
