import React from "react";
import Landing from "../Landing";
import Name from "../Name";
import Intro from "../Intro";
import Field from "../Field";
import Project from "../Project"

const Container = () => {
	return (
		<div className="w-full flex flex-col items-center">
			<Landing />
			<Name />
			<Intro />
			<Field />
			<Project/>
		</div>
	);
};

export default Container;
