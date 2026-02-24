import { useTranslations } from 'next-intl'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import AppConfig from '@/config/AppConfig'

// ─── Component ────────────────────────────────────────────────────────────────

export default function Footer() {
    const t = useTranslations('footer')
    const year = new Date().getFullYear()

    return (
        <Box
            component="footer"
            sx={{ display: 'flex', width: '100%', mt: 'auto' }}
        >
            <Paper
                elevation={1}
                component="div"
                sx={{ width: '100%', py: 3 }}
            >
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 1,
                            color: 'text.secondary',
                        }}
                    >
                        <Typography variant="caption">
                            © {year} {AppConfig.owner.name} — {t('rights')}
                        </Typography>
                    </Box>
                </Container>
            </Paper>
        </Box>
    )
}
