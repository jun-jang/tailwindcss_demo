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

			<body>
				<header className="navbar">
					{/* Logo */}
					<img src="./images/tesla.svg" alt="tesla logo" className="h-6" />
					{/* Nav Links */}
					<div>
						<a href="#modelS" className="nav_link">
							Model S
						</a>
						<a href="#model3" className="nav_link">
							Model 3
						</a>
						<a href="#modelX" className="nav_link">
							Model X
						</a>
						<a href="#modelY" className="nav_link">
							Model Y
						</a>
						<a href="#solarRoof" className="nav_link">
							Solar Roof
						</a>
						<a href="#solarPanels" className="nav_link">
							Solar Panels
						</a>
					</div>
					{/* Ext Links */}
					<div>
						<a href="#shop" className="nav_link">
							{" "}
							Shop{" "}
						</a>
						<a href="#account" className="nav_link">
							{" "}
							Account
						</a>
						<a href="#menu" className="nav_link">
							{" "}
							Menu
						</a>
					</div>
				</header>
			</body>
		</>
	);
}
