'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

interface IModal {
	onClose: () => void;
	toggle: () => void;
}

const Modal = ({ onClose, toggle }: IModal) => {
	return createPortal(
		<div
			className="fixed inset-0 bg-background/6 backdrop-blur-sm flex items-center
    justify-center"
		>
			<div className="bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] py-8 px-6 xs:px-10 sm:px-16 rounded shadow-glass-inset text-center space-y-8">
				<p className="font-light">Do you like to play the background music</p>
				<div className="flex items-center justify-center space-x-4">
					<button
						onClick={toggle}
						className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded mr-2"
					>
						Yes
					</button>
					<button
						onClick={onClose}
						className="px-4 py-2 border border-accent/30 border-solid hover:shadow-glass-sm rounded"
					>
						No
					</button>
				</div>
			</div>
		</div>,
		document.getElementById('my-modal'),
	);
};

export default function Sound() {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const handleToggle = () => {
		const newState = !isPlaying;
		setIsPlaying(!isPlaying);
		newState ? audioRef.current?.play() : audioRef.current?.pause();
		localStorage.setItem('musicConsent', String(newState));
		localStorage.setItem('consentTime', new Date().toISOString());
		setShowModal(false);
	};

	const handleFirstUserInteraction = useCallback(() => {
		const musicConsent = localStorage.getItem('musicConsent');

		if (musicConsent === 'true' && !isPlaying) {
			audioRef.current?.play();
			setIsPlaying(true);
		}

		['click', 'keydown', 'touchstart'].forEach((event) => {
			document.removeEventListener(event, handleFirstUserInteraction);
		});
	}, [isPlaying]);

	useEffect(() => {
		const consent = localStorage.getItem('musicConsent');
		const consentTime = localStorage.getItem('consentTime');

		if (
			consent &&
			consentTime &&
			new Date(consentTime).getTime() + 3 * 24 * 60 * 60 * 1000 > Date.now()
		) {
			setIsPlaying(consent === 'true');
			if (consent === 'true') {
				['click', 'keydown', 'touchstart'].forEach((event) => {
					document.addEventListener(event, handleFirstUserInteraction);
				});
			}
		} else {
			setShowModal(true);
		}
	}, [handleFirstUserInteraction]);

	return (
		<div className="fixed top-4 right-2.5 xs:right-4 z-50 group">
			{showModal && (
				<Modal onClose={() => setShowModal(false)} toggle={handleToggle} />
			)}
			<audio ref={audioRef} loop>
				<source src="/audio/birds39-forest-20772.mp3" type="audio/mpeg" />
				your browser does not support audio element.
			</audio>
			<motion.button
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ delay: 1 }}
				className="w-10 h-10 xs:w-14 xs:h-14 text-foreground rounded-full flex items-center justify-center cursor-pointer p-2.5 xs:p-4 custom-bg"
				aria-label="mute"
				onClick={handleToggle}
			>
				{isPlaying ? (
					<Volume2
						className="w-full h-full text-foreground group-hover:text-accent"
						strokeWidth={1.5}
					/>
				) : (
					<VolumeX
						className="w-full h-full text-foreground group-hover:text-accent"
						strokeWidth={1.5}
					/>
				)}
			</motion.button>
		</div>
	);
}
