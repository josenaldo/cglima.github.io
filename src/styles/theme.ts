import { createTheme } from '@mui/material/styles'

// ─── Shared palette values ────────────────────────────────────────────────────

const sharedPalette = {
    primary: {
        main: '#8855DF',
        light: '#A97EE8',
        dark: '#6030B5',
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: '#64D8CB',
        light: '#9EEAE5',
        dark: '#3EADA2',
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
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
})

// ─── Dark theme ───────────────────────────────────────────────────────────────

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        ...sharedPalette,
        background: {
            default: '#0F0F1A',
            paper: '#1A1A2E',
        },
        text: {
            primary: '#E8E8F0',
            secondary: '#B0B0C8',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
})

export default darkTheme
