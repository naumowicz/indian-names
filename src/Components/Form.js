import React from 'react';

const Form = ({ parentCallback }) => {
	const inputRef = React.useRef(null);
	const clearField = () => {
		inputRef.current.value = '';
	};

	const checkUp = (e) => {
		e.preventDefault();
		if (inputRef.current.value === '') {
			return;
		}
		// console.log(inputRef.current.value);
		parentCallback(inputRef.current.value);
	};

	return (
		<div className="form">
			<div>
				<form onSubmit={checkUp}>
					<input ref={inputRef} placeholder="Enter full name"></input>
					<input type="submit" value="Check" />
				</form>
			</div>
			<div>
				<button onClick={clearField}>Clear</button>
			</div>
		</div>
	);
};

export default Form;
