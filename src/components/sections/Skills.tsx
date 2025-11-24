import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"
import { themeConfig } from "@/data/theme"

export function Skills() {
    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <p className="text-muted-foreground">Core competencies and technologies I work with</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {Object.entries(portfolioData.skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-6 rounded-2xl ${themeConfig.effects.glass} ${themeConfig.effects.glassHover}`}
                        >
                            <h3 className={`text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${themeConfig.effects.gradientSecondary}`}>
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
