import Grid from '@mui/material/Grid'

import { TestimonialCard } from '@/features/testimonials'
import Section from '@/ui/Section'
import type { Testimonial } from 'contentlayer/generated'

// ─── Types ────────────────────────────────────────────────────────────────────

interface TestimonialsSectionProps {
    testimonials: Testimonial[]
    title: string
    subtitle: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function TestimonialsSection({
    testimonials,
    title,
    subtitle,
}: TestimonialsSectionProps) {
    if (testimonials.length === 0) return null

    return (
        <Section title={title} subtitle={subtitle} background="paper">
            <Grid container spacing={3}>
                {testimonials.map((t, i) => (
                    <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
                        <TestimonialCard testimonial={t} />
                    </Grid>
                ))}
            </Grid>
        </Section>
    )
}
