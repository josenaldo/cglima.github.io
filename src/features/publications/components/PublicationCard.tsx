import LaunchIcon from '@mui/icons-material/Launch'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import type { Publication } from 'contentlayer/generated'

// ─── Component ────────────────────────────────────────────────────────────────

interface PublicationCardProps {
    publication: Publication
    locale?: string
    typeLabels?: Record<string, string>
    viewLabel?: string
}

export default function PublicationCard({
    publication,
    locale = 'pt',
    typeLabels,
    viewLabel = 'Ver publicação',
}: PublicationCardProps) {
    const dateLocale = locale === 'pt' ? ptBR : undefined
    const formattedDate = format(new Date(publication.date), 'MMM yyyy', {
        locale: dateLocale,
    })
    const typeLabel = typeLabels?.[publication.type] ?? publication.type

    return (
        <Card
            sx={{
                height: '100%',
                transition: 'box-shadow 0.2s',
                '&:hover': { boxShadow: 4 },
            }}
        >
            <CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        gap: 1,
                        mb: 1,
                    }}
                >
                    <Typography variant="h6" component="h3" fontWeight={600}>
                        {publication.title}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 0.5, flexShrink: 0 }}>
                        <Chip label={typeLabel} size="small" color="primary" variant="outlined" />
                        <Chip label={formattedDate} size="small" variant="outlined" />
                    </Box>
                </Box>

                <Typography variant="body2" color="text.secondary" gutterBottom>
                    {publication.publisher}
                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, lineHeight: 1.6 }}
                >
                    {publication.description}
                </Typography>

                {publication.url && (
                    <Button
                        href={publication.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<LaunchIcon />}
                        size="small"
                        variant="outlined"
                    >
                        {viewLabel}
                    </Button>
                )}
            </CardContent>
        </Card>
    )
}
