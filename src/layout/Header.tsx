import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'

import { navItems } from '@/config/navigation'

import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import ThemeToggle from './ThemeToggle'
import Logo from '@/ui/Logo'

// ─── Component ────────────────────────────────────────────────────────────────

export default function Header() {
    return (
        <AppBar position="sticky" elevation={1}>
            <Container maxWidth="xl">
                <Toolbar
                    disableGutters
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Logo />

                    <DesktopMenu items={navItems} />

                    <Toolbar disableGutters sx={{ gap: 1 }}>
                        <ThemeToggle />
                        <MobileMenu items={navItems} />
                    </Toolbar>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
