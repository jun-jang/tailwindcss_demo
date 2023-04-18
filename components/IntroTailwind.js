export default function IntroTailwind() {
	return (
		<>
			<h1> test </h1>
			<div className="w-1/2 m-6 p-6 bg-purple-100 rounded-xl shadow-md border-y-2 border-purple-900">
				<h1 className="text-3xl font-bold">Tailwind CSS ❤</h1>
				<p className="text-lg font-medium leading-6 text-gray-800">
					Tailwind CSS is basically a utility-first CSS framework for
					rapidly building custom user interfaces. It is a highly
					customizable, low-level CSS framework that gives you all of the
					building blocks you need to build bespoke designs.
				</p>
			</div>
			<br />
			{/* 18. Responsive Design */}
			<button
				className="bg-blue-200 text-black px-4 py-2 m-6 rounded-md 
      text-xl font-semibold transition-all ease-in-out duration-300
      sm:bg-yellow-500 sm:text-white md:bg-purple-400"
			>
				Tailwind CSS - Responsive
			</button>

			<br />
			{/* 19. Hover */}
			<button
				className="bg-blue-200 text-black px-4 py-2 m-6 rounded-md 
      text-xl font-semibold hover:bg-blue-800"
			>
				Tailwind CSS - Hover
			</button>

			<br />
			{/* 23. @apply */}
			<button className="btn">Tailwind CSS - @apply</button>

			<br />
			{/* 23. @layer*/}
			<button className="btn-blue"> Tailwind CSS - @layer </button>
		</>
	);
}
