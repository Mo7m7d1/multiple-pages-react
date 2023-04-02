import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className=" bg-white shadow-md w-full relative ">
			<div className="container flex justify-between items-center flex-wrap relative mx-20">
				<Link
					to="/home"
					className="text-main_color font-bold text-3xl h-[72px] flex justify-center items-center hover:scale-95"
				>
					Almo
				</Link>
				<button
					className="flex items-center px-3 py-2 border rounded text-main_color border-main_color hover:text-white hover:bg-main_color mt-4 md:hidden"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				>
					<svg className="h-3 w-3 fill-current" viewBox="0 0 20 20">
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
				<ul
					className={`${
						isMenuOpen ? "flex" : "hidden"
					} md:flex md:items-center w-full md:w-auto`}
				>
					<li className="mx-3">
						<Link
							to="/home"
							className="block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-main_color transition-all mr-4"
						>
							Home
						</Link>
					</li>
					<li className="mx-3">
						<Link
							to="/articles"
							className="block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-main_color transition-all mr-4"
						>
							Articles
						</Link>
					</li>
					<li className="mx-3">
						<Link
							to="/gallery"
							className="block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-main_color transition-all mr-4"
						>
							Gallery
						</Link>
					</li>
					<li className="mx-3">
						<Link
							to="/features"
							className="block mt-4 md:inline-block md:mt-0 text-gray-600 hover:text-main_color transition-all mr-4"
						>
							Features
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
