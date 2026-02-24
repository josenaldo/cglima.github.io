'use client'

import React from 'react'
import { useTranslations } from 'next-intl'

import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import { Link } from '@/i18n/navigation'
import type { NavItem } from '@/config/navigation'

// ─── Types ────────────────────────────────────────────────────────────────────

interface MobileMenuProps {
    items: NavItem[]
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function MobileMenu({ items }: MobileMenuProps) {
    const t = useTranslations('nav')
    const [open, setOpen] = React.useState(false)

    return (
        <Box
            sx={{ display: { xs: 'flex', md: 'none' } }}
            aria-label="mobile navigation"
        >
            <IconButton
                size="large"
                aria-label="open menu"
                aria-haspopup="true"
                aria-expanded={open}
                onClick={() => setOpen(true)}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: { xs: 'flex', md: 'none' } }}
            >
                <List sx={{ width: 240 }} role="navigation">
                    {items.map((item) => {
                        const Icon = item.icon
                        return (
                            <ListItem key={item.key} disablePadding>
                                <ListItemButton
                                    component={Link}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                >
                                    <ListItemIcon>
                                        <Icon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={t(
                                            item.key as Parameters<typeof t>[0]
                                        )}
                                    />
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </List>
            </Drawer>
        </Box>
    )
}
