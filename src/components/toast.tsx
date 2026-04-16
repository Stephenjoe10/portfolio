import { AnimatePresence, motion } from "framer-motion"
import { cn } from "../lib/utils"

const Toast = ({ message, show, apiError }: { message: string, show: boolean, apiError?: true }) => {
	return (
		<AnimatePresence>
			{show && (
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 50 }}
					className={cn("fixed left-1/2 -translate-x-1/2 text-center bg-black text-white px-4 py-3 rounded-lg shadow-lg",
						apiError ? 'top-1/2' : 'bottom-6')}
				>
					{message}
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default Toast