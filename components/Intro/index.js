import React from "react";
import Image from "next/image";

const Intro = () => {
	return (
		<div
			id="intro"
			className="flex w-full flex-col max-w-7xl mt-4 relative"
		>
			<hr />
			<div className="w-full">
				<p className=" ml-4 underline-offset-2 text-xl font-bold underline	">
					Giới thiệu công ty
				</p>
			</div>
			<div className="flex flex-row mx-4 my-2">
				<div className="pl-10 w-3/4">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Quisque fermentum libero dapibus, gravida purus sit
						amet, tempor justo. Morbi ac purus non lectus
						condimentum dictum. Ut id ligula neque. Sed viverra
						feugiat odio, sit amet tristique metus malesuada
						bibendum. Duis accumsan nulla a enim commodo, eu laoreet
						tellus pretium. Nunc vehicula ornare posuere. Cras est
						lacus, efficitur et tempus luctus, euismod vitae turpis.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Etiam viverra lacus quis turpis fringilla, sit amet
						suscipit lorem tristique. Aliquam et tempor sem. Ut
						porttitor nisi in leo sodales, nec laoreet urna
						fermentum. Nam id purus a nunc sodales scelerisque ac et
						nisl. Aliquam erat volutpat.
					</p>
				</div>
				<div className="relative flex flex-col ml-2 w-1/4 shadow-xl">
					<Image
						width="100%"
						height="200"
						src="https://picsum.photos/200"
					/>
				</div>
			</div>
			<hr />
		</div>
	);
};

export default Intro;
