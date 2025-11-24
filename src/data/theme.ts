export const themeConfig = {
    // Base colors
    colors: {
        background: "222.2 84% 2.5%", // Deeper dark blue/black
        foreground: "210 40% 98%",    // Soft white

        card: "222.2 84% 4.9%",
        cardForeground: "210 40% 98%",

        popover: "222.2 84% 4.9%",
        popoverForeground: "210 40% 98%",

        primary: "217.2 91.2% 59.8%", // Vibrant Blue
        primaryForeground: "222.2 47.4% 11.2%",

        secondary: "217.2 32.6% 17.5%", // Muted Blue
        secondaryForeground: "210 40% 98%",

        muted: "217.2 32.6% 17.5%",
        mutedForeground: "215 20.2% 65.1%",

        accent: "16 100% 50%", // Vibrant Red-Orange from image
        accentForeground: "60 9.1% 97.8%",

        destructive: "0 62.8% 30.6%",
        destructiveForeground: "210 40% 98%",

        border: "217.2 32.6% 17.5%",
        input: "217.2 32.6% 17.5%",
        ring: "16 100% 50%", // Orange ring
    },

    // Custom gradients and effects
    effects: {
        gradientPrimary: "from-sky-300 via-blue-500 to-indigo-600",
        gradientSecondary: "from-[#FF3300] via-[#FF6F00] to-[#FF8C00]", // Red-Orange to Dark Orange
        glass: "bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl",
        glassHover: "hover:bg-white/10 hover:border-white/20 transition-all duration-300",
    }
}
