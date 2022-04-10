import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>

				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Container />
			<Footer />
		</div>
	);
}