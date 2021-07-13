import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
	const { label, type } = props;
	return (
		<div className='formElement'>
			<label htnlFor='username'> {label} </label>
			<input type={type} className='textbox' />
		</div>
	);
};

Input.propTypes = {
	label: PropTypes.string,
	type: PropTypes.string,
};

export default Input;
