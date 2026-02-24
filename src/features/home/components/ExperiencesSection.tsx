import Box from '@mui/material/Box'

import { ExperienceTimeline } from '@/features/experiences'
import Section from '@/ui/Section'
import CallToAction from '@/ui/CallToAction'
import type { Experience } from 'contentlayer/generated'

// ─── Types ────────────────────────────────────────────────────────────────────

interface ExperiencesSectionProps {
    experiences: Experience[]
    title: string
    subtitle: string
    viewAllLabel: string
    presentLabel?: string
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ExperiencesSection({
    experiences,
    title,
    subtitle,
    viewAllLabel,
    presentLabel,
}: ExperiencesSectionProps) {
    if (experiences.length === 0) return null

    return (
        <Section title={title} subtitle={subtitle} maxWidth="md" background="paper">
            <ExperienceTimeline
                experiences={experiences}
                presentLabel={presentLabel}
            />
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <CallToAction href="/experiences" variant="outlined">
                    {viewAllLabel}
                </CallToAction>
            </Box>
        </Section>
    )
}
