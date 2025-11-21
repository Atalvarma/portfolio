import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"
import { portfolioData } from "@/data/portfolio"

export function Experience() {
    return (
        <section id="experience" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
                    <p className="text-muted-foreground">My professional journey</p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {portfolioData.experience.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 border-l-2 border-muted md:pl-0 md:border-l-0 md:grid md:grid-cols-5 md:gap-8"
                        >
                            {/* Timeline line for desktop */}
                            <div className="hidden md:block absolute left-[20%] top-0 bottom-0 w-px bg-muted -ml-px" />
                            <div className="hidden md:flex absolute left-[20%] top-0 w-3 h-3 bg-primary rounded-full -ml-1.5 mt-1.5 ring-4 ring-background" />

                            <div className="md:col-span-1 md:text-right md:pr-8">
                                <div className="flex items-center md:justify-end gap-2 text-sm text-muted-foreground mb-2 md:mb-0">
                                    <Calendar className="w-4 h-4" />
                                    <span>{job.period}</span>
                                </div>
                            </div>

                            <div className="md:col-span-4 relative pl-8 md:pl-8 border-l-2 border-muted md:border-l-0">
                                {/* Mobile dot */}
                                <div className="md:hidden absolute left-0 top-1.5 w-3 h-3 bg-primary rounded-full -ml-[7px] ring-4 ring-background" />

                                <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                                <div className="flex items-center gap-2 text-primary font-medium mb-4">
                                    <Briefcase className="w-4 h-4" />
                                    <span>{job.company}</span>
                                </div>
                                <ul className="space-y-2 text-muted-foreground list-disc list-outside ml-4">
                                    {job.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
