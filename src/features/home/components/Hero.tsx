import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import AppConfig from '@/config/AppConfig'
import CallToAction from '@/ui/CallToAction'

// ─── Types ────────────────────────────────────────────────────────────────────

interface HeroProps {
    greeting: string
    contactLabel: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Hero({ greeting, contactLabel }: HeroProps) {
    return (
        <Box
            component="section"
            sx={{
                minHeight: { xs: '60vh', md: '70vh' },
                display: 'flex',
                alignItems: 'center',
                bgcolor: 'background.default',
                py: { xs: 8, md: 12 },
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ maxWidth: 700 }}>
                    <Typography variant="h6" color="primary" sx={{ fontWeight: 500, mb: 1 }}>
                        {greeting}
                    </Typography>

                    <Typography variant="h2" component="h1" fontWeight={700} sx={{ mb: 1 }}>
                        {AppConfig.owner.name}
                    </Typography>

                    <Typography variant="h4" color="text.secondary" fontWeight={400} sx={{ mb: 3 }}>
                        {AppConfig.owner.title}
                    </Typography>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <CallToAction href="/contact" variant="contained">
                            {contactLabel}
                        </CallToAction>
                        {AppConfig.owner.github && (
                            <CallToAction href={AppConfig.owner.github} variant="outlined" external>
                                GitHub
                            </CallToAction>
                        )}
                        {AppConfig.owner.linkedin && (
                            <CallToAction
                                href={AppConfig.owner.linkedin}
                                variant="outlined"
                                external
                            >
                                LinkedIn
                            </CallToAction>
                        )}
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}
