'use client'

import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { Link } from '@/i18n/navigation'
import ContentMeta from './ContentMeta'

// ─── Types ────────────────────────────────────────────────────────────────────

interface ContentCardProps {
    title: string
    description: string
    href: string
    image?: string
    date?: string | Date
    author?: string
    category?: string
    tags?: string[]
    locale?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContentCard({
    title,
    description,
    href,
    image,
    date,
    author,
    category,
    tags,
    locale,
}: ContentCardProps) {
    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 6,
                },
            }}
        >
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <CardActionArea component={Link as any} href={href} sx={{ flexGrow: 1 }}>
                {image && (
                    <CardMedia
                        component="img"
                        height={180}
                        image={image}
                        alt={title}
                        sx={{ objectFit: 'cover' }}
                    />
                )}
                <CardContent>
                    {category && (
                        <Chip
                            label={category}
                            size="small"
                            color="primary"
                            sx={{ mb: 1 }}
                        />
                    )}

                    <Typography
                        variant="h6"
                        component="h3"
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                    >
                        {title}
                    </Typography>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                        }}
                    >
                        {description}
                    </Typography>

                    <ContentMeta
                        date={date}
                        author={author}
                        tags={tags}
                        locale={locale}
                    />

                    {tags && tags.length > 0 && (
                        <Stack direction="row" spacing={0.5} flexWrap="wrap" sx={{ mt: 1 }}>
                            {tags.slice(0, 3).map((tag) => (
                                <Chip
                                    key={tag}
                                    label={tag}
                                    size="small"
                                    variant="outlined"
                                    sx={{ fontSize: '0.7rem' }}
                                />
                            ))}
                        </Stack>
                    )}
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
