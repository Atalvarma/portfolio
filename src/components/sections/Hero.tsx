import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { portfolioData } from "@/data/portfolio"
import { themeConfig } from "@/data/theme"

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-20">
            {/* Gradient Background Mesh */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-50" />

                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF4500]/20 rounded-full blur-[120px]"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#FF4500]/20 bg-[#FF4500]/10 backdrop-blur-sm">
                        <h2 className="text-sm md:text-base font-medium text-[#FF4500] tracking-widest uppercase">
                            Hello, I'm
                        </h2>
                    </div>

                    <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r ${themeConfig.effects.gradientPrimary}`}>
                        {portfolioData.personal.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                        {portfolioData.personal.summary}
                    </p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                        className="flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <a
                            href="#contact"
                            className={`px-8 py-3 rounded-full font-medium text-white shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-300 bg-gradient-to-r ${themeConfig.effects.gradientSecondary}`}
                        >
                            Get in Touch
                        </a>
                        <a
                            href="#experience"
                            className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${themeConfig.effects.glass} ${themeConfig.effects.glassHover}`}
                        >
                            View Work
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <ArrowDown className="w-6 h-6 text-muted-foreground" />
            </motion.div>
        </section>
    )
}
