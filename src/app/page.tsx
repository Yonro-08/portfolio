'use client';

import Image from 'next/image';

import Navigation from '@/components/navigation';
import RenderModel from '@/components/RenderModel';
import WizardModel from '@/models/Wizard';
import bg from '../../public/background/home-background.png';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between relative">
			<Image
				src={bg}
				priority
				sizes="100vw"
				alt="background-image"
				fill
				className="-z-50 w-full h-full object-cover object-center opacity-25"
			/>

			<div className="w-full h-screen">
				<Navigation />
				<RenderModel>
					<WizardModel />
				</RenderModel>
			</div>
		</main>
	);
}
