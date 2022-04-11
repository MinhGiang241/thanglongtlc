import React from "react";
import Landing from "../Landing";
import Name from "../Name";
import Intro from "../Intro";
import Field from "../Field";
import Project from "../Project";
import Contact from "../Contact";

const Container = () => {
	return (
		<div className="w-full flex flex-col items-center">
			<Landing />
			<Name />
			<Intro />
			<Field />
			<Project />
			<Contact />
		</div>
	);
};

export default Container;
