import React from "react";

const Footer = ({ address, email, phone }) => {
	return (
		<footer className="relative flex justify-center w-full h-40 bg-gradient-to-r from-teal-300 via-rose-300 to-indigo-300">
			<div className="w-full flex flex-row-reverse mr-16 max-w-7xl">
				<div className="w-1/4">
					<p className="font-bold">
						Công ty TNHH tư vấn xây dựng và vận tải Thăng Long
					</p>
					<p className="w-full">Địa chỉ: {address}</p>
					<p className="w-full">email: {email}</p>
					<p className="w-full">Điện thoại: {phone}</p>
				</div>
			</div>

			<div className="w-full absolute bottom-0 text-center text-gray-700 p-4">
				<hr />
				<p>© 2021 Copyright: Thanglongtlc</p>
			</div>
		</footer>
	);
};

Footer.defaultProps = {
	email: "example@gmail.com",
	phone: "0123456789",
	address: "Đông Ngạc, Bắc Từ Liêm , Hà Nội",
};

export default Footer;
