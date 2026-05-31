import { motion } from "framer-motion";
import {
    Database,
    Server,
    Shield,
    Globe,
    Cpu,
    Network,
    HardDrive,
    Layers,
} from "lucide-react";

const services = [
    Database,
    Server,
    Shield,
    Globe,
    Cpu,
    Network,
    HardDrive,
    Layers,
];

export default function OrbitIcons() {
    return (
        <motion.div
            className="orbit-wrapper"
            animate={{
                rotate: 360,
            }}
            transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            {services.map((Icon, index) => {
                const angle =
                    (index / services.length) * Math.PI * 2;

                const radius = 260;

                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                    <motion.div
                        key={index}
                        className="
            absolute
            w-20
            h-20
            rounded-3xl
            bg-white
            shadow-xl
            flex
            justify-center
            items-center
            "
                        style={{
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                        }}
                        animate={{
                            y: [0, -8, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index,
                        }}
                    >
                        <Icon
                            size={30}
                            className="text-amber-500"
                        />
                    </motion.div>
                );
            })}
        </motion.div>
    );
}