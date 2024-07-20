'use client';

import React, { PropsWithChildren, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Material } from 'three';

export default function HatModel(props: PropsWithChildren) {
	const {
		nodes,
		materials,
	}: {
		nodes: any;
		materials: { [name: string]: Material };
	} = useGLTF('/models/hat-transformed.glb');

	const modelRef = useRef<any>(null);

	useFrame(() => {
		if (modelRef.current) {
			modelRef.current.rotation.y += 0.007;
		}
	});

	return (
		<group
			{...props}
			ref={modelRef}
			dispose={null}
			scale={[1.8, 1.8, 1.8]}
			rotation={[0.4, -1, 0]}
			position={[0, 0, 0]}
		>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Object_2.geometry}
				material={materials.initialShadingGroup}
				position={[0, -3.867, 0]}
				rotation={[-Math.PI / 2, 0, 0]}
			/>
		</group>
	);
}

useGLTF.preload('/models/hat-transformed.glb');
