import React, { useState } from "react";

const UseStateBasics = () => {
	let [value, setCount] = useState("Forward"); //destructure the returned array by useState to assign the value and the function to two variables

	//create the function that we will invoke when clicking the button
	let changeStatement = () => {
		if (value === "Forward") {
			setCount("Backward");
		} else {
			setCount("Forward");
		}
	};

	return (
		<React.Fragment>
			<h4>{value}</h4>
			<button className='btn' onClick={changeStatement}>
				Click to reduce
			</button>
		</React.Fragment>
	);
};

export default UseStateBasics;
