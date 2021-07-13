import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
	const { label, type, value, name, onChange } = props;
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
		</div>
	);
};

Input.propTypes = {
	label: PropTypes.string,
	type: PropTypes.string,
	value: PropTypes.string,
	name: PropTypes.string,
	onChange: PropTypes.func.isRequired,
};

export default Input;
