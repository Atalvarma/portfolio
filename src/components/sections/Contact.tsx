import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { portfolioData } from "@/data/portfolio"
import { themeConfig } from "@/data/theme"

export function Contact() {
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-secondary/5 to-background pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-muted-foreground">Feel free to reach out for collaborations or opportunities</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className={`flex items-start gap-4 p-6 rounded-2xl ${themeConfig.effects.glass} ${themeConfig.effects.glassHover}`}>
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Email</h3>
                                <a href={`mailto:${portfolioData.personal.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                                    {portfolioData.personal.email}
                                </a>
                            </div>
                        </div>

                        <div className={`flex items-start gap-4 p-6 rounded-2xl ${themeConfig.effects.glass} ${themeConfig.effects.glassHover}`}>
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Phone</h3>
                                <a href={`tel:${portfolioData.personal.phoneRaw}`} className="text-muted-foreground hover:text-primary transition-colors">
                                    {portfolioData.personal.phone}
                                </a>
                            </div>
                        </div>

                        <div className={`flex items-start gap-4 p-6 rounded-2xl ${themeConfig.effects.glass} ${themeConfig.effects.glassHover}`}>
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Location</h3>
                                <p className="text-muted-foreground">{portfolioData.personal.location}</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`space-y-4 p-8 rounded-3xl ${themeConfig.effects.glass}`}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    className="w-full px-4 py-2 rounded-lg border border-white/10 bg-white/5 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/50"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full px-4 py-2 rounded-lg border border-white/10 bg-white/5 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/50"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-2 rounded-lg border border-white/10 bg-white/5 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none placeholder:text-muted-foreground/50"
                                placeholder="Your message..."
                            />
                        </div>
                        <button
                            type="submit"
                            className={`w-full py-3 rounded-lg font-medium text-white shadow-lg hover:shadow-primary/25 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r ${themeConfig.effects.gradientSecondary}`}
                        >
                            <Send className="w-4 h-4" />
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}
