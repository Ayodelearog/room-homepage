"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isDesktop, setIsDesktop] = useState(false);

	const mobileSlides = [
		"/images/mobile-image-hero-1.jpg",
		"/images/mobile-image-hero-2.jpg",
		"/images/mobile-image-hero-3.jpg",
	];

	const desktopSlides = [
		"/images/desktop-image-hero-1.jpg",
		"/images/desktop-image-hero-2.jpg",
		"/images/desktop-image-hero-3.jpg",
	];

	useEffect(() => {
		const checkScreenSize = () => {
			setIsDesktop(window.innerWidth >= 1440);
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		return () => window.removeEventListener("resize", checkScreenSize);
	}, []);

	const slides = isDesktop ? desktopSlides : mobileSlides;

	const nextSlide = useCallback(() => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	}, [slides.length]);

	const prevSlide = useCallback(() => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	}, [slides.length]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft") {
				prevSlide();
			} else if (e.key === "ArrowRight") {
				nextSlide();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [nextSlide, prevSlide]);

	return (
		<>
			<div
				className="w-full h-[45vh] relative  lg:hidden"
				role="region"
				aria-roledescription="carousel"
				aria-label="Hero Images"
			>
				<div className="w-full h-full relative overflow-hidden">
					{slides.map((slide, index) => (
						<div
							key={slide}
							role="group"
							aria-roledescription="slide"
							aria-label={`Slide ${index + 1} of ${slides.length}`}
							aria-hidden={index !== currentSlide}
						>
							<Image
								src={slide}
								fill
								alt={`hero image ${index + 1}`}
								className={`object-cover transition-opacity duration-500 ${
									index === currentSlide ? "opacity-100" : "opacity-0"
								}`}
								priority={index === 0}
							/>
						</div>
					))}
				</div>

				<div className="absolute flex bottom-0 right-0 ">
					<button
						onClick={prevSlide}
						className="bg-black text-white p-4 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white flex items-center justify-center "
						aria-label="Previous slide"
					>
						<div className="w-6 h-6">
							<Image
								src="/images/icon-angle-left.svg"
								height={14}
								width={14}
								alt="icon caret left"
								className="object-contain"
							/>
						</div>
					</button>

					<button
						onClick={nextSlide}
						className="bg-black text-white p-4 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white flex items-center justify-center"
						aria-label="Next slide"
					>
						<div className="w-6 h-6">
							<Image
								src="/images/icon-angle-right.svg"
								height={14}
								width={14}
								alt="icon caret right"
								className="object-contain"
							/>
						</div>
					</button>
				</div>

				<div className="sr-only" aria-live="polite">
					Showing slide {currentSlide + 1} of {slides.length}
				</div>
			</div>

			{/* desktop screen */}
			<div className="w-full h-fit md:hidden lg:block">
				<div
					className="flex w-full h-[66vh] overflow-hidden "
					role="region"
					aria-roledescription="carousel"
					aria-label="Hero Images"
				>
					<div className="w-[65%] h-full relative ">
						{slides.map((slide, index) => (
							<div
								key={slide}
								role="group"
								aria-roledescription="slide"
								aria-label={`Slide ${index + 1} of ${slides.length}`}
								aria-hidden={index !== currentSlide}
								className="w-full h-full"
							>
								<Image
									src={slide}
									fill
									alt={`hero image ${index + 1}`}
									className={`object-cover transition-opacity duration-500 ${
										index === currentSlide ? "opacity-100" : "opacity-0"
									}`}
									priority={index === 0}
								/>
							</div>
						))}
					</div>

					<div className="w-[35%] relative py-20 px-20 text-left font-spartan ">
						<h1 className="text-3xl font-bold mb-4">
							Discover innovative ways to decorate
						</h1>
						<p className="text-[14px] font-semibold text-primary-dark-gray ">
							We provide unmatched quality, comfort, and style for property
							owners across the country. Our experts combine form and function
							in bringing your vision to life. Create a room in your own style
							with our collectiion and make your property a reflection of you
							and what you love.
						</p>

						<div className="w-full relative flex items-center gap-6 mt-10 hover:text-primary-dark-gray transition-opacity duration-150 cursor-pointer">
							<p className="font-semibold font-spartan tracking-[.5rem] ">
								SHOP NOW
							</p>
							<Image
								src="/images/icon-arrow.svg"
								width={56}
								height={12}
								alt="arrow right"
								className="object-contain animate-slide-right-and-back hover:color-primary-dark-gray"
							/>
						</div>

						<div className="absolute flex bottom-0 left-0 ">
							<button
								onClick={prevSlide}
								className="bg-black text-white p-4 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white flex items-center justify-center "
								aria-label="Previous slide"
							>
								<div className="w-6 h-6">
									<Image
										src="/images/icon-angle-left.svg"
										height={14}
										width={14}
										alt="icon caret left"
										className="object-contain"
									/>
								</div>
							</button>

							<button
								onClick={nextSlide}
								className="bg-black text-white p-4 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white flex items-center justify-center"
								aria-label="Next slide"
							>
								<div className="w-6 h-6">
									<Image
										src="/images/icon-angle-right.svg"
										height={14}
										width={14}
										alt="icon caret right"
										className="object-contain"
									/>
								</div>
							</button>
						</div>

						<div className="sr-only" aria-live="polite">
							Showing slide {currentSlide + 1} of {slides.length}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
