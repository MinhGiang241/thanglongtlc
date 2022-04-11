import React from "react";

const Contact = ({ email, phone, address }) => {
	return (
		<div className="flex flex-col max-w-7xl w-full mb-8">
			<div className="w-full ">
				<p className="ml-4 underline-offset-2 text-xl font-bold underline">
					Liên Hệ
				</p>
			</div>
			<div className="w-full flex flex-row ">
				<div className="ml-4 mt-20 flex flex-col w-1/2">
					<p className="w-full">Địa chỉ: {address}</p>
					<p className="w-full">email: {email}</p>
					<p className="w-full">Điện thoại: {phone}</p>
				</div>
				<div className="w-1/2">
					<iframe
						width="100%"
						height="300px"
						src="https://www.google.com/maps/embed/v1/view?key=AIzaSyCW2rD1iN9Jt7LP0N5R4t2NE5L9QME1bFg&center=21.0894303,105.7855476&zoom=19"
						allowfullscreen
					></iframe>
				</div>
			</div>
		</div>
	);
};

Contact.defaultProps = {
	email: "example@gmail.com",
	phone: "0123456789",
	address: "Đông Ngạc, Bắc Từ Liêm , Hà Nội",
};

export default Contact;
