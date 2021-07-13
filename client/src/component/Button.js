import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
	return (
		<div className='form_element'>
			<button onClick={props.handleClick} className={props.className}>
				{props.children}
			</button>
		</div>
	);
};

Button.propTypes = {
	className: PropTypes.string,
	label: PropTypes.string,
	handleClick: PropTypes.func.isRequired,
};

export default Button;
