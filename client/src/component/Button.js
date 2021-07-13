import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
	const { children, className } = props;
	return (
		<div className='formElement'>
			<button type='submit' className={className}>
				{children}
			</button>
		</div>
	);
};

Button.propTypes = {
	className: PropTypes.string,
	label: PropTypes.string,
	// handleClick: PropTypes.func.isRequired,
	children: PropTypes.string.isRequired,
};

export default Button;
