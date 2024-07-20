'use client';

import { ReactNode } from 'react';
import useScreenSize from '@/hooks/useScreenSize';

interface IResponsiveComponent {
	children: (props: { size: number }) => ReactNode;
}

export default function ResponsiveComponent({
	children,
}: IResponsiveComponent) {
	const size = useScreenSize();

	return <>{children({ size })}</>;
}
