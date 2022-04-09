import React from "react";
import logo from "../../assets/img/logo.png";
import Image from "next/image";

const Logo = () => {
	return (
		<div >
			<Image width="60px" height="50px" src={logo.src} />
		</div>
	);
};

export default Logo;
