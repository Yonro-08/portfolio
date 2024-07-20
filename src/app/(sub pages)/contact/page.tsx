'use client';

import Image from 'next/image';

import Form from '@/components/contact/Form';
import bg from '../../../../public/background/contact-background.png';

export default function Contact() {
	return (
		<>
			<Image
				src={bg}
				priority
				sizes="100vw"
				alt="background-image"
				className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
			/>

			<article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8 mb-8">
				<div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
					<h1 className="text-accent font-semibold text-center text-4xl capitalize">
						summon the wizard
					</h1>
					<p className="text-center font-light text-sm xs:text-base">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
						totam vel sapiente vitae, beatae earum nemo neque repellendus
						similique id hic, mollitia blanditiis porro! Explicabo vel
						architecto quae eum? Dolores?
					</p>
				</div>
			</article>
			<Form />
		</>
	);
}
