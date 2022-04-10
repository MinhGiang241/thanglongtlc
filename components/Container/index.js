import React from "react";
import Landing from "../Landing";
import Name from "../Name"

const Container = () => {
	return (
		<div className="w-full flex flex-col items-center">
			<Landing />
			<Name/>
		</div>
	);
};

export default Container;
