import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop: React.FC = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			window.scrollY > 400 ? setIsVisible(true) : setIsVisible(false);
		};
		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<div className="fixed bottom-10 right-10 z-[100]">
			<AnimatePresence>
				{isVisible && (
					<motion.button
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.5 }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={scrollToTop}
						className="glass relative flex h-14 w-14 items-center justify-center rounded-2xl text-slate-100 shadow-2xl transition-colors duration-300 hover:bg-brand-primary"
					>
						{/* The "One-Time" Ping Element */}
						<motion.span
							initial={{ scale: 1, opacity: 0.8 }}
							animate={{ scale: 2, opacity: 0 }}
							transition={{
								duration: 0.8,
								ease: "easeOut",
								delay: 0.2 // Starts slightly after the button appears
							}}
							className="absolute inset-0 -z-10 rounded-2xl bg-brand-primary"
						/>

						<ChevronUp size={28} strokeWidth={2.5} />
					</motion.button>
				)}
			</AnimatePresence>
		</div>
	);
};

export default ScrollToTop;