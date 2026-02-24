'use client'

import React from 'react'
import lunr from 'lunr'
import { useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'

import { Link } from '@/i18n/navigation'
import type { SearchDocument, SearchDocumentMeta } from '../api/search'

// ─── Types ────────────────────────────────────────────────────────────────────

interface SearchResultsProps {
    documents: SearchDocument[]
    meta: Record<string, SearchDocumentMeta>
}

// ─── Inner component (uses useSearchParams – needs Suspense boundary) ─────────

function SearchResultsInner({
    documents,
    meta,
}: SearchResultsProps) {
    const t = useTranslations('search')
    const searchParams = useSearchParams()
    const query = searchParams.get('q') ?? ''
    const [results, setResults] = React.useState<SearchDocumentMeta[]>([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        if (!query.trim()) {
            setResults([])
            setLoading(false)
            return
        }

        const index = lunr(function () {
            this.ref('url')
            this.field('title', { boost: 10 })
            this.field('description', { boost: 5 })
            this.field('content')

            documents.forEach((doc) => {
                this.add(doc)
            })
        })

        try {
            const hits = index.search(`${query}*`)
            setResults(hits.map((hit) => meta[hit.ref]).filter(Boolean))
        } catch {
            // Lunr throws if query is invalid; treat as no results
            setResults([])
        }

        setLoading(false)
    }, [query, documents, meta])

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
                <CircularProgress />
            </Box>
        )
    }

    if (!query.trim()) return null

    if (results.length === 0) {
        return (
            <Typography color="text.secondary" sx={{ textAlign: 'center', py: 8 }}>
                {t('noResults', { query })}
            </Typography>
        )
    }

    return (
        <Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                {t('results', { count: results.length })}
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {results.map((result) => (
                    <Card key={result.url}>
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        <CardActionArea component={Link as any} href={result.url}>
                            <CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        mb: 1,
                                    }}
                                >
                                    <Typography variant="h6" component="h3">
                                        {result.title}
                                    </Typography>
                                    <Chip
                                        label={result.type}
                                        size="small"
                                        variant="outlined"
                                        color="primary"
                                    />
                                </Box>
                                <Typography variant="body2" color="text.secondary">
                                    {result.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </Box>
    )
}

// ─── Public export wrapped in Suspense (required for useSearchParams) ─────────

export default function SearchResults(props: SearchResultsProps) {
    return (
        <React.Suspense
            fallback={
                <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
                    <CircularProgress />
                </Box>
            }
        >
            <SearchResultsInner {...props} />
        </React.Suspense>
    )
}
