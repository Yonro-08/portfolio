'use client';

import { useEffect, useState } from 'react';

export default function useScreenSize() {
	const [screenSize, setScreenSize] = useState<number>(+window.innerWidth);

	useEffect(() => {
		function getScreenSize() {
			return window.innerWidth;
		}

		function handleResize() {
			setScreenSize(getScreenSize());
		}

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return screenSize;
}
