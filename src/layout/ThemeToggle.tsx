'use client'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { useTranslations } from 'next-intl'

import { useColorMode } from './ThemeRegistry'

export default function ThemeToggle() {
    const { mode, toggleColorMode } = useColorMode()
    const t = useTranslations('common')

    return (
        <Tooltip title={mode === 'light' ? t('darkMode') : t('lightMode')}>
            <IconButton
                onClick={toggleColorMode}
                color="inherit"
                aria-label={mode === 'light' ? t('darkMode') : t('lightMode')}
            >
                {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
        </Tooltip>
    )
}
