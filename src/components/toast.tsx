import { AnimatePresence, motion } from "framer-motion"

const Toast = ({ message, show }: { message: string, show: boolean }) => {
	return (
		<AnimatePresence>
			{show && (
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 50 }}
					className="fixed bottom-6 left-1/2 -translate-x-1/2 text-center bg-black text-white px-4 py-3 rounded-lg shadow-lg"
				>
					{message}
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default Toast