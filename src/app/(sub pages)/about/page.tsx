'use client';

import Image from 'next/image';

import AboutDetails from '@/components/about';
import RenderModel from '@/components/RenderModel';
import HatModel from '@/models/Hat';
import bg from '../../../../public/background/about-background.png';

export default function About() {
	return (
		<>
			<Image
				src={bg}
				priority
				sizes="100vw"
				alt="background-image"
				className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
			/>

			<div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
				<RenderModel>
					<HatModel />
				</RenderModel>
			</div>

			<div className="relative w-full h-screen flex flex-col items-center justify-center">
				<div className="absolute flex flex-col items-center text-center top-[55%] xs:top-[60%] left-1/2  -translate-y-1/2 -translate-x-1/2">
					<h1 className="font-bold text-6xl xs:text-7xl sm:8xl lg:text-9xl text-accent">
						Yonro
					</h1>
					<p className="font-light text-foreground text-ls">
						Meet the wizard behind this portfolio
					</p>
				</div>
			</div>
			<AboutDetails />
		</>
	);
}