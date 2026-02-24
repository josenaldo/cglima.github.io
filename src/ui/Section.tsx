import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import type { SxProps, Theme } from '@mui/material/styles'

// ─── Types ────────────────────────────────────────────────────────────────────

interface SectionProps {
    id?: string
    title?: string
    subtitle?: string
    children: React.ReactNode
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    sx?: SxProps<Theme>
    background?: 'default' | 'paper'
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Section({
    id,
    title,
    subtitle,
    children,
    maxWidth = 'lg',
    sx,
    background = 'default',
}: SectionProps) {
    return (
        <Box
            component="section"
            id={id}
            sx={{
                py: { xs: 6, md: 10 },
                bgcolor: background === 'paper' ? 'background.paper' : 'background.default',
                ...sx,
            }}
        >
            <Container maxWidth={maxWidth}>
                {(title || subtitle) && (
                    <Box sx={{ mb: 6, textAlign: 'center' }}>
                        {title && (
                            <Typography
                                variant="h3"
                                component="h2"
                                sx={{ fontWeight: 700, mb: subtitle ? 1 : 0 }}
                            >
                                {title}
                            </Typography>
                        )}
                        {subtitle && (
                            <Typography
                                variant="subtitle1"
                                color="text.secondary"
                            >
                                {subtitle}
                            </Typography>
                        )}
                    </Box>
                )}
                {children}
            </Container>
        </Box>
    )
}
