import { motion } from "framer-motion";

export default function ConnectionLines() {
    return (
        <>
            <svg
                className="absolute inset-0 w-full h-full"
            >
                <line
                    x1="50%"
                    y1="20%"
                    x2="70%"
                    y2="50%"
                    stroke="#f59e0b"
                    strokeDasharray="8 8"
                />

                <line
                    x1="30%"
                    y1="50%"
                    x2="50%"
                    y2="80%"
                    stroke="#2563eb"
                    strokeDasharray="8 8"
                />
            </svg>

            <motion.div
                className="
        absolute
        w-3
        h-3
        rounded-full
        bg-amber-500
        "
                animate={{
                    x: [200, 420],
                    y: [180, 350],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                }}
            />
        </>
    );
}