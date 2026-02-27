'use client'

import { useLocale } from 'next-intl'

import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

import AppConfig from '@/config/AppConfig'
import { usePathname, useRouter } from '@/i18n/navigation'

// ─── Component ────────────────────────────────────────────────────────────────

export default function LanguageSwitcher() {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    const handleSwitch = (next: string) => {
        router.replace(pathname, { locale: next })
    }

    if (AppConfig.locales.length <= 1) return null

    return (
        <ButtonGroup size="small" aria-label="language switcher" variant="outlined">
            {AppConfig.locales.map((lang) => (
                <Button
                    key={lang}
                    onClick={() => handleSwitch(lang)}
                    disabled={lang === locale}
                    sx={{
                        color: lang === locale ? 'primary.main' : 'inherit',
                        borderColor: 'divider',
                        minWidth: 40,
                        fontWeight: lang === locale ? 700 : 400,
                    }}
                    aria-label={`Switch to ${lang}`}
                    aria-current={lang === locale ? 'true' : undefined}
                >
                    {lang.toUpperCase()}
                </Button>
            ))}
        </ButtonGroup>
    )
}
