import React from "react";
import Landing from "../Landing";
import Name from "../Name";
import Intro from "../Intro";
import Field from "../Field";

const Container = () => {
	return (
		<div className="w-full flex flex-col items-center">
			<Landing />
			<Name />
			<Intro />
			<Field />
		</div>
	);
};

export default Container;
