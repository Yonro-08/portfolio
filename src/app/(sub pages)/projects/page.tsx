'use client';

import Image from 'next/image';

import ProjectList from '@/components/projects';
import RenderModel from '@/components/RenderModel';
import StaffModel from '@/models/Staff';
import bg from '../../../../public/background/projects-background.png';

export default function Projects() {
	return (
		<>
			<Image
				src={bg}
				priority
				sizes="100vw"
				alt="background-image"
				className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
			/>
			<ProjectList />
			<div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 left-1/2 lg:-left-24 h-screen -z-10">
				<RenderModel>
					<StaffModel />
				</RenderModel>
			</div>
		</>
	);
}
