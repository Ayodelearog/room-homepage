import React from "react";
import Image from "next/image";

const About = () => {
	return (
		<div className="w-full text-left font-spartan lg:grid lg:grid-cols-4 justify-items-stretch lg:h-[33.9vh] items-center ">
			<div className="w-full h-[29vh] lg:h-full relative ">
				<Image
					src="/images/image-about-dark.jpg"
					fill
					alt="about image dark"
					className="object-contain lg:object-cover"
				/>
			</div>

			<div className="px-10 lg:px-16 lg:py-16 py-12 w-full lg:h-full lg:col-span-2">
				<h2 className='font-bold font-spartan tracking-[.2rem]'>
					ABOUT OUR FURNITURE
				</h2>
				<p className="text-[14px] mt-6 font-semibold text-primary-dark-gray ">
					Our multifunctional collection blends design and function to suit your individual taste. Make each room unique or pick a cohesive theme that best express your interests and what inspires you. 
                    Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product soeacialists are available to help you create your dream space.
				</p>
			</div>

            <div className="w-full h-[29vh] lg:h-full relative ">
				<Image
					src="/images/image-about-light.jpg"
					fill
					alt="about image light"
					className="object-contain  lg:object-cover "
				/>
			</div>
		</div>
	);
};

export default About;
