import React from "react";
import Link from "next/Link";
import Logo from "../Logo";

const Header = (props) => {
	return (
		<div className="">
			<div className="w-full fixed bg-gradient-to-r from-teal-500 via-indigo-500 to-fuchsia-500 flex items-center justify-between">
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
