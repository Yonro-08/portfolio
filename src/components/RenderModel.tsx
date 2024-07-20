'use client';

import { ReactNode, Suspense } from 'react';
import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import clsx from 'clsx';

interface IRenderModel {
	children: ReactNode;
	className?: string;
}

export default function RenderModel({ children, className }: IRenderModel) {
	return (
		<Canvas className={clsx('w-screen h-screen -z-10 relative', className)}>
			<Suspense fallback={null}>{children}</Suspense>
			<Environment path="/hdri/" files="kiara_1_dawn_1k.hdr" />
		</Canvas>
	);
}
