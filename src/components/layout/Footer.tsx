import { portfolioData } from "@/data/portfolio"

export function Footer() {
    return (
        <footer className="bg-background/50 backdrop-blur-md border-t border-white/10 py-8 mt-20">
            <div className="container mx-auto px-6 text-center text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.</p>
            </div>
        </footer>
    )
}
