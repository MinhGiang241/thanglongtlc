import React from "react";
import Image from "next/image";

const Project = ({ data }) => {
	return (
		<div className="flex flex-col items-center max-w-7xl w-full">
			<div className="w-full">
				<p className="ml-4 underline-offset-2 text-xl font-bold underline">
					Dự án
				</p>
			</div>
			<div className="max-w-5xl mb-8 mx-10 flex justify-center space-y-5 flex-wrap w-full mb-4">
				{data.map((i, k) => (
					<div
						key={k}
						className={`w-full flex ${
							k % 2 === 0 ? "flex-row" : "flex-row-reverse"
						}  shadow-md shadow-gray-500 bg-gradient-to-r from-yellow-200 to-rose-200`}
					>
						<div key={k} className="flex relative w-80 h-68 grow-0">
							<Image layout="fill" src={i.url} />
						</div>
						<div className="px-10 flex flex-col space-y-10 w-full flex grow-1">
							<div>
								<p className="font-bold text-xl w-full">
									{i.name}
								</p>
							</div>
							<div>
								<p className="text-ms w-full">{i.desc}</p>
							</div>
						</div>
					</div>
				))}
			</div>
			<hr className="w-full" />
		</div>
	);
};

Project.defaultProps = {
	data: [
		{
			name: "Tên công trình",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum libero dapibus, gravida purus sit amet, tempor justo. Morbi ac purus non lectus condimentum dictum. . Ut id ligula neque. Sed viverra feugiat odio, sit amet tristique metus malesuada bibendum. Duis accumsan nulla a enim commodo, eu laoreet tellus pretium. ",
			location: "",
			url: "https://picsum.photos/200",
		},
		{
			name: "Tên công trình",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum libero dapibus, gravida purus sit amet, tempor justo. Morbi ac purus non lectus condimentum dictum. . Ut id ligula neque. Sed viverra feugiat odio, sit amet tristique metus malesuada bibendum. Duis accumsan nulla a enim commodo, eu laoreet tellus pretium. ",
			location: "",
			url: "https://picsum.photos/200",
		},
		{
			name: "Tên công trình",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum libero dapibus, gravida purus sit amet, tempor justo. Morbi ac purus non lectus condimentum dictum. . Ut id ligula neque. Sed viverra feugiat odio, sit amet tristique metus malesuada bibendum. Duis accumsan nulla a enim commodo, eu laoreet tellus pretium. ",
			location: "",
			url: "https://picsum.photos/200",
		},
		{
			name: "Tên công trình",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum libero dapibus, gravida purus sit amet, tempor justo. Morbi ac purus non lectus condimentum dictum. . Ut id ligula neque. Sed viverra feugiat odio, sit amet tristique metus malesuada bibendum. Duis accumsan nulla a enim commodo, eu laoreet tellus pretium. ",
			location: "",
			url: "https://picsum.photos/200",
		},
		{
			name: "Tên công trình",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum libero dapibus, gravida purus sit amet, tempor justo. Morbi ac purus non lectus condimentum dictum. . Ut id ligula neque. Sed viverra feugiat odio, sit amet tristique metus malesuada bibendum. Duis accumsan nulla a enim commodo, eu laoreet tellus pretium. ",
			location: "",
			url: "https://picsum.photos/200",
		},
		{
			name: "Tên công trình",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum libero dapibus, gravida purus sit amet, tempor justo. Morbi ac purus non lectus condimentum dictum. . Ut id ligula neque. Sed viverra feugiat odio, sit amet tristique metus malesuada bibendum. Duis accumsan nulla a enim commodo, eu laoreet tellus pretium. ",
			location: "",
			url: "https://picsum.photos/200",
		},
	],
};

export default Project;
