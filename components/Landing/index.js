import React from "react";
import Image from "next/image";
import background from "../../assets/img/bg.jpg";

const Landing = () => {
	return (
		<div className="max-w-7xl relative">
			<Image
				placeholder="blur"
				blurDataURL={background.src}
				width="2400px"
				height="1500px"
				src={background.src}
			/>
			<div className="max-w-sm absolute left-12 bottom-20 backdrop-brightness-50 drop-shadow-md bg-white/30">
				<div className="mt-6 mb-6 ml-2 mr-2">
					<p className="text-emerald-300 font-bold text-3xl">
						Công ty TNHH tư vấn xây dựng và vận tải Thăng Long
					</p>
					<p className="text-white font-italic text-xl">
						Công ty TNHH tư vấn xây dựng và vận tải Thăng Long
					</p>
				</div>
			</div>
		</div>
	);
};

export default Landing;
