import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import IntroTailwind from "@/components/IntroTailwind";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title> Electric cars, Solar & Clean </title>
				<link
					rel="shortcut icon"
					href="./images/favicon.ico"
					type="image/x-icon"
				></link>
			</Head>
			{/* <IntroTailwind /> */}
		</>
	);
}
