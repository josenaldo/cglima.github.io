'use client'

import { useTranslations } from 'next-intl'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import { Link } from '@/i18n/navigation'
import type { NavItem } from '@/config/navigation'

// ─── Types ────────────────────────────────────────────────────────────────────

interface DesktopMenuProps {
    items: NavItem[]
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function DesktopMenu({ items }: DesktopMenuProps) {
    const t = useTranslations('nav')

    return (
        <Box
            component="nav"
            aria-label="desktop navigation"
            sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}
        >
            {items.map((item) => (
                <Button
                    key={item.key}
                    component={Link}
                    href={item.href}
                    sx={{ color: 'inherit' }}
                >
                    {t(item.key as Parameters<typeof t>[0])}
                </Button>
            ))}
        </Box>
    )
}
