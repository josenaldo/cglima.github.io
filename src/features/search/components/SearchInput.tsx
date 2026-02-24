'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/i18n/navigation'

import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'

// ─── Component ────────────────────────────────────────────────────────────────

export default function SearchInput() {
    const t = useTranslations('common')
    const router = useRouter()
    const [query, setQuery] = React.useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query.trim())}`)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <OutlinedInput
                size="small"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('searchPlaceholder')}
                aria-label={t('search')}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton type="submit" size="small" aria-label="search">
                            <SearchIcon fontSize="small" />
                        </IconButton>
                    </InputAdornment>
                }
                sx={{
                    borderRadius: 4,
                    bgcolor: 'background.paper',
                    '& fieldset': { border: 1, borderColor: 'divider' },
                }}
            />
        </form>
    )
}
