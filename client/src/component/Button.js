import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
	const { children, className, loading } = props;
	return (
		<div className='formElement'>
			<button type='submit' className={className} disabled={loading}>
				{loading ? 'loading....' : children}
			</button>
		</div>
	);
};

Button.propTypes = {
	className: PropTypes.string,
	label: PropTypes.string,
	// handleClick: PropTypes.func.isRequired,
	children: PropTypes.string.isRequired,
	loading: PropTypes.bool,
};

export default Button;
