"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="w-full fixed top-0 left-0 z-50">
			<div className="w-full flex items-center justify-center text-center relative px-10 py-8 bg-transparent lg:hidden">
				<button
					className="absolute left-[20px] w-6 h-6"
					onClick={toggleMenu}
					aria-label="Toggle menu"
				>
					<Image
						src="/images/icon-hamburger.svg"
						width={24}
						height={24}
						alt="hamburger icon open"
						className="object-cover"
					/>
				</button>

				<h2 className="text-3xl leading-none font-semibold text-white">room</h2>
			</div>

			{/* Full-screen overlay */}
			<div
				className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 lg:hidden ${
					isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
				}`}
				onClick={toggleMenu}
				aria-hidden="true"
			></div>

			{/* Mobile menu */}
			<div
				className={`fixed inset-x-0 top-0 bg-white transform transition-transform duration-300 ease-in-out lg:hidden ${
					isMenuOpen ? "translate-y-0" : "-translate-y-full"
				}`}
			>
				<div className="w-full py-8 flex items-center justify-between px-6">
					<button
						className="w-6 h-4 relative"
						onClick={toggleMenu}
						aria-label="Close menu"
					>
						<Image
							src="/images/icon-close.svg"
							width={20}
							height={16}
							alt="close icon"
							className="object-contain"
						/>
					</button>

					<nav className="flex items-center gap-4">
						<Link
							href="#"
							className="text-[12px] font-semibold text-black hover:underline focus:outline-none focus:ring-2 focus:ring-black"
						>
							home
						</Link>
						<Link
							href="#"
							className="text-[12px] font-semibold text-black hover:underline focus:outline-none focus:ring-2 focus:ring-black"
						>
							shop
						</Link>
						<Link
							href="#"
							className="text-[12px] font-semibold text-black hover:underline focus:outline-none focus:ring-2 focus:ring-black"
						>
							about
						</Link>
						<Link
							href="#"
							className="text-[12px] font-semibold text-black hover:underline focus:outline-none focus:ring-2 focus:ring-black"
						>
							contact
						</Link>
					</nav>
				</div>
			</div>

			<div className="lg:flex items-center gap-16 px-10 py-8 hidden">
				<h2 className="text-3xl leading-none font-semibold text-white">room</h2>

				<nav className="flex items-center gap-4">
					<Link
						href="#"
						className="text-[16px] font-semibold text-white border-white transition-transform hover:duration-800 ease-in-out hover:transform hover:border-b-2 focus:outline-none focus:ring-2 focus:ring-black "
					>
						home
					</Link>
					<Link
						href="#"
						className="text-[16px] font-semibold text-white border-white transition-transform hover:duration-800 ease-in-out hover:transform hover:border-b-2 focus:outline-none focus:ring-2 focus:ring-black "
					>
						shop
					</Link>
					<Link
						href="#"
						className="text-[16px] font-semibold text-white border-white transition-transform hover:duration-800 ease-in-out hover:transform hover:border-b-2 focus:outline-none focus:ring-2 focus:ring-black "
					>
						about
					</Link>
					<Link
						href="#"
						className="text-[16px] font-semibold text-white border-white transition-transform hover:duration-800 ease-in-out hover:transform hover:border-b-2 focus:outline-none focus:ring-2 focus:ring-black "
					>
						contact
					</Link>
				</nav>
			</div>
		</nav>
	);
};

export default Nav;
