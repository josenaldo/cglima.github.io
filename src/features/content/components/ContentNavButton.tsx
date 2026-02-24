'use client'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import NextLink from 'next/link'

// ─── Types ────────────────────────────────────────────────────────────────────

interface NavTarget {
    url: string
    title?: string
}

interface ContentNavButtonProps {
    previous?: NavTarget | null
    next?: NavTarget | null
    previousLabel?: string
    nextLabel?: string
    locale?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContentNavButton({
    previous,
    next,
    previousLabel = 'Anterior',
    nextLabel = 'Próximo',
    locale,
}: ContentNavButtonProps) {
    // Contentlayer URLs are unlocalized (/blog/slug). Prefix with /{locale}.
    const prefix = locale ? `/${locale}` : ''

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: 6,
                pt: 3,
                borderTop: 1,
                borderColor: 'divider',
            }}
        >
            {previous ? (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                <Button
                    component={NextLink as any}
                    href={`${prefix}${previous.url}`}
                    startIcon={<ArrowBackIcon />}
                    variant="outlined"
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                        <Typography variant="caption" color="text.secondary">
                            {previousLabel}
                        </Typography>
                        {previous.title && (
                            <Typography variant="body2">{previous.title}</Typography>
                        )}
                    </Box>
                </Button>
            ) : (
                <Box />
            )}

            {next ? (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                <Button
                    component={NextLink as any}
                    href={`${prefix}${next.url}`}
                    endIcon={<ArrowForwardIcon />}
                    variant="outlined"
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'right' }}>
                        <Typography variant="caption" color="text.secondary">
                            {nextLabel}
                        </Typography>
                        {next.title && (
                            <Typography variant="body2">{next.title}</Typography>
                        )}
                    </Box>
                </Button>
            ) : (
                <Box />
            )}
        </Box>
    )
}
