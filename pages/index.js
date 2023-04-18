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
        {/* Model S Section Start */}
				<section id="modelS" class="car_section">
					<img
						src="./images/ModelS.jfif"
						alt="Model S Image"
						className="car_img"
					></img>
					<div className="car_details transform_50">
						<h1 class="model_name"> Model S</h1>
						<h2 class="tag_line">
							{" "}
							Order Online for{" "}
							<span class="underline cursor-pointer">
								Touchles Delivery
							</span>
						</h2>
					</div>
					<div class="car_buttons transform_50">
						<button className="btn">Custom Order</button>
						<button className="btn inventory">Existing Inventory</button>
					</div>

					<a href="#model3">
						<svg
							className="down_svg"
							viewBox="0 0 30 30"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke="var(--tds-icon--fill, #171a20)"
								stroke-width="1.5"
								d="m19.5 12.5-4.5 4-4.5-4"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
				</section>
        {/* Model S Section End */}

        {/* Model 3 Section Start */}
				<section id="model3" class="car_section">
					<img
						src="./images/Model3.jfif"
						alt="Model 3 Image"
						className="car_img"
					></img>
					<div className="car_details transform_50">
						<h1 class="model_name"> Model 3</h1>
						<h2 class="tag_line">
							{" "}
							Order Online for{" "}
							<span class="underline cursor-pointer">
								Touchles Delivery
							</span>
						</h2>
					</div>
					<div class="car_buttons transform_50">
						<button className="btn">Custom Order</button>
						<button className="btn inventory">Existing Inventory</button>
					</div>

					<a href="#modelX">
						<svg
							className="down_svg"
							viewBox="0 0 30 30"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke="var(--tds-icon--fill, #171a20)"
								stroke-width="1.5"
								d="m19.5 12.5-4.5 4-4.5-4"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
				</section>
        {/* Model 3 Section End */}

        {/* Model X Section Start */}
				<section id="modelX" class="car_section">
					<img
						src="./images/ModelX.jfif"
						alt="Model X Image"
						className="car_img"
					></img>
					<div className="car_details transform_50">
						<h1 class="model_name"> Model X</h1>
						<h2 class="tag_line">
							{" "}
							Order Online for{" "}
							<span class="underline cursor-pointer">
								Touchles Delivery
							</span>
						</h2>
					</div>
					<div class="car_buttons transform_50">
						<button className="btn">Custom Order</button>
						<button className="btn inventory">Existing Inventory</button>
					</div>

					<a href="#modelX">
						<svg
							className="down_svg"
							viewBox="0 0 30 30"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke="var(--tds-icon--fill, #171a20)"
								stroke-width="1.5"
								d="m19.5 12.5-4.5 4-4.5-4"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</a>
				</section>
        {/* Model X Section End */}
			</body>
		</>
	);
}
