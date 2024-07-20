'use client';

import { useEffect, useState } from 'react';

interface IFireFly {
	id: number;
	top: string;
	left: string;
	animationDuration: string;
}

const createFireFly = () => ({
	id: Math.random(),
	top: `${Math.random() * 100}%`,
	left: `${Math.random() * 100}%`,
	animationDuration: `${Math.random() * 5 + 5}s`,
});

export default function FireFliesBackground() {
	const [fireFlies, setFireFlies] = useState<IFireFly[]>([]);

	useEffect(() => {
		const addFireFlyPeriodically = () => {
			const newFireFly = createFireFly();
			setFireFlies((prev) => [...prev.slice(-14), newFireFly]);
		};
		const interval = setInterval(addFireFlyPeriodically, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
			{fireFlies.map((fireFly) => {
				return (
					<div
						key={fireFly.id}
						className="absolute rounded-full w-[10px] h-[10px] bg-fireFly-radial"
						style={{
							top: fireFly.top,
							left: fireFly.left,
							animation: `move ${fireFly.animationDuration} infinite alternate`,
						}}
					></div>
				);
			})}
		</div>
	);
}
