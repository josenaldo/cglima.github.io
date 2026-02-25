'use client'

import React, { createContext, useCallback, useContext, useMemo } from 'react'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'

import { darkTheme, lightTheme } from '@/styles/theme'

// ─── Context ──────────────────────────────────────────────────────────────────

type ColorMode = 'light' | 'dark'

interface ColorModeContextValue {
    mode: ColorMode
    toggleColorMode: () => void
}

export const ColorModeContext = createContext<ColorModeContextValue>({
    mode: 'dark',
    toggleColorMode: () => {},
})

export function useColorMode() {
    return useContext(ColorModeContext)
}

// ─── ThemeRegistry ────────────────────────────────────────────────────────────

const STORAGE_KEY = 'color-mode'

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    const prefersDark = useMediaQuery('(prefers-color-scheme: dark)', {
        noSsr: true,
    })

    const [mode, setMode] = React.useState<ColorMode>(() => {
        if (typeof window === 'undefined') return 'dark'
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored === 'light' || stored === 'dark') return stored
        return prefersDark ? 'dark' : 'light'
    })

    const toggleColorMode = useCallback(() => {
        setMode((prev) => {
            const next = prev === 'light' ? 'dark' : 'light'
            if (typeof window !== 'undefined') {
                localStorage.setItem(STORAGE_KEY, next)
            }
            return next
        })
    }, [])

    const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode])

    const colorModeValue = useMemo(() => ({ mode, toggleColorMode }), [mode, toggleColorMode])

    return (
        <ColorModeContext.Provider value={colorModeValue}>
            <AppRouterCacheProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </AppRouterCacheProvider>
        </ColorModeContext.Provider>
    )
}
