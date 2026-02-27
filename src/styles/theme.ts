import { createTheme } from '@mui/material/styles'

import AppConfig from '@/config/AppConfig'

// ─── Shared palette values ────────────────────────────────────────────────────
// Primary and secondary colors come from site/config.json — edit them there.

const sharedPalette = {
    primary: {
        main: AppConfig.theme.primaryColor,
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: AppConfig.theme.secondaryColor,
        contrastText: '#000000',
    },
    error: {
        main: '#EF9A9A',
    },
    warning: {
        main: '#FFCC80',
    },
    info: {
        main: '#90CAF9',
    },
    success: {
        main: '#A5D6A7',
    },
}

const fontFamily = `"${AppConfig.theme.fontName}", "Helvetica", "Arial", sans-serif`

// ─── Light theme ──────────────────────────────────────────────────────────────

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        ...sharedPalette,
        background: {
            default: '#F5F5F5',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#1A1A2E',
            secondary: '#555577',
        },
    },
    typography: {
        fontFamily,
    },
})

// ─── Dark theme ───────────────────────────────────────────────────────────────

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        ...sharedPalette,
        background: {
            default: AppConfig.pwa.backgroundColor,
            paper: '#1A1A2E',
        },
        text: {
            primary: '#E8E8F0',
            secondary: '#B0B0C8',
        },
    },
    typography: {
        fontFamily,
    },
})

export default darkTheme
