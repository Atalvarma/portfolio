import { motion } from "framer-motion"
import { portfolioData } from "@/data/portfolio"

export function About() {
    return (
        <section id="about" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
                    {portfolioData.personal.about.map((paragraph, index) => (
                        <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-6 last:mb-0">
                            {paragraph}
                        </p>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
