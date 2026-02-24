import SlideshowIcon from '@mui/icons-material/Slideshow'
import VideoIcon from '@mui/icons-material/VideoLibrary'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import type { Presentation } from 'contentlayer/generated'

// ─── Component ────────────────────────────────────────────────────────────────

interface PresentationCardProps {
    presentation: Presentation
    locale?: string
    slidesLabel?: string
    videoLabel?: string
}

export default function PresentationCard({
    presentation,
    locale = 'pt',
    slidesLabel = 'Ver slides',
    videoLabel = 'Ver vídeo',
}: PresentationCardProps) {
    const dateLocale = locale === 'pt' ? ptBR : undefined
    const formattedDate = format(new Date(presentation.date), 'dd MMM yyyy', {
        locale: dateLocale,
    })

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
                        {presentation.title}
                    </Typography>
                    <Chip label={formattedDate} size="small" variant="outlined" />
                </Box>

                <Typography variant="body2" color="text.secondary" gutterBottom>
                    {presentation.event}
                    {presentation.location && ` · ${presentation.location}`}
                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, lineHeight: 1.6 }}
                >
                    {presentation.description}
                </Typography>

                <Stack direction="row" spacing={1}>
                    {presentation.slidesUrl && (
                        <Button
                            href={presentation.slidesUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={<SlideshowIcon />}
                            size="small"
                            variant="outlined"
                        >
                            {slidesLabel}
                        </Button>
                    )}
                    {presentation.videoUrl && (
                        <Button
                            href={presentation.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={<VideoIcon />}
                            size="small"
                            variant="outlined"
                        >
                            {videoLabel}
                        </Button>
                    )}
                </Stack>
            </CardContent>
        </Card>
    )
}
