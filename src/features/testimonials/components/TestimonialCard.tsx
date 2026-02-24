import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

import type { Testimonial } from 'contentlayer/generated'

// ─── Component ────────────────────────────────────────────────────────────────

interface TestimonialCardProps {
    testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
    return (
        <Card sx={{ height: '100%', position: 'relative' }}>
            <CardContent sx={{ p: 3 }}>
                <FormatQuoteIcon
                    sx={{
                        fontSize: 40,
                        color: 'primary.main',
                        opacity: 0.3,
                        position: 'absolute',
                        top: 16,
                        right: 16,
                    }}
                />

                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ fontStyle: 'italic', mb: 3, lineHeight: 1.7 }}
                >
                    &ldquo;{testimonial.testimonial}&rdquo;
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Avatar
                        src={testimonial.image}
                        alt={testimonial.name}
                        sx={{ width: 48, height: 48 }}
                    />
                    <Box>
                        <Typography variant="subtitle2" fontWeight={600}>
                            {testimonial.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            {testimonial.position}
                            {testimonial.company && ` — ${testimonial.company}`}
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}
