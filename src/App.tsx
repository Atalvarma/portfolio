import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { Experience } from "@/components/sections/Experience"
import { Contact } from "@/components/sections/Contact"
import { ThemeController } from "@/components/theme/ThemeController"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary/30">
      <ThemeController />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
