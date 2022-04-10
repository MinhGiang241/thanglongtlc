import React from "react";
import Image from "next/image";

const Field = ({ data }) => {
	return (
		<div className="flex flex-col justify-between w-full max-w-7xl ">
			<div className="w-full">
				<p className="ml-4 underline-offset-2 text-xl font-bold underline">
					Lĩnh vực
				</p>
			</div>
			<div className="flex mx-4 my-4 w-full space-x-5">
				{data.map((i, k) => (
					<div
						key={k}
						className="shadow-md shadow-gray-500 w-1/4 bg-gradient-to-r from-teal-300 to-indigo-300"
					>
						<div className="h-16 px-2 py-2">
							<p className=" font-bold text-slate-800">
								{i.title}
							</p>
						</div>

						<div className="relative mx-2 h-52 shadow-sm shadow-gray-500">
							<Image layout="fill" src={i.url} />
						</div>
						<div className="px-2 py-2">
							<p className="text-slate-800 ">{i.desc}</p>
						</div>
					</div>
				))}
			</div>
			<hr />
		</div>
	);
};

Field.defaultProps = {
	data: [
		{
			title: "Thiết kế thi công các công trình hạ tầng giao thông",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum libero dapibus, gravida purus sit amet, tempor justo. Morbi ac purus non lectus condimentum dictum. ",
			url: "https://picsum.photos/200",
		},
		{
			title: "Thiết kế thi công các công trình dân dụng ",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum libero dapibus, gravida purus sit amet, tempor justo. Morbi ac purus non lectus condimentum dictum. ",
			url: "https://picsum.photos/200",
		},
		{
			title: "Thiết kế thi công nội ngoại thất",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum libero dapibus, gravida purus sit amet, tempor justo. Morbi ac purus non lectus condimentum dictum. ",
			url: "https://picsum.photos/200",
		},
		{
			title: "Cung cấp ,buôn bán vật liệu xây dựng",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum libero dapibus, gravida purus sit amet, tempor justo. Morbi ac purus non lectus condimentum dictum. ",
			url: "https://picsum.photos/200",
		},
	],
};

export default Field;
