import { motion } from "framer-motion";

export default function FloatingBadge() {
    return (
        <motion.div
            animate={{
                y: [0, -8, 0],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
            }}
            className="
      absolute
      bottom-10
      right-0
      bg-white
      rounded-2xl
      px-6
      py-4
      shadow-xl
      "
        >
            <div className="text-green-600 font-semibold">
                ✓ Production Ready
            </div>

            <div className="text-slate-500 text-sm">
                Best practices validated
            </div>
        </motion.div>
    );
}