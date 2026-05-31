import { motion } from "framer-motion";
import { Cloud } from "lucide-react";

export default function CloudCenter() {
    return (
        <motion.div
            animate={{
                y: [0, -10, 0],
                scale: [1, 1.02, 1],
            }}
            transition={{
                duration: 6,
                repeat: Infinity,
            }}
            className="relative"
        >
            {/* glow */}

            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                }}
                className="
        absolute
        inset-0
        rounded-full
        blur-[80px]
        bg-amber-300/30
        "
            />

            <div
                className="
        relative
        z-10
        w-[420px]
        h-[260px]
        rounded-[140px]
        bg-white
        shadow-2xl
        flex
        justify-center
        items-center
      "
            >
                <Cloud
                    size={240}
                    className="text-amber-300"
                    strokeWidth={1}
                />
            </div>
        </motion.div>
    );
}