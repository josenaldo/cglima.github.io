import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

// ─── Types ────────────────────────────────────────────────────────────────────

interface ContentMetaProps {
    date?: string | Date
    author?: string
    category?: string
    tags?: string[]
    readingTime?: number
    locale?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContentMeta({
    date,
    author,
    category,
    tags,
    readingTime,
    locale = 'pt',
}: ContentMetaProps) {
    const dateLocale = locale === 'pt' ? ptBR : undefined
    const formattedDate = date
        ? format(new Date(date), 'dd MMM yyyy', { locale: dateLocale })
        : null

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: 1,
                color: 'text.secondary',
                my: 2,
            }}
        >
            {formattedDate && (
                <Typography variant="caption" component="time">
                    {formattedDate}
                </Typography>
            )}

            {author && (
                <Typography variant="caption">• {author}</Typography>
            )}

            {readingTime && (
                <Typography variant="caption">• {readingTime} min</Typography>
            )}

            {category && (
                <Chip label={category} size="small" variant="outlined" />
            )}

            {tags?.map((tag) => (
                <Chip key={tag} label={tag} size="small" color="primary" variant="outlined" />
            ))}
        </Box>
    )
}
