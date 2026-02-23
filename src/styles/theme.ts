import { createTheme } from '@mui/material/styles'

// Extend the default theme here.
// See https://mui.com/customization/theming/ for documentation.

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#9c27b0',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
})

export default theme
