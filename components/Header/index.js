import React from "react";
import Link from "next/link";
import Logo from "../Logo";

const Header = (props) => {
	return (
		<div className="sticky shadow-md shadow-gray-600 top-0 z-50">
			<div className="w-full bg-gradient-to-r from-teal-500 via-indigo-500 to-fuchsia-500 flex items-center justify-between">
				<Logo className="" />
				<ul className="flex">
					{props.headers.map((i, k) => (
						<li className="mr-6" key={k}>
							<Link href={i.url}>
								<a className="text-slate-100 hover:text-emerald-400">
									{i.name}
								</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
Header.defaultProps = {
	headers: [
		{ name: "Trang chủ", url: "" },
		{ name: "Dự án", url: "" },
		{ name: "Tuyển dụng", url: "" },
		{ name: "Giới thiệu", url: "" },
		{ name: "Liên Hệ", url: "" },
	],
};
export default Header;
