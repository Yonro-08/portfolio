import Link from 'next/link';

import HomeBtn from '@/components/HomeBtn';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center px-8 xs:px-16 lg:px-32 py-20">
			<HomeBtn />
			{children}
		</main>
	);
}
