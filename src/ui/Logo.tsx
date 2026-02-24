'use client'

import Typography from '@mui/material/Typography'

import AppConfig from '@/config/AppConfig'
import { Link } from '@/i18n/navigation'

// ─── Component ────────────────────────────────────────────────────────────────

export default function Logo() {
    return (
        <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                letterSpacing: '0.05em',
            }}
        >
            {AppConfig.owner.name}
        </Typography>
    )
}
