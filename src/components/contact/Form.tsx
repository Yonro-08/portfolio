'use client';

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { toast, Toaster } from 'sonner';

type FormValues = {
	name: string;
	email: string;
	message: string;
};

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
			delayChildren: 0.2,
		},
	},
};

const item = {
	hidden: { scale: 0 },
	show: { scale: 1 },
};

export default function Form() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();
	const onSubmit = (data: FormValues) => {
		console.log(data);
		const toastId = toast.loading('Sending your message, please wait...');
		toast.success(
			'I have received your message, I will get back to you soon!',
			{
				id: toastId,
			},
		);
		toast.error(
			'There was an error sending your message, please try again later!',
			{
				id: toastId,
			},
		);
	};

	return (
		<>
			<Toaster richColors />
			<motion.form
				variants={container}
				initial={'hidden'}
				animate="show"
				onSubmit={handleSubmit(onSubmit)}
				className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
			>
				<motion.input
					variants={item}
					type="text"
					placeholder="Name"
					{...register('name', { required: 'This field is required' })}
					className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
				/>
				{errors.name && (
					<span className="inline-block self-start text-accent">
						{errors.name.message}
					</span>
				)}
				<motion.input
					variants={item}
					type="email"
					placeholder="Email"
					{...register('email', { required: 'This field is required' })}
					className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
				/>
				{errors.email && (
					<span className="inline-block self-start text-accent">
						{errors.email.message}
					</span>
				)}
				<motion.textarea
					variants={item}
					placeholder="Message"
					{...register('message', {
						required: 'This field is required',
						maxLength: {
							value: 500,
							message: 'Message should be less than 500 characters',
						},
						minLength: {
							value: 50,
							message: 'Message should be more than 50 characters',
						},
					})}
					className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
				/>
				{errors.message && (
					<span className="inline-block self-start text-accent">
						{errors.message.message}
					</span>
				)}
				<motion.input
					variants={item}
					value="Cast your message!"
					className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/50 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
					type="submit"
				/>
			</motion.form>
		</>
	);
}
