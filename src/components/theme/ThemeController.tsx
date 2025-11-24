import { useEffect } from 'react'
import { themeConfig } from '@/data/theme'

export function ThemeController() {
    useEffect(() => {
        const root = document.documentElement

        // Apply colors from themeConfig
        Object.entries(themeConfig.colors).forEach(([key, value]) => {
            // Convert camelCase to kebab-case for CSS variables (e.g., primaryForeground -> --primary-foreground)
            const cssVar = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`
            root.style.setProperty(cssVar, value)
        })
    }, [])

    return null
}
