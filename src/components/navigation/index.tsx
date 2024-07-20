'use client';

import useScreenSize from '@/hooks/useScreenSize';
import { motion } from 'framer-motion';

import { BtnList } from '@/constants/data';
import ResponsiveComponent from '../ResponsiveComponent';
import NavButton from './NavButton';

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
};

export default function Navigation() {
	const angleIncrement = 360 / BtnList.length;
	const size = useScreenSize();

	const isLarge = size >= 1024;
	const isMedium = size >= 768;

	return (
		<div className="fixed h-screen w-full flex items-center justify-center">
			<ResponsiveComponent>
				{({ size }) => {
					return size && size >= 480 ? (
						<motion.div
							variants={container}
							initial="hidden"
							animate="show"
							className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group"
						>
							{BtnList.map((btn, index) => {
								const angleRad = (index * angleIncrement * Math.PI) / 180;
								const radius = isLarge
									? 'calc(20vw - 1rem)'
									: isMedium
										? 'calc(30vw - 1rem)'
										: 'calc(40vw - 1rem)';
								const x = `calc(${radius}*${Math.cos(angleRad)})`;
								const y = `calc(${radius}*${Math.sin(angleRad)})`;

								return <NavButton key={btn.id} x={x} y={y} {...btn} />;
							})}
						</motion.div>
					) : (
						<>
							<motion.div
								variants={container}
								initial="hidden"
								animate="show"
								className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-start xs:items-center justify-center relative group"
							>
								{BtnList.slice(0, BtnList.length / 2).map((btn) => {
									return <NavButton key={btn.id} x={'0'} y={'0'} {...btn} />;
								})}
							</motion.div>
							<motion.div
								variants={container}
								initial="hidden"
								animate="show"
								className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end xs:items-center justify-center relative group"
							>
								{BtnList.slice(BtnList.length / 2, BtnList.length).map(
									(btn) => {
										return (
											<NavButton
												key={btn.id}
												x={'0'}
												y={'0'}
												labelDirection="left"
												{...btn}
											/>
										);
									},
								)}
							</motion.div>
						</>
					);
				}}
			</ResponsiveComponent>
		</div>
	);
}
