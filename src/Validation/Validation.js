import React from 'react';

const validation = (props) => {
	let validationMsg = 'Text long enough.';

	if(props.inputLength < 5){
		validationMsg = 'Text too short!';
	}
	return (
		<div>
			{validationMsg}
		</div>
	);
};

export default validation;