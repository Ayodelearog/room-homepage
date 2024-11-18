import React from "react";
import Image from "next/image";

const About = () => {
	return (
		<div className="w-full p4-12  text-left font-spartan ">
			<div className="w-full h-[29vh] relative ">
				<Image
					src="/images/image-about-dark.jpg"
					fill
					alt="about image dark"
					className="object-contain "
				/>
			</div>

			<div className="px-10 py-12 w-full">
				<h2 className='font-bold font-spartan tracking-[.2rem]'>
					ABOUT OUR FURNITURE
				</h2>
				<p className="text-[14px] mt-6 font-semibold text-primary-dark-gray ">
					Our multifunctional collection blends design and function to suit your individual taste. Make each room unique or pick a cohesive theme that best express your interests and what inspires you. 
                    Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product soeacialists are available to help you create your dream space.
				</p>
			</div>

            <div className="w-full h-[29vh] relative ">
				<Image
					src="/images/image-about-light.jpg"
					fill
					alt="about image light"
					className="object-contain "
				/>
			</div>
		</div>
	);
};

export default About;
