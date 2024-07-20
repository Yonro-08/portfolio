'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

interface IItemLayout {
	children: React.ReactNode;
	className?: string;
}
export function ItemLayout({ children, className }: IItemLayout) {
	return (
		<motion.div
			initial={{ scale: 0 }}
			whileInView={{ scale: 1 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			className={clsx(
				'custom-bg p-6 sm:p-8 rounded-xl flex items-center justify-center',
				className,
			)}
		>
			{children}
		</motion.div>
	);
}
