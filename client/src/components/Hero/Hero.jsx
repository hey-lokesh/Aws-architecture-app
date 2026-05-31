import { motion } from "framer-motion";
import {
    Database,
    Cloud,
    Server,
    Shield,
    Globe,
    Cpu,
    Network,
    HardDrive,
} from "lucide-react";

const services = [
    { Icon: Database, delay: 0 },
    { Icon: Server, delay: 2 },
    { Icon: Shield, delay: 4 },
    { Icon: Globe, delay: 6 },
    { Icon: Cpu, delay: 8 },
    { Icon: Network, delay: 10 },
    { Icon: HardDrive, delay: 12 },
];

export default function Hero() {
    return (
        <section className="min-h-screen bg-[#faf8f5] overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">

                {/* NAVBAR */}

                <nav className="flex justify-between items-center py-8">

                    <h1 className="text-2xl font-bold">
                        ArchiCraft
                    </h1>

                    <div className="hidden md:flex gap-10">
                        <a href="/">Product</a>
                        <a href="/">Features</a>
                        <a href="/">Solutions</a>
                        <a href="/">Pricing</a>
                    </div>

                    <button className="bg-slate-900 text-white px-5 py-3 rounded-xl">
                        Start Free
                    </button>

                </nav>

                {/* HERO */}

                <div className="grid lg:grid-cols-2 items-center min-h-[85vh]">

                    {/* LEFT */}

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >

                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border mb-8">
                            Design. Visualize. Deploy.
                        </div>

                        <h1 className="text-7xl leading-none font-bold text-slate-900">

                            Design AWS
                            <br />

                            Architectures

                            <br />

                            <span className="text-amber-500">
                                Visually.
                            </span>

                            <br />

                            Deploy with
                            <br />
                            Confidence.

                        </h1>

                        <p className="mt-8 text-xl text-slate-600 max-w-xl">
                            Create cloud architectures using drag-and-drop
                            components, validate best practices, and
                            export infrastructure as code.
                        </p>

                        <div className="flex gap-4 mt-10">

                            <button className="bg-slate-900 text-white px-8 py-4 rounded-xl">
                                Start Designing
                            </button>

                            <button className="border px-8 py-4 rounded-xl">
                                View Demo
                            </button>

                        </div>

                    </motion.div>

                    {/* RIGHT */}

                    <div className="relative h-[700px]">

                        {/* Cloud */}

                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                            }}
                            className="absolute top-1/2 left-1/2
              -translate-x-1/2
              -translate-y-1/2"
                        >

                            <div
                                className="
                w-[420px]
                h-[260px]
                rounded-[140px]
                bg-white
                shadow-[0_20px_100px_rgba(245,158,11,0.15)]
                flex
                items-center
                justify-center
              "
                            >

                                <Cloud
                                    size={240}
                                    strokeWidth={1}
                                    className="text-amber-200"
                                />

                            </div>

                        </motion.div>

                        {/* Floating Icons */}

                        {services.map((service, index) => {
                            const angle =
                                (index / services.length) * Math.PI * 2;

                            const x =
                                Math.cos(angle) * 250;

                            const y =
                                Math.sin(angle) * 250;

                            return (
                                <motion.div
                                    key={index}
                                    className="
                  absolute
                  left-1/2
                  top-1/2
                  w-20
                  h-20
                  bg-white
                  rounded-3xl
                  shadow-xl
                  flex
                  items-center
                  justify-center
                  "
                                    animate={{
                                        x: [x, x + 20, x],
                                        y: [y, y - 20, y],
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        delay: service.delay,
                                    }}
                                >
                                    <service.Icon
                                        className="text-amber-500"
                                        size={32}
                                    />
                                </motion.div>
                            );
                        })}

                        {/* Orbit Rings */}

                        <div className="orbit orbit1" />
                        <div className="orbit orbit2" />
                        <div className="orbit orbit3" />

                    </div>

                </div>
            </div>
        </section>
    );
}